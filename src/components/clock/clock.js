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
    children: any,
}

const Clock = (props: Props) => {
    const { bossTimer } = props;
    const hideTimer = localStorage.getItem('hideTimer');
    if (hideTimer === 'true') return null;
    return (
        <div>
            <div className={`${bossTimer ? 'boss-' : ''}time-container`}>
                <p className={`time${props.finished ? ' time-finished' : ''}${bossTimer ? 'boss-time' : ''}`}>{parseTime(props.currentTime)}</p>
                <div>
                    {props.children}
                </div>
                <div className={`${bossTimer ? 'boss-' : ''}time-button-container`}>
                    <button disabled={props.active || (props.bossTimer && !props.pauseTime)} onClick={() => props.begin()}>{props.pauseTime ? 'Resume' : 'Start'}</button>
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
