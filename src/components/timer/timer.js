// @flow
import React, { Component } from 'react';
import type { FlagObject, TObjective } from '../../types/types';
import { Clock, Objective, ObjectivePicker } from '..';
import './timer.scss';

// expects prop of flagObj
type Props = {
    flagObj: FlagObject,
    reEntry: Function,
}

type State = {
    timerActive: boolean,
    startTime: number,
    currentTime: number,
    pauseTime: number,
    flagObj: ?FlagObject,
    finished: boolean,
    objectiveEditing: ?number,
}

class TimerComponent extends Component<Props, State> {
    interval:any = null;
    state = {
        timerActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        flagObj: null,
        finished: false,
        objectiveEditing: null,
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
        // set objectives up, but only if hasnt been done already (editing randoms may do this already)
        if (!this.state.flagObj) {
            this.setState({ flagObj: this.props.flagObj });
        }
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

    objectiveComplete(id: number) {
        const targetObjective:void | TObjective = this.props.flagObj.objectives.find(objective => objective.id === id);
        if (targetObjective) {
            targetObjective.time = this.state.currentTime;
            this.setState({ flagObj: this.props.flagObj }, () => this.checkForFinish());
        }
        
    }

    checkForFinish() {
        if (this.state.flagObj) {
            const unfinished:void | TObjective = this.state.flagObj.objectives.find(objective => objective.time === 0);
            if (!unfinished) {
                this.setState({ finished: true });
                this.endTimer();
            }
        }
        
    }

    undoObjective(id:number) {
        const targetObjective = this.props.flagObj.objectives.find(objective => objective.id === id);
        if (targetObjective) {
            targetObjective.time = 0;
            this.setState({ flagObj: this.props.flagObj, finished: false });
        }
        
    }

    // since this is likely done prior to a race starting, the flag object exists in props at this point
    // therefore, if an edit is toggle, lets try the following
    // update the state here, previous state update should likely use rest notation to avoid overwrites on start

    toggleRandomEditor(id: number) {
        console.log('toggling edit');
        if (!this.state.flagObj) {
            this.setState({ flagObj: this.props.flagObj });
        }

        if (this.state.objectiveEditing !== id)
        {
            console.log('setting id', id);
            this.setState({ objectiveEditing: id });
        } else {
            this.setState({ objectiveEditing: null });
        }  
    }

    applyEdit(id: number, title: string) {
        console.log(`todo: apply ${title} to objective ${id}`);
    }

    render() {
        // sort objectives by finished time for completed objectives
        let sortedObj = null;
        if (this.state.flagObj) {
            sortedObj = this.state.flagObj.objectives.sort((a:TObjective, b:TObjective) => a.time && b.time ? a.time - b.time : 0);
        }
        const hasFinishedOne = (this.state.flagObj && this.state.flagObj.objectives && this.state.flagObj.objectives.find(obj => obj.time !== 0));
        
        return (
            <div>
                <div>
                    <h2>Objectives Remaining</h2>
                    {/* this handles pre-start display, and avoids the need to set state upon mounting/updating */}
                    {!this.state.timerActive && this.props.flagObj && this.props.flagObj.objectives.map(objective => {
                        if (!objective.time) return (
                            <Objective
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                                random={objective.random}
                                finish={(id) => this.objectiveComplete(id)}
                                edit={() => this.toggleRandomEditor(objective.id)}
                            />
                        )
                        return null;
                    })}
                    {/* incomplete objective display upon starting the timer */}
                    {this.state.timerActive && this.state.flagObj && this.state.flagObj.objectives.map(objective => {
                        if (!objective.time) return (
                            <Objective
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                                random={objective.random}
                                finish={(id) => this.objectiveComplete(id)}
                                time={objective.time}
                                undo={(id) => this.undoObjective(id)}
                                edit={() => this.toggleRandomEditor(objective.id)}
                            />
                        )
                        return null;
                    })}
                    {/* completed objectives */}
                    <h2 className={hasFinishedOne ? '' : 'hidden'}>Objectives Complete</h2>
                    {sortedObj && sortedObj.map(objective => {
                        if (objective.time) return (
                            <Objective
                                complete
                                key={objective.id}
                                title={objective.label}
                                id={objective.id}
                                random={objective.random}
                                finish={(id) => this.objectiveComplete(id)}
                                time={objective.time}
                                undo={(id) => this.undoObjective(id)}
                                editRandom={() => this.toggleRandomEditor(objective.id)}
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
                        reEntry={() => this.props.reEntry()}
                    />
                </React.Fragment>
                {this.state.objectiveEditing !== null ? (
                    <React.Fragment>
                        <ObjectivePicker
                            id={this.state.objectiveEditing}
                            edit={(id, title) => this.applyEdit(id, title)}    
                        />
                    </React.Fragment>
                ) : null}
            </div>
        );
    }
}

export default TimerComponent;
