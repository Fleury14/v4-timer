const parseFlags = (flagString) => {
    console.log('flags:', flagString);
    if (!flagString || typeof flagString !== 'string') {
        return null;
    }

    const flagObj = {
        objectives: [],
    }
    // check set objectives (non-custom)
    if (flagString.indexOf('darkmatter') >= 0 ) {
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

    return flagObj;
}

export default parseFlags;