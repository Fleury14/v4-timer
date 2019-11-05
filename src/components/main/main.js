import React, { Component } from 'react';
import { FlagInput, Timer } from '..';
import './main.scss';

class MainComponent extends Component {
    state = {
        showTimer: true,
        flagObj: null,
    }
    render() {
        return (
            <div>
                <h1 className="title">FF4FE Objective Timer</h1>
                <React.Fragment>
                    <FlagInput onStartTimer={(flagObj) => this.setState({ showTimer: true, flagObj })} />
                </React.Fragment>
                {this.state.showTimer && <Timer flagObj={this.state.flagObj} />}
            </div>
        );
    }
    
}

export default MainComponent;
