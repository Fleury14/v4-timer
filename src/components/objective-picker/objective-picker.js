// @flow
import React from 'react';
import { quests, bosses } from '../../data/flagData';
import QuestPicker from './quest-picker';
import './objective-picker.scss';

const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa'];

type Props = {
    id: number,
    edit: Function,
    done: Function,
}

const ObjectivePicker = (props: Props) => {
    const { id, edit, done } = props;
    return (
        <div className="picker-column-container">
            <div className="picker-container">
                <h2>Character</h2>
                <div className="picker-button-row">
                    {characters.map(char => {
                        const title = `Get ${char}`;
                        return (
                            <button
                                key={char}
                                className="picker-button"
                                onClick={() => edit(id, title)}
                            >
                                {char}
                            </button>
                        );
                    })}
                </div>
                <h2>Bosses</h2>
                <div className="picker-button-row picker-boss-icons">
                    {bosses.map(boss => {
                        if (boss.id === 99 || boss.id === 36) return null;
                        return (
                            <img onClick={() => edit(id, `Defeat ${boss.title}`)}  title={boss.title} alt={boss.title} key={boss.title} src={`/images/boss-icons/${boss.iconFile}`} /> 
                        );
                    })}
                </div>
                <QuestPicker
                    id={id}
                    edit={(id, quest) => edit(id, quest)}
                    quests={quests}
                />
                <div className="center-me">
                    <button className="picker-done" onClick={() => done()}>Done</button>
                </div>
            </div>
            
        </div>
    );
}

export default ObjectivePicker;