// @flow
import React, { Component } from 'react';
import { BossSelector } from '..';
import { bosses } from '../../data/flagData';
import { parseTime } from '../../helpers';
import type { BossTime } from '../../types/types'

type Props = {
    bossTimes: BossTime[];
    modifyTime: Function;
}

type State = {
    showSelector: boolean;
    selectedTime: number;
}

class BossTimeDisplay extends Component<Props, State> {

    state = {
        showSelector: false,
        selectedTime: 0,
    }

    handleClick(id: number, time: number) {
        if (id === 99) {
            this.setState({ showSelector: true, selectedTime: time });
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
                                        onClick={() => this.handleClick(id, time)}
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
                <div>
                    {this.state.showSelector ? (
                        <BossSelector 
                            assignBoss={({id, title}) => {
                                // modify bosstime array uh oh
                                this.props.modifyTime({ id, title, time: this.state.selectedTime })
                                this.setState({ showSelector: false, selectedTime: 0 });
                                
                            }}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default BossTimeDisplay;
