// @flow
import React from 'react';
import { quests } from '../../data/flagData';
import './objective-picker.scss';

const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa'];
const bosses = ['D.Mist', 'Kaipo Guards', 'Octomamm', 'Antlion', 'Waterhag', 'MomBomb', 'Gauntlet', 'Milon', 'Milon Z', 'DKC', 'Baron Guard', 'Yang', 'Baigan', 'Kainazzo', 'Dark Elf', 'Magus Sisters', 'Valvalis', 'Calbrena', 'Golbez', 'Dr. Lugae', 'Dark Imps', 'K/Q Eblan', 'Rubicant', 'Evil Wall', 'Elements', 'CPU', 'Odin', 'Asura', 'Leviatan', 'Bahamut', 'Pale Dim', 'D.Lunar', 'Plague', 'Wyvern', 'Ogopogo'];

type Props = {
    id: number,
    edit: Function,
    done: Function,
}

const ObjectivePicker = (props: Props) => {
    const { id, edit, done } = props;
    console.log('id', id, 'edit', edit);
    return (
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
            <div className="picker-button-row">
                {bosses.map(boss => {
                    const title = `Defeat ${boss}`;
                    return (
                        <button
                            key={boss}
                            className="picker-boss-button"
                            onClick={() => edit(id, title)}
                        >
                            {boss}
                        </button>
                    );
                })}
            </div>
            <h2>Quests</h2>
            <div className="picker-button-row">
                {quests.map(quest => {
                    const title = `${quest.title}`;
                    return (
                        <button
                            key={quest.slug}
                            className="picker-quest-button"
                            onClick={() => edit(id, title)}
                        >
                            {quest.title}
                        </button>
                    );
                })}
            </div>
            <div className="center-me">
                <button className="picker-done" onClick={() => done()}>Done</button>
            </div>
            
        </div>
        
    );
}

export default ObjectivePicker;