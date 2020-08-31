// @flow

import { quests, bosses } from '../data/flagData';
import type { FlagObject } from '../types/types';

const parseFlags = (flagString: string) => {
    if (!flagString || typeof flagString !== 'string') {
        return null;
    }

    const flagObj:FlagObject = {
        objectives: [],
        required: 0,
    }
    // check set objectives (non-custom)
    if (flagString.indexOf('dkmatter') >= 0 ) {
        flagObj.objectives.push({
            id: flagObj.objectives.length,
            label: 'Turn in 30 Dark Matters to Kory',
            time: 0,
        });
    }

    if (flagString.indexOf('classicforge') >= 0 ) {
        flagObj.objectives.push({
            id: flagObj.objectives.length,
            label: 'Forge the Crystal',
            time: 0,
        });
    }

    if (flagString.indexOf('classicgiant') >= 0 ) {
        flagObj.objectives.push({
            id: flagObj.objectives.length,
            label: 'Complete the Giant of Bab-il',
            time: 0,
        });
    }

    if (flagString.indexOf('fiends') >= 0 ) {
        const fiendList = ['Milon', 'Milon Z', 'Kainazzo', 'Valvalis', 'Rubicant', 'Elements'];
        for (let fiend of fiendList) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: `Defeat ${fiend}`,
                time: 0,
            });
        }
    }

    // custom -- character obtain

    const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa']

    for (let char of characters) {
        if (flagString.indexOf(`char_${char.toLowerCase()}`) >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: `Get ${char}`,
                time: 0,
            });
        }
    }

    // custom - boss hunt
    
    for (let boss of bosses) {
        if (flagString.indexOf(`boss_${boss.slug}`) >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: `Defeat ${boss.title}`,
                time: 0,
            });
        }
    }

    // custom quests

    for (let quest of quests) {
        if (flagString.indexOf(`quest_${quest.slug}`) >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: quest.title,
                time: 0,
            });
        }
    }

    // random objectives
    const randomIndex = flagString.indexOf(`random:`);
    if (randomIndex >= 0) {
        for (let i = 0; i < parseInt(flagString.charAt(randomIndex + 7)); i++) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: `Random objective ${i + 1}`,
                time: 0,
                random: true,
            });
        }
    }

    // don't forget the z-fight
    if (flagString.indexOf('win:game') < 0) {
        flagObj.objectives.push({
            id: flagObj.objectives.length,
            label: 'Defeat Zeromus',
            time: 0,
        })
    }

    // required objective number
    if (flagString.indexOf('req:') >= 0 && flagString.indexOf('req:all') < 0) {
        flagObj.required = parseInt(flagString.charAt(flagString.indexOf('req:') + 4));
    }

    return flagObj;
}

export default parseFlags;