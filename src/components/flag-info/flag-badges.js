// @flow

import React from 'react';
import { kitList } from '../../data/kit-list';
import './flag-info.scss';

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
    if (charString.indexOf('hero') >= 0) {
        characterText.push(<span key="relaxed" className="flag-badge flag-badge-danger">Starting character is the HERO</span>)
    }

    // extra settings
    if (charString.indexOf('spells') >= 0) {
        characterText.push(<span key="j-spells" className="flag-badge"> J-Spells</span>)
    }
    if (charString.indexOf('abilities') >= 0) {
        characterText.push(<span key="j-abilities" className="flag-badge"> J-Abilities</span>)
    }
    if (charString.indexOf('nekkie') >= 0) {
        characterText.push(<span key="nekkie" className="flag-badge"> Limited gear start</span>);
    }
    if (charString.indexOf('distinct') >= 0) {
        const distinctIndex = charString.indexOf('distinct');
        const numStart = distinctIndex + 9;
        const isTwoDigit = numStart === charString.length - 1 || charString.charAt(numStart + 1) !== '/';
        const numOfChars = parseInt(charString.slice(numStart, isTwoDigit ? numStart + 2 : numStart + 1));
        characterText.push(numOfChars < 8
        ? <span key="distinct" className="flag-badge flag-badge-danger">{numOfChars} distinct</span>
        : <span key="distinct" className="flag-badge">{numOfChars} distinct</span>
        );
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
    if (charString.indexOf('party') >= 0) {
        const partyIndex = charString.indexOf('party');
        const numStart = partyIndex + 6;
        const partySize = parseInt(charString.slice(numStart, numStart + 1));
        characterText.push(<span key="party-size" className={`flag-badge${partySize < 4 ? ' flag-badge-danger' : ''}`}> Max party size: {partySize}</span>)
    }
    if (charString.indexOf('permadeath') >= 0) {
        characterText.push(<span key="permadeath" className="flag-badge flag-badge-danger"> Permadeath</span>)
    }
    if (charString.indexOf('permajoin') >= 0) {
        characterText.push(<span key="permajoin" className="flag-badge flag-badge-danger"> Permajoin</span>)
    }
    if (charString.indexOf('permadeader') >= 0) {
        characterText.push(<span key="permadeader" className="flag-badge flag-badge-danger"> PermaDEADER</span>)
    }

    return (<div>{characterText}</div>);
}

const renderTreasure = (flags: string) => {
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
        TreasureText.push(<span key="wild" className="flag-badge flag-badge-yay"> Wild (Unweighted)</span>);
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
    if (trString.indexOf('maxtier:6') >= 0) {
        TreasureText.push(<span key="max-tier" className="flag-badge"> No tier 7 untrapped</span>);
    }
    if (trString.indexOf('money') >= 0) {
        TreasureText.push(<span key="money" className="flag-badge flag-badge-danger"> All untrapped are $MONEY$</span>);
    }

    return (<div>{TreasureText}</div>)
}

