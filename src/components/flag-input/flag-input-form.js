import React, { Component } from 'react';
import parseFlags from '../../helpers/parse-flags';
import FlagSet from '../../data/flagSpec';
import './flag-input.scss'

class FlagInputForm extends Component {

    state = {
        flags: '',
    }

    onChange(flags) {
        this.setState({ flags });
    }

    onSubmit(e, flags) {
        e.preventDefault();
        // check if its binary
        if (flags[0] === 'b') {
            const flagSet = new FlagSet();
            flagSet.load(flags);
            flags = flagSet.to_string();

        }
        sessionStorage.setItem('flags', flags)
        const flagObj = parseFlags(flags);
        this.props.startTime(flagObj);
    }

    render() {
        const { flags } = this.state;
        return (
            <React.Fragment>
                <form className="flag-input-form" onSubmit={(e) => this.onSubmit(e, flags)}>
                    <label>Input Flag String</label>
                    <textarea rows="6" placeholder="(Flag string here)" value={flags} onChange={(e) => this.onChange(e.target.value)}></textarea>
                    <button>SUBMIT</button>
                </form>
                <h2 className="flag-preset-title">Ladder Flagsets</h2>
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_tradepink/3:quest_pass/win:crystal Kmain/trap/nofree Pkey Crelaxed/nofree/start:fusoya/j:abilities Twildish Sstandard/no:j Bstandard/nofree/alt:gauntlet Etoggle/noexp Gwarp/life/sylph/backrow -kit:freedom -vanilla:fusoya' })}>Fuwario</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:4,boss/req:3/win:crystal Kmain Pshop Crelaxed/j:abilities Twild Swild/free/no:apples Bstandard/whyburn Etoggle Glife/sylph/backrow -spoon' })}>Supermarket Sweep</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_magnes/2:quest_baroncastle/3:quest_zot/4:quest_sealedcave/5:quest_ribbonaltar/6:quest_cavebahamut/7:quest_dwarfcastle/8:quest_lowerbabil/random:2,gated_quest/req:all/win:crystal Kmain/summon/moon Pkey Cstandard/start:any/no:cecil,fusoya/j:abilities/nodupes/party:4 Twildish Sstandard/no:j Bstandard/alt:gauntlet Nchars Etoggle Glife/sylph -kit:better -spoon' })}>10/10</button>
                    
                </div>
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_toroiatreasury/random:2/req:all/win:crystal Kmain/summon/moon Pkey Crelaxed/no:fusoya/j:abilities/nekkie/hero Tpro Sstandard Bstandard/alt:gauntlet/whichburn Nchars/key Etoggle Glife/sylph -kit:freedom -kit2:random -noadamants' })}>CHero</button>                    
                    <button onClick={() => this.setState({ flags: 'O1:quest_murasamealtar/2:quest_crystalaltar/3:quest_whitealtar/4:quest_ribbonaltar/5:quest_masamunealtar/req:4/win:game Kmain/moon/unsafe Pkey Cstandard/distinct:5/j:abilities/nekkie Twildish/money Swild Bstandard/alt:gauntlet/whichburn Nchars Etoggle/noexp/no:jdrops Gmp/warp/life/sylph -kit:better -kit2:money -kit3:money -spoon -supersmith -vanilla:traps -pushbtojump' })}>Hop 'Til You Shop</button>
                </div>
                <h2 className="flag-preset-title">Tournament Flagsets</h2>
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'Orandom:7,tough_quest/req:7/win:crystal Kmain/summon/moon Pkey Cstandard/nofree/restrict:cecil,fusoya/j:abilities/nekkie/party:4 Twildish/maxtier:7 Sstandard Bstandard/alt:gauntlet Etoggle Glife/sylph/backrow -kit:better -spoon' })}>Adamant Cup - Group</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:7,tough_quest/req:7/win:crystal Kmain/summon/moon Pkey Crelaxed/nofree/no:cecil,fusoya/j:abilities/nekkie/party:4 Tpro/maxtier:6 Sstandard/sell:quarter Bstandard/alt:gauntlet Etoggle Glife/sylph -kit:basic -spoon -smith:alt' })}>Adamant Cup - Bracket</button>
                </div>
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_cavebahamut/3:boss_wyvern/random:2,gated_quest,boss/req:4/win:crystal Kmain/moon Pkey Cstandard/maybe/start:any/no:fusoya/j:abilities/nodupes/hero Tpro Sstandard/no:j Bstandard/alt:gauntlet/whichburn Nchars/key Etoggle Gnone -kit:freedom -noadamants' })}>ZZ4</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_tradepink/3:quest_magnes/random:2,boss,char/req:4/win:crystal Kmain/summon/moon Pkey Cstandard/distinct:10/j:abilities/nekkie/bye Twildish/maxtier:6 Sstandard/sell:quarter Bstandard/alt:gauntlet Nchars/key Etoggle Glife/sylph -kit:basic -kit2:dwarf -noadamants -spoon -exp:noboost -vanilla:giant' })}>Lali-Ho League - Swiss</button>
                    <button onClick={() => this.setState({ flags: 'Omode:classicforge/1:quest_tradepink/2:quest_magnes/random:2,boss,char/req:4/win:crystal Kmain/summon/moon Pkey Cstandard/distinct:10/j:abilities/nekkie/nodupes/bye Tpro/maxtier:6 Sstandard/sell:0 Bstandard/alt:gauntlet Nchars/key Etoggle Glife/sylph -kit:freedom -kit2:grabbag -kit3:money -noadamants -exp:noboost -vanilla:giant' })}>Lali-ho League - Bracket</button>
                </div>
                 
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'Orandom:5/win:crystal Kmain/summon/moon Pkey Cstandard/j:abilities Tstandard Sstandard Bstandard/alt:gauntlet Nchars/key Etoggle Glife -kit:basic -noadamants' })}>Fabul Gauntlet - Swiss</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:5/win:crystal Kmain/summon/moon Pkey Cstandard/distinct:7/j:abilities/nodupes/bye Tpro Spro/quarter Bstandard/alt:gauntlet Nchars/key Etoggle Glife -kit:basic -noadamants' })}>Fabul Gauntlet - Bracket</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/random:3,quest/req:3/win:crystal Kmain/summon/moon Pkey Crelaxed/maybe/no:fusoya/j:abilities/bye Twildish/sparse:60 Sstandard Bstandard/alt:gauntlet Nkey Etoggle/cantrun Gwarp/life/sylph -kit:basic -noadamants -spoon -vanilla:agility' })}>HTT3Z Group Stages</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/random:3,quest/req:3/win:crystal Kmain/summon/moon Pkey Cstandard/maybe/no:fusoya/j:abilities/permajoin Tpro/sparse:60 Spro Bstandard/alt:gauntlet Nkey Etoggle/cantrun/no:sirens Glife/sylph -kit:basic -noadamants -vanilla:agility' })}>HTT3Z Table Stages</button>
                </div>
            </React.Fragment>
        )
    }
}

export default FlagInputForm;
