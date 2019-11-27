// @flow
import React, { Component } from 'react';
import { BossSelector } from '..';
import { bosses } from '../../data/flagData';
import { parseTime } from '../../helpers';
import type { BossTime } from '../../types/types'

type Props = {
    bossTimes: BossTime[];
}

type State = {
    showSelector: boolean;
}

class BossTimeDisplay extends Component<Props, State> {

    state = {
        showSelector: false,
    }

    handleClick(id: number) {
        if (id === 99) {
            console.log('trigger selector');
        }
    }

    render() {
        return (
            <div>
                <div className="boss-times-wrapper">
                    {this.props.bossTimes.map(bossTime => {
                        const { id, time } = bossTime;
                        const foundBoss = bosses.find(boss => boss.id === id);
                        if (foundBoss) {
                            return (
                                <div className="boss-times">
                                    <img 
                                        onClick={() => this.handleClick(id)}
                                        key={foundBoss.id} alt={foundBoss.title}
                                        title={foundBoss.title}
                                        src={`/images/boss-icons/${foundBoss.iconFile}`}
                                        className={id === 99 ? 'boss-question' : ''}
                                    /> 
                                    <span>{parseTime(time)}</span>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    }
}

export default BossTimeDisplay;
