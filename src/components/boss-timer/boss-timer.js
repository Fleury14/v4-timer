// @flow
import React, { Component } from 'react';

type Props = {};

type State = {
    isActive: boolean,
};

class BossTimer extends Component<Props, State> {
    
    state = {
        isActive: false,
    }

    onPress(e: KeyboardEvent) {
        console.log(e);
        if (e.key === ' ' && e.shiftKey && e.ctrlKey) {
        }
    }

    render() {
        const keypress = document.addEventListener('keyup', this.onPress);
        return (
            <div></div>
        );
    }
}

export default BossTimer;
