import React from 'react';
import { parseTime } from '../../helpers';
import './clock.scss';

const Clock = (props) => {
    return (
        <div>
            <h3>Clock</h3>
            <div>
                <p className="time">{parseTime(props.currentTime)}</p>
            </div>
            <div className="button-row">
                <button disabled={props.active} onClick={() => props.begin()}>{props.pauseTime ? 'Resume' : 'Start'}</button>
                <button onClick={() => props.stop()}>Stop</button>
                <button onClick={() => props.reset()}>Reset</button>
            </div>
        </div>
    );
}

export default Clock;
