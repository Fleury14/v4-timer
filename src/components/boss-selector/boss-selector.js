import React, { Component } from 'react';

type State = {
    selected: ?number,
}

class BossSelector extends Component<Props, State> {
    state = {
        selected: null,
    }

    onSelect(boss: number) {
        this.setState({ selected: boss })
    }

    render() {
        return (
            <div className="boss-picker-container">
            </div>
        );
    }
}

export default BossSelector;
