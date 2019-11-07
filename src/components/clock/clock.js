import React from 'react';
import { parseTime } from '../../helpers';
import './clock.scss';

type Props = {
    currentTime: Number,
    active: Boolean,
    pauseTime?: Number,
    finished?: Boolean,
    being: Function,
    stop: Function,
    reset: Function,
    reEntry: Function,
}

const Clock = (props: Props) => {
    return (
        <div>
            <div className="time-container">
                <p className={`time${props.finished ? ' time-finished' : ''}`}>{parseTime(props.currentTime)}</p>
                <div className="time-button-container">
                    <button disabled={props.active} onClick={() => props.begin()}>{props.pauseTime ? 'Resume' : 'Start'}</button>
                    <button onClick={() => props.stop()}>Stop</button>
                    <button onClick={() => props.reset()}>Reset</button>
                </div>
                <div className="time-button-container time-bottom">
                    <button className="re-entry-button" onClick={() => props.reEntry()}>Re-Enter Flag String</button>
                    <p>Returning to the flag-input screen will end the run in progress...</p>
                </div>
            </div>
            
        </div>
    );
}

export default Clock;
