import React from 'react';
import { parseTime } from '../../helpers';
import './clock.scss';

const Clock = (props) => {
    return (
        <div>
            <div className="time-container">
                <p className="time">{parseTime(props.currentTime)}</p>
                <div className="time-button-container">
                    <button disabled={props.active} onClick={() => props.begin()}>{props.pauseTime ? 'Resume' : 'Start'}</button>
                    <button onClick={() => props.stop()}>Stop</button>
                    <button onClick={() => props.reset()}>Reset</button>
                </div>
            </div>
            
        </div>
    );
}

export default Clock;
