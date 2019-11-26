import React, { Component } from 'react';
import { bosses } from '../../data/flagData';
import './boss-selector.scss';

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
        const orderedBosses = bosses.sort((a, b) => a.id - b.id);
        return (
            <div className="boss-picker-container">
                {orderedBosses.map(boss => {
                    return (
                        <img alt={boss.title} key={boss.id} src={`/images/boss-icons/${boss.iconFile}`} />
                    )
                })}
            </div>
        );
    }
}

export default BossSelector;
