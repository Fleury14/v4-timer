// @flow
import React, { Component } from 'react';
import type { FlagObject, TObjective, BossTime } from '../../types/types';
import { Clock, Objective, ObjectivePicker, BossTimer, FlagInfo } from '..';
import BossDisplayTime from './boss-time-display';
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
    bossTimes: BossTime[],
    required: number,
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
        bossTimes: [],
        required: 0,
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
            targetObjective.time = this.state.currentTime ? this.state.currentTime : 1;
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
        if (!this.state.flagObj) {
            this.setState({ flagObj: this.props.flagObj });
        }

        if (this.state.objectiveEditing !== id)
        {
            this.setState({ objectiveEditing: id });
        } else {
            this.setState({ objectiveEditing: null });
        }  
    }

    applyEdit(id: number, title: string) {
        const { flagObj, objectiveEditing } = this.state;
        if (flagObj && flagObj.objectives) {
            const target:void | TObjective = flagObj.objectives.find(obj => obj.id === id);
            if (target) {
                target.label = title;
            }
            let newObjEditing = objectiveEditing;
            if (typeof newObjEditing === 'number') {
                if (newObjEditing === flagObj.objectives.length - 1) {
                    newObjEditing = null;
                } else {
                    while (newObjEditing < flagObj.objectives.length - 1) {
                        if (flagObj.objectives[newObjEditing + 1].random) {
                            newObjEditing++;
                            break;
                        }
                        if (newObjEditing === flagObj.objectives.length - 2) {
                            newObjEditing = null;
                            break;
                        }
                        newObjEditing++;
                    }
                }
                
            }
            
            this.setState({ flagObj, objectiveEditing: newObjEditing })
        }
        
        
    }

    render() {
        // sort objectives by finished time for completed objectives
        let sortedObj = null;
        let goMode = false;
        if (this.state.flagObj) {
            sortedObj = this.state.flagObj.objectives.sort((a:TObjective, b:TObjective) => a.time !== undefined && b.time !== undefined ? a.time - b.time : 0);
            if (this.state.flagObj && this.state.flagObj.required > 0 && this.state.flagObj.objectives && this.state.flagObj.objectives.filter(obj => obj.time !== 0).length >= this.state.flagObj.required) {
                goMode = true;
            }
        }
        const hasFinishedOne = (this.state.flagObj && this.state.flagObj.objectives && this.state.flagObj.objectives.find(obj => obj.time !== 0));
        
        return (
            <div className="whole-wrapper">
                <div className="left-wrapper">
                    <div>
                        <h2 className="sub-title">REMAINING</h2>
                        {/* this handles pre-start display, and avoids the need to set state upon mounting/updating */}
                        {!this.state.timerActive && this.props.flagObj && this.props.flagObj.objectives.map(objective => {
                            if (!objective.time) return (
                                <Objective
                                    notRequired={goMode}
                                    editing={this.state.objectiveEditing}
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
                                    notRequired={goMode}
                                    editing={this.state.objectiveEditing}
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
                        <h2 className={hasFinishedOne ? 'sub-title' : 'hidden'}>COMPLETE</h2>
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
                                    edit={() => this.toggleRandomEditor(objective.id)}
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
                        >
                            <BossTimer 
                                assignBoss={({ id, title, time }) => this.setState({ bossTimes: [...this.state.bossTimes, { id, title, time }]})}
                            />
                            {this.state.bossTimes.length ? (
                            <BossDisplayTime
                                modifyTime={({ id, title, time }) => {
                                    const currentTimes = this.state.bossTimes.slice();
                                    if (currentTimes) {
                                        const foundTime = currentTimes.find(eachTime => eachTime.time === time);
                                        if (foundTime) {
                                            foundTime.id = id;
                                            foundTime.title = title;
                                            this.setState({ bossTimes: currentTimes });
                                        }
                                    }
                                }}
                                bossTimes={this.state.bossTimes}
                            />
                        ) : null}
                        </Clock>
                    </React.Fragment>
                    
                    
                </div>
                <div>
                    {this.state.objectiveEditing !== null ? (
                        <React.Fragment>
                            <ObjectivePicker
                                id={this.state.objectiveEditing}
                                edit={(id, title) => this.applyEdit(id, title)}    
                                done={() => this.setState({ objectiveEditing: null })}
                            />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <FlagInfo />
                        </React.Fragment>
                    )}
                </div>
            </div>
        );
    }
}

export default TimerComponent;
