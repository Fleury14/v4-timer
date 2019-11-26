// @flow
import React, { Component } from 'react';
import { bosses } from '../../data/flagData';
import './boss-selector.scss';

type State = {
    selected: ?number,
}

type Props = {
    currentTime: number,
    assignBoss: Function,
}

class BossSelector extends Component<Props, State> {
    state = {
        selected: null,
    }

    onSelect(boss: number) {
        this.setState({ selected: boss })
    }

    assignBoss({ id, title }: {id: number, title: string }) {
        console.log(`assign ${title} a time of ${this.props.currentTime}`);
        this.props.assignBoss({ id, title })
    }

    render() {
        const orderedBosses = bosses.sort((a, b) => a.id - b.id);
        return (
            <div className="boss-picker-container">
                {orderedBosses.map(boss => {
                    return (
                        <img onClick={() => this.assignBoss({ id: boss.id, title: boss.title})} alt={boss.title} title={boss.title} key={boss.id} src={`/images/boss-icons/${boss.iconFile}`} />
                    )
                })}
            </div>
        );
    }
}

export default BossSelector;