const renderGlitches = (flags: string) => {
    const glitchText = [];

    // get character section of flag string
    const glitchString = getPropertySection(flags, 'G');

    if (glitchString.indexOf('life') < 0) {
        glitchText.push(<span key="no-life" className="flag-badge flag-badge-danger"> No Life</span>);
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
    if (glitchString.indexOf('sylph') < 0) {
        glitchText.push(<span key="sylph" className="flag-badge flag-badge-danger"> Sylph gitch OFF</span>)
    }
    if (glitchString.indexOf('sylph') >= 0) {
        glitchText.push(<span key="sylph" className="flag-badge"> Sylph</span>)
    }

    return (<div>{glitchText}</div>);
}

const renderShops = (flags: string) => {
    const shopText = [];

    // get shop section of flag string
    const shopString = getPropertySection(flags, 'S');

    if (shopString.indexOf('vanilla') >= 0) {
        shopText.push(<span key="vanilla" className="flag-badge">Vanilla</span>);
    }
    if (shopString.indexOf('standard') >= 0) {
        shopText.push(<span key="standard" className="flag-badge">Standard</span>);
    }
    if (shopString.indexOf('pro') >= 0) {
        shopText.push(<span key="standard" className="flag-badge">Pro</span>);
    }
    if (shopString.indexOf('wild') >= 0) {
        shopText.push(<span key="standard" className="flag-badge flag-badge-yay">Wild</span>);
    }
    if (shopString.indexOf('free') >= 0) {
        shopText.push(<span key="standard" className="flag-badge flag-badge-yay">Everything is FREE</span>);
    }
    if (shopString.indexOf('apples') >= 0) {
        shopText.push(<span key="no-apples" className="flag-badge">No Apples</span>);
    }
    if (shopString.indexOf('sirens') >= 0) {
        shopText.push(<span key="no-sirens" className="flag-badge flag-badge-danger">No Sirens</span>);
    }
    if (shopString.indexOf('sell:0') >= 0) {
        shopText.push(<span key="sell-0" className="flag-badge flag-badge-danger">Everything Sells for 0GP</span>);
    }
    if (shopString.indexOf('life') >= 0) {
        shopText.push(<span key="no-life" className="flag-badge flag-badge-danger">No Life Potions</span>);
    }
    if (shopString.indexOf('no:j') >= 0) {
        shopText.push(<span key="no-j" className="flag-badge flag-badge-danger">No J-Items</span>);
    }

    return (<div>{shopText}</div>);
}

const renderKeyItems = (flags: string) => {
    const keyItems = [];

    const keyItemString = getPropertySection(flags, 'K');

    if (keyItemString.indexOf('vanilla') >= 0) {
        keyItems.push(<span key="vanilla" className="flag-badge">Vanilla</span>);
    }
    if (keyItemString.indexOf('summon') >= 0) {
        keyItems.push(<span key="summon" className="flag-badge">Summoned Monsters</span>);
    }
    if (keyItemString.indexOf('moon') >= 0) {
        keyItems.push(<span key="moon" className="flag-badge">Moon Bosses</span>);
    }
    if (keyItemString.indexOf('trap') >= 0) {
        keyItems.push(<span key="vanilla" className="flag-badge">Trapped Chests</span>);
    }
    if (keyItemString.indexOf('unsafe') >= 0) {
        keyItems.push(<span key="unsafe" className="flag-badge flag-badge-danger">Safety checks OFF</span>);
    }
    if (keyItemString.indexOf('main') >= 0 && keyItemString.indexOf('summon') < 0 && keyItemString.indexOf('trap') < 0 && keyItemString.indexOf('moon') < 0) {
        keyItems.push(<span key="main-only" className="flag-badge flag-badge-yay">Main Checks Only</span>);
    }
    return (<div>{keyItems}</div>)

}

const renderMisc = (flags: string) => {
    const misc = [];

    if (flags.indexOf('spoon') >= 0) {
        misc.push(<span key="spoon" className="flag-badge flag-badge-yay">SPOON!</span>)
    }
    if (flags.indexOf('supersmith') >= 0) {
        misc.push(<span key="spoon" className="flag-badge flag-badge-yay">GBA Weapon Forge</span>)
    }
    if (flags.indexOf('nocursed') >= 0) {
        misc.push(<span key="spoon" className="flag-badge flag-badge-yay">No Cursed Rings</span>)
    }
    if (flags.indexOf('noadamants') >= 0) {
        misc.push(<span key="nooadamants" className="flag-badge">No adamant armors</span>)
    }
    if (flags.indexOf('pushbtojump') >= 0) {
        misc.push(<span key="pushbtojump" className="flag-badge flag-badge-yay">Push B to Jump</span>)
    }
    if (flags.indexOf('noboost') >= 0) {
        misc.push(<span key="noboost" className="flag-badge">No Slingshot</span>)
    }

    return (<div>{misc}</div>)
}

const renderVanilla = (flags: string) => {
    const vanilla = [];

    const vanillaString = getPropertySection(flags, '-vanilla');

    if (vanillaString.indexOf('agility') >= 0) {
        vanilla.push(<span key="agility" className="flag-badge flag-badge-danger">Agility (Cecil Anchors)</span>);
    }
    if (vanillaString.indexOf('exp') >= 0) {
        vanilla.push(<span key="experience" className="flag-badge flag-badge-danger">XP gain</span>);
    }
    if (vanillaString.indexOf('fusoya') >= 0) {
        vanilla.push(<span key="fusoya" className="flag-badge flag-badge-yay">FuSoYa (all spells at start)</span>);
    }
    if (vanillaString.indexOf('traps') >= 0) {
        vanilla.push(<span key="traps" className="flag-badge">Trapped Chests</span>);
    }
    if (vanillaString.indexOf('hobs') >= 0) {
        vanilla.push(<span key="hobs" className="flag-badge">Hobs (Rydia learns Fire1)</span>);
    }
    if (vanillaString.indexOf('giant') >= 0) {
        vanilla.push(<span key="giant" className="flag-badge flag-badge-danger">No Exiting Giant</span>);
    }

    return vanilla.length > 0 ? (<div>{vanilla}</div>) : null;
}

const renderEncounters = (flags: string) => {
    const encounters = [];

    const encounterFlagString = getPropertySection(flags, 'E');
    
    if (encounterFlagString.indexOf('sirens') >= 0 || encounterFlagString.indexOf('jdrops') >= 0) {
        encounters.push(<span key="no-siren-steal" className="flag-badge">Cannot steal Sirens</span>);
    }
    if (encounterFlagString.indexOf('cantrun') >= 0) {
        encounters.push(<span key="no-escape" className="flag-badge">No escape</span>);
    }
    if (encounterFlagString.indexOf('danger') >= 0) {
        encounters.push(<span key="danger" className="flag-badge">Back/surprise attacks enabled</span>);
    }
    if (encounterFlagString.indexOf('noencounters') >= 0) {
        encounters.push(<span key="no-encounters" className="flag-badge flag-badge-danger">No encounters</span>);
    }

    return <div>{encounters}</div>
}

const renderKits = (flags: string) => {
    const kits = [];
    const kitStrings = [];

    if(flags.indexOf('kit:')) kitStrings.push(getPropertySection(flags, 'kit'));
    if(flags.indexOf('kit2')) kitStrings.push(getPropertySection(flags, 'kit2'));
    if(flags.indexOf('kit3')) kitStrings.push(getPropertySection(flags, 'kit3'));

    for (const kitString of kitStrings) {
        for (const kit of kitList) {
            if (kitString.indexOf(kit.flag) >= 0) {
                kits.push(<span key={kit.flag} className="flag-badge">{kit.title}</span>)
            }
        }
    }
    return <div>{kits}</div>
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

export { renderCharacters, renderGlitches, renderKeyItems, renderMisc, renderShops, renderTreasure, renderVanilla, renderEncounters, renderKits };
