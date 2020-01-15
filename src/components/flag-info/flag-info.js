// @flow

import React from 'react';
import './flag-info.scss';

const FlagInfo = (props: string) => {
    const flags = sessionStorage.getItem('flags');
    if (!flags) return null;
    return (
        <div>
        Characters: {renderCharacters(flags)}
        </div>
    );
}

const renderCharacters = (flags: string) => {
    const characterText = [];

    // get character section of flag string
    const beginC = flags.indexOf('C');
    let endC = flags.length;
    for (let i = beginC; i < flags.length; i++) {
        const charTest = flags.charAt(i);
        if(charTest === ' ') {
            endC = i;
            break;
        }
    }
    const charString = flags.slice(beginC, endC)

    // main character setting
    if (charString.indexOf('standard') >= 0) {
        characterText.push(<span key="standard">Standard</span>)
    }
    if (charString.indexOf('vanilla') >= 0) {
        characterText.push(<span key="vanilla">Vanilla</span>)
    }
    if (charString.indexOf('relaxed') >= 0) {
        characterText.push(<span key="relaxed">Relaxed</span>)
    }

    // if there's extra settings, push a hyphen here
    if (charString.indexOf('/') >= 0) {
        characterText.push(<span key="hyphen"> -</span>)
    }

    // extra settings
    if (charString.indexOf('spells') >= 0) {
        characterText.push(<span key="j-spells"> J-Spells</span>)
    }
    if (charString.indexOf('abilities') >= 0) {
        characterText.push(<span key="j-abilities"> J-Abilities</span>)
    }
    if (charString.indexOf('maybe') >= 0) {
        characterText.push(<span key="maybe"> Not guaranteed</span>)
    }
    if (charString.indexOf('bye') >= 0) {
        characterText.push(<span key="bye"> No rejoin</span>)
    }
    if (charString.indexOf('nodupes') >= 0) {
        characterText.push(<span key="nodupes"> No Dupes</span>)
    }
    if (charString.indexOf('permadeath') >= 0) {
        characterText.push(<span key="permadeath"> Permadeath</span>)
    }
    if (charString.indexOf('permajoin') >= 0) {
        characterText.push(<span key="permajoin"> Permajoin</span>)
    }
    if (charString.indexOf('permadeader') >= 0) {
        characterText.push(<span key="permadeader"> PermaDEADER</span>)
    }

    return (<div>{characterText}</div>);
}

export default FlagInfo;
