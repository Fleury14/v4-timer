// @flow

import React from 'react';
import {
    renderCharacters,
    renderKeyItems,
    renderTreasure,
    renderShops,
    renderGlitches,
    renderMisc,
    renderVanilla,
    renderEncounters,
    renderKits,
    renderBosses,
    
} from './flag-badges';
import { MYSTERY } from '../../data/constants';
import './flag-info.scss';


const FlagInfo = (props: string) => {
    const flags = sessionStorage.getItem('flags');
    if (!flags) return null;
    if(flags.indexOf(MYSTERY) >= 0) return <p>IT'S A MYSTERY!!!!</p>
    
    const vanillaData = renderVanilla(flags);
    return (
        <React.Fragment>
            <div className="flag-info-row">
                <p className="flag-info-label">Key Items:</p>
                {renderKeyItems(flags)}
            </div>
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
            <div className="flag-info-row">
                <p className="flag-info-label">Misc:</p>
                {renderMisc(flags)}
            </div>
            <div className="flag-info-row">
                <p className="flag-info-label">Encounters:</p>
                {renderEncounters(flags)}
            </div>
            <div className="flag-info-row">
                <p className="flag-info-label">Bosses:</p>
                {renderBosses(flags)}
            </div>
            <div className="flag-info-row">
                <p className="flag-info-label">Kits:</p>
                {renderKits(flags)}
            </div>
            {vanillaData ? (
                <div className="flag-info-row">
                    <p className="flag-info-label">Vanilla: </p>
                    {vanillaData}
                </div>
            ) : null}
        </React.Fragment>

    );
}

export default FlagInfo;
