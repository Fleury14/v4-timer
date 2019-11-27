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
    showSelector: false;
}

class BossTimeDisplay extends Component<Props, State> {
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
                                    <img key={foundBoss.id} alt={foundBoss.title} title={foundBoss.title} src={`/images/boss-icons/${foundBoss.iconFile}`} /> 
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
