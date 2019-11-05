import React, { Component } from 'react';
import { Clock, Objective } from '..';
import './timer.scss';

// expects prop of flagObj

class TimerComponent extends Component {
    state = {
        timerActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        flagObj: null,
        finished: false,
    }

    beginTimer() {
        const startDate = this.state.pauseTime === 0 ? Date.now() : Date.now() - this.state.pauseTime;
        this.interval = setInterval(() => {
            this.setState({
                timerActive: true,
                startTime: startDate,
                currentTime: Date.now() - startDate,
            });
        }, 100);
        // set objectives up
        this.setState({ flagObj: this.props.flagObj });
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
        const targetObjective = this.props.flagObj.objectives.find(objective => objective.id === id);
        targetObjective.time = this.state.currentTime;
        this.setState({ flagObj: this.props.flagObj }, () => this.checkForFinish());
    }

    checkForFinish() {
        // console.log(this.state);
        const unfinished = this.state.flagObj.objectives.find(objective => objective.time === 0);
        console.log(unfinished);
        if (!unfinished) {
            this.setState({ finished: true });
            this.endTimer();
        }
    }

    undoObjective(id) {
        const targetObjective = this.props.flagObj.objectives.find(objective => objective.id === id);
        targetObjective.time = 0;
        this.setState({ flagObj: this.props.flagObj, finished: false });
    }

    render() {
        // sort objectives by finished time for completed objectives
        let sortedObj = null;
        if (this.state.flagObj) {
            sortedObj = this.state.flagObj.objectives.sort((a, b) => a.time - b.time);
        }
        
        return (
            <div>
                <div>
                    <h2>Objectives Remaining</h2>
                    {!this.state.timerActive && this.props.flagObj && this.props.flagObj.objectives.map(objective => {
                        if (!objective.time) return (
                            <Objective
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                                finish={(id) => this.objectiveComplete(id)}
                                
                            />
                        )
                        return null;
                    })}
                    {this.state.timerActive && this.state.flagObj && this.state.flagObj.objectives.map(objective => {
                        if (!objective.time) return (
                            <Objective
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                                finish={(id) => this.objectiveComplete(id)}
                                time={objective.time}
                                undo={(id) => this.undoObjective(id)}
                            />
                        )
                        return null;
                    })}
                    <h2>Objectives Complete</h2>
                    {sortedObj && sortedObj.map(objective => {
                        if (objective.time) return (
                            <Objective
                                complete
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                                finish={(id) => this.objectiveComplete(id)}
                                time={objective.time}
                                undo={(id) => this.undoObjective(id)}
                            />
                        )
                        return null;
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
                        finished={this.state.finished}
                    />
                </React.Fragment>
            </div>
        );
    }
}

export default TimerComponent;
