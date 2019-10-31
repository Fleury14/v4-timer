import React, { Component } from 'react';
import { Clock, Objective } from '..';
import { parseTime } from '../../helpers';
import './timer.scss';

// expects prop of flagObj

class TimerComponent extends Component {
    state = {
        timerActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
    }

    beginTimer() {
        const startDate = this.state.pauseTime === 0 ? Date.now() : Date.now() - this.state.pauseTime;
        this.interval = setInterval(() => {
            this.setState({
                timerActive: true,
                startTime: startDate,
                currentTime: Date.now() - startDate,
            });
        }, 100)
    }

    endTimer() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.setState({ pauseTime: Date.now() - this.state.startTime, timerActive: false });
    }

    resetTimer() {
        this.setState({ 
            timerActive: false,
            startTime: 0,
            currentTime: 0,
            pauseTime: 0,
        })
    }

    objectiveComplete(id) {
        console.log(`objective ${id} done at ${parseTime(this.state.currentTime)}`);
    }

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
                                finish={(id) => this.objectiveComplete(id)}
                            />
                        )
                    })}
                </div>
                <React.Fragment>
                    <Clock
                        begin={() => this.beginTimer()}
                        stop={() => this.endTimer()}
                        reset={() => this.resetTimer()}
                        currentTime={this.state.currentTime}
                        active={this.state.timerActive}
                        pauseTime={this.state.pauseTime}
                    />
                </React.Fragment>
            </div>
        );
    }
}

export default TimerComponent;
