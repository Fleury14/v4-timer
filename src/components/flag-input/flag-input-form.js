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
                <h2 className="flag-preset-title">Club Flagsets</h2>
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'O1:quest_magma/2:quest_tradepink/random:2,quest,char/req:all/win:crystal Kmain/summon/moon/unsafe Pkey Cstandard/j:abilities/nodupes Twildish Sstandard/quarter Bstandard/unsafe/alt:gauntlet Nchars Etoggle Glife/sylph -kit:basic -spoon -pushbtojump' })}>Mysidian Jump Club</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_tradepink/3:quest_mistcave/4:quest_waterfall/5:quest_antlionnest/6:quest_fabul/random:2,quest/req:7/win:crystal Kmain/summon/moon Pkey Cstandard/maybe/j:abilities/bye Tstandard/sparse:80 Spro/quarter Bstandard/alt:gauntlet Nchars/key Etoggle/no:sirens Glife/sylph -kit:basic -spoon -vanilla:agility' })}>Underground Racing Club</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_ribbonaltar/2:quest_masamunealtar/random:2/win:crystal Kmain/summon/moon/unsafe Pkey Cstandard/distinct:7/j:abilities/nodupes Tpro/junk Scabins/free Bstandard/alt:gauntlet Nchars/key Etoggle Glife/sylph -kit:loaded -noadamants' })}>Lunar Racing Club</button>                    
                </div>
                <h2 className="flag-preset-title">Tournament Flagsets</h2>
                <div className="flag-presets">
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
