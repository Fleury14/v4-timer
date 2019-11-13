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
};

class ColorGateway extends Component<Props, State> {
    state = {
        color: '#333333',
        isInputting: false,
        colorInput: ''
    }

    componentDidMount() {
        const savedColor: ?string = localStorage.getItem('color')
        const gateway = document.querySelector('.color-gateway');
        if (gateway && savedColor) {
            gateway.style.backgroundColor = savedColor;
            if (savedColor !== this.state.color) {
                this.setState({ color: savedColor});
            }
        }
    }

    componentDidUpdate() {
        const gateway = document.querySelector('.color-gateway');
        if (gateway) {
            gateway.style.backgroundColor = this.state.color;
            localStorage.setItem('color', this.state.color);
        }
        
    }

    render() {
        return (
            <div className="color-gateway">
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
                {this.props.children}
            </div>
        );
    }
}

export default ColorGateway