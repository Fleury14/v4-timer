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

    // custom - boss hunt

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

    // custom quests

    // TODO: make this into an object in a different file that can be imported, this is somewhat sloppy

    const questSlugs = ['mistcave', 'waterfall', 'antlionnest', 'hobs', 'fabul', 'ordeals', 'baroninn', 'baroncastle', 'magnes', 'zot', 'dwarfcastle', 'lowerbabil', 'falcon',
        'sealedcave', 'monsterqueen', 'monsterking', 'baronbasement', 'giant', 'cavebahamut', 'murasamealtar', 'crystalaltar', 'whitealtar', 'ribbonaltar', 'masamunealtar',
        'burnmist', 'curefever', 'unlocksewer', 'music', 'toroiatreasury', 'magma', 'supercannon', 'unlocksealedcave', 'bigwhale', 'traderat', 'forge',
        'wakeyang', 'tradepan', 'tradepink', 'pass'];

    const questTitles = [
        'Defeat the boss of the Mist Cave',
        'Defeat the boss of the Waterfall',
        'Complete the Antlion Nest',
        'Rescue the hostage on Mt. Hobs',
        'Defend Fabul',
        'Complete Mt. Ordeals',
        'Defeat the bosses of Baron Inn',
        'Liberate Baron Castle',
        'Complete Cave Magnes',
        'Complete the Tower of Zot',
        'Defeat the boss of Lower Bab-il',
        'Launch the Falcon',
        'Complete the Sealed Cave',
        'Defeat the queen at the Town of Monsters',
        'Defeat the king at the Town of Monsters',
        'Defeat the Baron Castle basement throne',
        'Complete the Giant of Bab-il',
        'Complete Cave Bahamut',
        'Conquer the vanilla Murasame altar',
        'Conquer the vanilla Crystal Sword altar',
        'Conquer the vanilla White Spear altar',
        'Conquer the vanilla Ribbon room',
        'Conquer the vanilla Masamune altar',
        'Burn the village Mist with the Package',
        'Cure the fever with the SandRuby',
        'Unlock the sewer with the Baron Key',
        'Break the Dark Elf\'s spell with the TwinHarp',
        'Open the Toroia treasury with the Earth Crystal',
        'Drop the Magma Key into the Agart well',
        'Destroy the Super Cannon',
    ];

    const quests = [];

    for (let i = 0; i < questSlugs.length; i++) {
        quests.push({
            slug: questSlugs[i],
            title: questTitles[i],
        });
        return;
    }

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
        for (let i = 0; i <= randomIndex; i++) {
            flagObj.objectives.push({
                if: flagObj.objectives.length,
                label: `Random objective ${i + 1}`,
                time: 0
            });
        }
    }

    return flagObj;
}

export default parseFlags;