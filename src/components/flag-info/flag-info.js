// @flow

import React from 'react';
import './flag-info.scss';

const FlagInfo = (props: string) => {
    const flags = sessionStorage.getItem('flags');
    if (!flags) return null;
    return (
        <React.Fragment>
            <div className="flag-info-row">
                <p className="flag-info-label">Characters:</p>
                {renderCharacters(flags)}
            </div>
            <div className="flag-info-row">
                <p className="flag-info-label">Treasure:</p>
                {renderTreasure(flags)}
            </div>
        </React.Fragment>

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
    const charString = flags.slice(beginC, endC);

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

const renderTreasure = (flags) => {
    const TreasureText = [];

    // get character section of flag string
    const beginT = flags.indexOf('T');
    let endT = flags.length;
    for (let i = beginT; i < flags.length; i++) {
        const charTest = flags.charAt(i);
        if(charTest === ' ') {
            endT = i;
            break;
        }
    }
    const trString = flags.slice(beginT, endT);
    
    // check initial treasure settings
    if (trString.indexOf('standard') >= 0) {
        TreasureText.push(<span key="standard"> Standard (Unweighted)</span>);
    }
    if (trString.indexOf('pro') >= 0) {
        TreasureText.push(<span key="pro"> Pro (Weighted)</span>);
    }
    if (trString.indexOf('wildish') >= 0) {
        TreasureText.push(<span key="wildish"> Wild-ish (Weighted)</span>)
    }
    if (trString.indexOf('wild') >= 0 && trString.indexOf('wildish') < 0) {
        TreasureText.push(<span key="wild"> Wild (Unweighted)</span>);
    }

    // modifiers
    if (trString.indexOf('sparse') >= 0) {
        // find where "sparse" is located, then grab out where the percentage
        const sparseIndex = trString.indexOf('sparse');
        const percent = trString.slice(sparseIndex + 7, sparseIndex + 9);
        TreasureText.push(<span key="sparse"> Sparse: {percent}%</span>);
    }

    return (<div>{TreasureText}</div>)
}

export default FlagInfo;
