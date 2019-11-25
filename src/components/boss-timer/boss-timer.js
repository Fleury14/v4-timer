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
    state = {
        isActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        finished: false,
    }

    onPress(e: KeyboardEvent) {
        // console.log(e);
        if (e.key === ' ') {
            
            if (!this.state.isActive) {
                this.setState({ isActive: true });
            } else {
                this.setState({ isActive: false });
            }
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.onPress.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onPress.bind(this));
    }

    render() {
        const { isActive } = this.state;
        return (
            <div>
            {isActive ? (
                <React.Fragment>
                <p>Boss Timer</p>
                {/* <Clock /> */}
                </React.Fragment>
            ) : null}
            </div>
        );
    }
}

export default BossTimer;
