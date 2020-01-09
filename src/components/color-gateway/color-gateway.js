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
    isInputtingKey: boolean,
};

class ColorGateway extends Component<Props, State> {
    state = {
        color: '#333333',
        isInputting: false,
        colorInput: '',
        key: ' ',
        code: 'Space',
        isInputtingKey: false,
    }

    keyListener:any = null;

    componentDidMount() {
        document.addEventListener('keyup', this.listenerCommands.bind(this))
        const savedColor: ?string = localStorage.getItem('color');
        const savedKey: ?string = localStorage.getItem('key');
        const savedCode: ?string = localStorage.getItem('code');
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
    }

    componentDidUpdate() {
        const gateway = document.querySelector('.color-gateway');
        if (gateway) {
            gateway.style.backgroundColor = this.state.color;
            localStorage.setItem('color', this.state.color);
        }
        
    }

    componentWillUnmount() {
        document.addEventListener('keyup', this.listenerCommands.bind(this))
    }

    inputKey() {
        this.setState({
            isInputtingKey: true,   
        }, () => {
        this.keyListener = document.addEventListener('keyup', this.listenerCommands.bind(this));
        });
    }

    listenerCommands(e: KeyboardEvent) {
        if (this.state.isInputtingKey) {
            localStorage.setItem('key', e.key);
            localStorage.setItem('code', e.code);
            this.setState({ key: e.key, code: e.code, isInputtingKey: false });
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
                        {this.state.isInputtingKey ? (
                            <React.Fragment>
                                <p className="desired-key-prompt">Press Desired Key</p>
                            </React.Fragment>
                        ) : (
                            <button onClick={() => this.inputKey()}>Change</button>
                        )}
                    </div>
                </div>
                
                {this.props.children}
            </div>
        );
    }
}

export default ColorGateway