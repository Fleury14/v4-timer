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
                <h1>Main</h1>
                <React.Fragment>
                    <FlagInput onStartTimer={(flagObj) => this.setState({ showTimer: true, flagObj })} />
                </React.Fragment>
                {this.state.showTimer && <Timer flagObj={this.state.flagObj} />}
            </div>
        );
    }
    
}

export default MainComponent;
