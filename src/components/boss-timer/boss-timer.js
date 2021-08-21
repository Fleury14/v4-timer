// @flow
import React, { Component } from 'react';
import { Clock, BossSelector } from '..';

type Props = {
    assignBoss: Function,
    modifyTime: Function,
};

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
        const selectedKey = localStorage.getItem('key');
        const targetKey = selectedKey || ' ';
        const allowTyping = localStorage.getItem('allowTyping');
        if (e.key === targetKey && allowTyping !== 'true') {  
            if (document.body) document.body.classList.add('no-scroll');
            if (!this.state.isActive && this.state.finished) {
                this.setState({ isActive: true, finished: false });
                this.beginTimer();
                if(document.body) document.body.classList.remove('no-scroll');        
            } else if (this.state.isActive && !this.state.finished) {
                window.scrollTo(0, 0);
                this.setState({ isActive: false });
                this.endTimer();
                
            } else {
                // user did not select a boss to assign this to, allow it to be unassigned
                window.scrollTo(0, 0);
                this.props.assignBoss({ id: 99, title: '???', time: this.state.currentTime });
                this.setState({ isActive: false, finished: true }, () => {
                if(document.body) document.body.classList.remove('no-scroll');        
                });
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
                pauseTime: 0,
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
        });
        
    }

    assignBoss(bossData: {id: number, title: string, time: number}) {
        const { id, title, time } = bossData;
        this.props.assignBoss({ id, title, time });
    }

    

    componentDidMount() {
        document.addEventListener('keyup', this.onPress.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onPress.bind(this));
    }

    render() {
        const { isActive, currentTime, finished, pauseTime } = this.state;
        return (
            <div>
            {!finished ? (
                <React.Fragment>
                    <Clock 
                        bossTimer
                        currentTime={currentTime}
                        pauseTime={pauseTime}
                        begin={() => this.beginTimer()}
                        stop={() => this.endTimer()}
                        reset={() => {
                            if (this.interval) {
                                clearInterval(this.interval);
                            }
                            if (document.body) document.body.classList.add('no-scroll');
                            
                            
                            this.setState({
                                isActive: false,
                                startTime: 0,
                                currentTime: 0,
                                pauseTime: 0,
                                finished: true,
                            }, () => {
                                if (document.body) document.body.classList.remove('no-scroll');
                                
                            });
                        }}
                    />
                    {isActive ? null : (
                        <BossSelector currentTime={currentTime} assignBoss={({ id, title }) => {
                            this.props.assignBoss({ id, title, time: this.state.currentTime });
                            if (document.body) document.body.classList.remove('no-scroll');
                            this.setState({ isActive: false, finished: true });
                            this.resetTimer();
                        }}
                        modifyTime={({ id, title , time }) => this.props.modifyTime({ id, title, time })}
                         />
                    )}
                </React.Fragment>
            ) : null}
            </div>
        );
    }
}

export default BossTimer;
