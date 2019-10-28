import React, { Component } from 'react';
import { Clock, Objective } from '..';
import './timer.scss';

// expects prop of flagObj

class TimerComponent extends Component {
    render() {
        return (
            <div>
                <h2>Timer</h2>
                <div>
                    {this.props.flagObj && this.props.flagObj.objectives.map(objective => {
                        return (
                            <Objective
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                            />
                        )
                    })}
                </div>
                <React.Fragment>
                    <Clock />
                </React.Fragment>
            </div>
        );
    }
}

export default TimerComponent;
