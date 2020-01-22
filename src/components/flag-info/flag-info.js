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
            <div className="flag-info-row">
                <p className="flag-info-label">Shops:</p>
                {renderShops(flags)}
            </div>
            <div className="flag-info-row">
                <p className="flag-info-label">Glitches:</p>
                {renderGlitches(flags)}
            </div>
        </React.Fragment>

    );
}

const renderCharacters = (flags: string) => {
    const characterText = [];

    // get character section of flag string
    const charString = getPropertySection(flags, 'C')

    // main character setting
    if (charString.indexOf('standard') >= 0) {
        characterText.push(<span key="standard" className="flag-badge">Standard</span>)
    }
    if (charString.indexOf('vanilla') >= 0) {
        characterText.push(<span key="vanilla" className="flag-badge">Vanilla</span>)
    }
    if (charString.indexOf('relaxed') >= 0) {
        characterText.push(<span key="relaxed" className="flag-badge">Relaxed</span>)
    }

    // extra settings
    if (charString.indexOf('spells') >= 0) {
        characterText.push(<span key="j-spells" className="flag-badge"> J-Spells</span>)
    }
    if (charString.indexOf('abilities') >= 0) {
        characterText.push(<span key="j-abilities" className="flag-badge"> J-Abilities</span>)
    }
    if (charString.indexOf('maybe') >= 0) {
        characterText.push(<span key="maybe" className="flag-badge"> Not guaranteed</span>)
    }
    if (charString.indexOf('bye') >= 0) {
        characterText.push(<span key="bye" className="flag-badge"> No rejoin</span>)
    }
    if (charString.indexOf('nodupes') >= 0) {
        characterText.push(<span key="nodupes" className="flag-badge"> No Dupes</span>)
    }
    if (charString.indexOf('permadeath') >= 0) {
        characterText.push(<span key="permadeath" className="flag-badge"> Permadeath</span>)
    }
    if (charString.indexOf('permajoin') >= 0) {
        characterText.push(<span key="permajoin" className="flag-badge"> Permajoin</span>)
    }
    if (charString.indexOf('permadeader') >= 0) {
        characterText.push(<span key="permadeader" className="flag-badge"> PermaDEADER</span>)
    }

    return (<div>{characterText}</div>);
}

const renderTreasure = (flags) => {
    const TreasureText = [];

    // get character section of flag string
    const trString = getPropertySection(flags, 'T');
    
    // check initial treasure settings
    if (trString.indexOf('standard') >= 0) {
        TreasureText.push(<span key="standard" className="flag-badge"> Standard (Unweighted)</span>);
    }
    if (trString.indexOf('pro') >= 0) {
        TreasureText.push(<span key="pro" className="flag-badge"> Pro (Weighted)</span>);
    }
    if (trString.indexOf('wildish') >= 0) {
        TreasureText.push(<span key="wildish" className="flag-badge"> Wild-ish (Weighted)</span>)
    }
    if (trString.indexOf('wild') >= 0 && trString.indexOf('wildish') < 0) {
        TreasureText.push(<span key="wild" className="flag-badge"> Wild (Unweighted)</span>);
    }

    // modifiers
    if (trString.indexOf('sparse') >= 0) {
        // find where "sparse" is located, then grab out where the percentage
        const sparseIndex = trString.indexOf('sparse');
        const percent = trString.slice(sparseIndex + 7, sparseIndex + 9);
        TreasureText.push(<span key="sparse" className="flag-badge"> Sparse: {percent}%</span>);
    }
    if (trString.indexOf('no:j') >= 0) {
        TreasureText.push(<span key="no-j" className="flag-badge"> No J-Items</span>);
    }
    if (trString.indexOf('junk') >= 0) {
        TreasureText.push(<span key="no-j" className="flag-badge"> Junk Included</span>);
    }

    return (<div>{TreasureText}</div>)
}

const renderGlitches = (flags) => {
    const glitchText = [];

    // get character section of flag string
    const glitchString = getPropertySection(flags, 'G');

    if (glitchString.indexOf('life') < 0) {
        glitchText.push(<span key="no-life" className="flag-badge"> No Life</span>);
    } else {
        glitchText.push(<span key="life" className="flag-badge"> Life</span>);
    }
    if (glitchString.indexOf('warp') >= 0) {
        glitchText.push(<span key="warp" className="flag-badge"> Warp</span>);
    }
    if (glitchString.indexOf('dupe') >= 0) {
        glitchText.push(<span key="dupe" className="flag-badge"> Duplication</span>);
    }
    if (glitchString.indexOf('mp') >= 0) {
        glitchText.push(<span key="mp" className="flag-badge"> MP Overflow</span>);
    }
    if (glitchString.indexOf('64') >= 0) {
        glitchText.push(<span key="64" className="flag-badge"> 64 Door</span>);
    }

    return glitchText;
}

const renderShops = (flags) => {
    const shopText = [];

    // get shop section of flag string
    const shopString = getPropertySection(flags, 'S');

    if (shopString.indexOf('vanilla') >= 0) {
        shopText.push(<span key="vanilla" className="flag-badge">Vanilla</span>);
    }
    if (shopString.indexOf('standard') >= 0) {
        shopText.push(<span key="standard" className="flag-badge">Standard</span>);
    }

    return shopText;
}

const getPropertySection = (flags: string, criteria: string) => {
    // get shop section of flag string
    const begin = flags.indexOf(criteria);
    let end = flags.length;
    for (let i = begin; i < flags.length; i++) {
        const charTest = flags.charAt(i);
        if(charTest === ' ') {
            end = i;
            break;
        }
    }

    const results = flags.slice(begin, end);
    return results;
}

export default FlagInfo;
