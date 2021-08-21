// @flow
import React, { Component } from 'react';
import './color-gateway.scss';

type Props = {
    children: any,
}

type State = {
    color: string,
    isInputting: boolean,
    colorInput: string,
    key: string,
    code: string,
    isInputtingKey: string,
    timerCode: string,
    timerKey: string,
};

class ColorGateway extends Component<Props, State> {
    state = {
        color: '#333333',
        isInputting: false,
        colorInput: '',
        key: '9',
        code: 'Numpad9',
        isInputtingKey: '',
        timerCode: 'Numpad5',
        timerKey: '5',
    }

    keyListener:any = null;

    componentDidMount() {
        document.addEventListener('keyup', this.listenerCommands.bind(this));
        const savedColor: ?string = localStorage.getItem('color');
        const savedKey: ?string = localStorage.getItem('key');
        const savedCode: ?string = localStorage.getItem('code');
        const savedTimerKey: ?string = localStorage.getItem('timerKey');
        const savedTimerCode: ?string = localStorage.getItem('timerCode');
        const gateway = document.querySelector('.color-gateway');
        if (gateway && savedColor) {
            gateway.style.backgroundColor = savedColor;
            if (savedColor !== this.state.color) {
                this.setState({ color: savedColor});
            }
        }
        if (savedKey && savedCode) {
            this.setState({ code: savedCode, key: savedKey })
        }
        if (savedTimerKey && savedTimerCode) {
            this.setState({ timerCode: savedTimerCode, timerKey: savedTimerKey });
        }
    }

    componentDidUpdate() {
        const gateway = document.querySelector('.color-gateway');
        if (gateway) {
            gateway.style.backgroundColor = this.state.color;
            localStorage.setItem('color', this.state.color);
        }
        
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.listenerCommands.bind(this))
    }

    inputKey(mode: string) {
        this.setState({
            isInputtingKey: mode,   
        }, () => {
        this.keyListener = document.addEventListener('keyup', this.listenerCommands.bind(this));
        });
    }

    listenerCommands(e: KeyboardEvent) {
        switch (this.state.isInputtingKey) {
            case 'bossTimer':
                localStorage.setItem('key', e.key);
                localStorage.setItem('code', e.code);
                this.setState({ key: e.key, code: e.code, isInputtingKey: '' });
                break;
            case 'timerStop':
                localStorage.setItem('timerKey', e.key);
                localStorage.setItem('timerCode', e.code);
                this.setState({ timerKey: e.key, timerCode: e.code, isInputtingKey: '' });
                break;
            default:
                this.setState({ isInputtingKey: '' });
        }
    }

    render() {
        return (
            <div className="color-gateway">
                <div className="changer-row">
                    <div className="color-changer">
                        <p>Background Color: {this.state.color}</p>
                        {this.state.isInputting ? (
                            <React.Fragment>
                                <input
                                    value={this.state.colorInput}
                                    onChange={(e) =>this.setState({ colorInput: e.target.value })}
                                ></input>
                                <button onClick={() => this.setState({ color: this.state.colorInput, isInputting: false })}>Change</button>
                            </React.Fragment>
                        ) : (
                            <button onClick={() => this.setState({ isInputting: true })}>Change</button>
                        )}
                    </div>
                    <div className="key-changer">
                        <p>Boss Timer Key: {this.state.code}</p>
                        {this.state.isInputtingKey === 'bossTimer' ? (
                            <React.Fragment>
                                <p className="desired-key-prompt">Press Desired Key</p>
                            </React.Fragment>
                        ) : (
                            <button onClick={() => this.inputKey('bossTimer')}>Change</button>
                        )}
                    </div>
                    <div className="key-changer">
                        <p>Stop/Resume Timer Key: {this.state.timerCode}</p>
                        {this.state.isInputtingKey === 'timerStop' ? (
                            <React.Fragment>
                                <p className="desired-key-prompt">Press Desired Key</p>
                            </React.Fragment>
                        ) : (
                            <button onClick={() => this.inputKey('timerStop')}>Change</button>
                        )}
                    </div>
                </div>
                
                {this.props.children}
            </div>
        );
    }
}

export default ColorGateway