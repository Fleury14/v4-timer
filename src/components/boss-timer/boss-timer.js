// @flow
import React, { Component } from 'react';
import { Clock } from '..';

type Props = {};

type State = {
    isActive: boolean,
    startTime: number,
    currentTime: number,
    pauseTime: number,
    finished: boolean,
};

class BossTimer extends Component<Props, State> {
    interval:any = null;
    state = {
        isActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        finished: true,
    }

    onPress(e: KeyboardEvent) {

        // typical timer cycle:
        // on mount: finished && !isActive
        // clicking once starts timer, transitions to !finished and isActive
        // clicking a second time stops times, stays unfinished but deactivates the timer
        // a third event finalized the time, setting it back to finished and !isActive and resets the time

        if (e.key === ' ') {  
            if (!this.state.isActive && this.state.finished) {
                this.setState({ isActive: true, finished: false });
                this.beginTimer();
            } else if (this.state.isActive && !this.state.finished) {
                this.setState({ isActive: false });
                this.endTimer();
            } else {
                this.setState({ isActive: false, finished: true });
                this.resetTimer();
            }
        }
    }

    beginTimer() {
        const startDate = this.state.pauseTime === 0 ? Date.now() : Date.now() - this.state.pauseTime;
        this.interval = setInterval(() => {
            this.setState({
                isActive: true,
                startTime: startDate,
                currentTime: Date.now() - startDate,
            });
        }, 100);
    }

    endTimer() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.setState({ pauseTime: Date.now() - this.state.startTime, isActive: false });
    }

    resetTimer() {
        this.setState({ 
            isActive: false,
            startTime: 0,
            currentTime: 0,
            pauseTime: 0,
        })
    }

    componentDidMount() {
        document.addEventListener('keyup', this.onPress.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onPress.bind(this));
    }

    render() {
        const { isActive, currentTime, finished } = this.state;
        return (
            <div>
            {!finished ? (
                <React.Fragment>
                    <Clock 
                        bossTimer
                        currentTime={currentTime}
                    />
                </React.Fragment>
            ) : null}
            </div>
        );
    }
}

export default BossTimer;
