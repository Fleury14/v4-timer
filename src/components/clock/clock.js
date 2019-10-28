import React, { Component } from 'react';
import { parseTime } from '../../helpers';
import './clock.scss';

class Clock extends Component {
    state = {
        timerActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
    }

    interval = null;

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

    getTime() {
        return this.state.currentTime;
    }

    render() {
        return (
            <div>
                <h3>Clock</h3>
                <div>
                    <p className="time">{parseTime(this.state.currentTime)}</p>
                </div>
                <div className="button-row">
                    <button disabled={this.state.timerActive} onClick={() => this.beginTimer()}>{this.state.pauseTime ? 'Resume' : 'Start'}</button>
                    <button onClick={() => this.endTimer()}>Stop</button>
                    <button onClick={() => this.resetTimer()}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Clock;
