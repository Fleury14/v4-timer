// @flow

import { quests } from '../data/flagData';
import type { FlagObject } from '../types/types'

const parseFlags = (flagString: string) => {
    if (!flagString || typeof flagString !== 'string') {
        return null;
    }

    const flagObj:FlagObject = {
        objectives: [],
    }
    // check set objectives (non-custom)
    if (flagString.indexOf('dkmatter') >= 0 ) {
        flagObj.objectives.push({
            id: flagObj.objectives.length,
            label: 'Turn in 50 Dark Matters to Kory',
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

    const bosses = ['dmist', 'officer', 'octomamm', 'antlion', 'waterhag', 'mombomb', 'fabulgauntlet', 'milonz', 'mirrorcecil',
        'guard', 'karate', 'baigan', 'kainazzo', 'darkelf', 'magus', 'valvalis', 'calbrena', 'golbez', 'lugae', 'darkimp', 'kingqueen',
        'rubicant', 'evilwall', 'asura', 'leviatan', 'odin', 'bahamut', 'elements', 'cpu', 'paledim', 'wyvern', 'plague', 'dlunar', 'ogopogo'];
    
    for (let boss of bosses) {
        if (flagString.indexOf(`boss_${boss}`) >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: `Defeat ${boss}`,
                time: 0,
            });
        }
    }

    // Milon needs a special exemption since you cant spell 'milonz' without 'milon'
    if (flagString.indexOf('boss_milon/') >= 0 || flagString.indexOf('boss_milon ') >= 0) {
        flagObj.objectives.push({
            id: flagObj.objectives.length,
            label: 'Defeat Milon'
        });
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
    console.log();
    if (randomIndex >= 0) {
        for (let i = 0; i < parseInt(flagString.charAt(randomIndex + 7)); i++) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: `Random objective ${i + 1}`,
                time: 0,
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

    return flagObj;
}

export default parseFlags;