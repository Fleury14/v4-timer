const parseFlags = (flagString) => {
    console.log('flags:', flagString);
    if (!flagString || typeof flagString !== 'string') {
        return null;
    }

    const flagObj = {
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

    const bosses = ['dmist', 'officer', 'octomamm', 'antlion', 'waterhag', 'mombomb', 'fabulgauntlet', 'milon', 'milonz', 'mirrorcecil',
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


    return flagObj;
}

export default parseFlags;