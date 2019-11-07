import React, { Component } from 'react';
import { FlagInput, Timer } from '..';
import './main.scss';
import { tryStatement } from '@babel/types';

class MainComponent extends Component {
    state = {
        showTimer: false,
        flagObj: null,
    }
    render() {
        return (
            <div>
                <h1 className="title">FF4FE Objective Timer</h1>
                <React.Fragment>
                        {!this.state.showTimer && <FlagInput onStartTimer={(flagObj) => this.setState({ showTimer: true, flagObj })} />}
                </React.Fragment>
                {this.state.showTimer && (
                <div className="timer-wrapper">
                    <Timer flagObj={this.state.flagObj} reEntry={() => this.setState({ showTimer: false })} />
                </div>    
                )}
            </div>
        );
    }
    
}

export default MainComponent;
