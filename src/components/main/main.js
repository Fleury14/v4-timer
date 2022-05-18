import React, { Component } from 'react';
import { FlagInput, Timer, ColorGateway } from '..';
import './main.scss';

class MainComponent extends Component {
    state = {
        showTimer: false,
        flagObj: null,
        showClock: localStorage.getItem('hideTimer') === 'true',
    }
    render() {
        
        return (
            <ColorGateway adjustTimer={val => this.setState({showClock: val})} >
                <div>
                    <React.Fragment>
                            {!this.state.showTimer && <FlagInput onStartTimer={(flagObj) => this.setState({ showTimer: true, flagObj })} />}
                    </React.Fragment>
                    {this.state.showTimer && (
                    <div className="timer-wrapper">
                        <Timer flagObj={this.state.flagObj} reEntry={() => this.setState({ showTimer: false })} />
                    </div>    
                    )}
                </div>
            </ColorGateway>
        );
    }
    
}

export default MainComponent;
