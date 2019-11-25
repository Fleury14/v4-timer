// @flow
import React from 'react';
import ConfirmReset from './confirm-reset';
import { parseTime } from '../../helpers';
import './clock.scss';

type Props = {
    currentTime: number,
    active: boolean,
    pauseTime?: number,
    finished?: boolean,
    begin: Function,
    stop: Function,
    reset: Function,
    reEntry: Function,
    bossTimer?: boolean,
}

const Clock = (props: Props) => {
    const { bossTimer } = props;
    return (
        <div>
            <div className={`${bossTimer ? 'boss-' : ''}time-container`}>
                <p className={`time${props.finished ? ' time-finished' : ''}${bossTimer ? 'boss-time' : ''}`}>{parseTime(props.currentTime)}</p>
                <div className={`${bossTimer ? 'boss-' : ''}time-button-container`}>
                    <button disabled={props.active} onClick={() => props.begin()}>{props.pauseTime ? 'Resume' : 'Start'}</button>
                    <button onClick={() => props.stop()}>Stop</button>
                    <button onClick={() => props.reset()}>Reset</button>
                </div>
                {bossTimer ? null : (
                    <div className="time-button-container time-bottom">
                        <ConfirmReset confirmAction={() => props.reEntry()} />
                        <p>Returning to the flag-input screen will end the run in progress...</p>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default Clock;
