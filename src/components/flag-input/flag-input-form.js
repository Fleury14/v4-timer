import React, { Component } from 'react';
import parseFlags from '../../helpers/parse-flags';
import FlagSet from '../../data/flagSpec';
import MysteryMode from './mystery-mode';
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
                    <button onClick={() => this.setState({ flags: 'Orandom:4,tough_quest,boss/req:3/win:crystal Kmain Pshop Crelaxed/j:abilities Twild Swild/free/no:apples Bstandard/whyburn Etoggle Glife/sylph/backrow -spoon' })}>SMS</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_tradepink/3:quest_pass/req:all/win:crystal Kmain/trap/nofree/unsafe Pkey Crelaxed/nofree/start:fusoya/j:abilities Twildish Sstandard/no:j Bstandard/nofree/alt:gauntlet Etoggle/noexp Gwarp/life/sylph/backrow -kit:freedom -vanilla:fusoya' })}>Fuwario</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:8,boss/req:7/win:crystal Kmain/summon/trap/force:hook Pchests Crelaxed/noearned/distinct:7/start:any/no:cecil,fusoya/j:abilities/nekkie/nodupes/hero Twildish Sstandard Bstandard/alt:gauntlet/whichburn Etoggle Gwarp/life/sylph/backrow -kit:basic -noadamants -spoon -vanilla:traps' })}>Purple Moon</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:7,tough_quest/req:6/win:crystal Kmain/summon/moon Pkey Cstandard/nofree/j:abilities/nekkie Twildish Sstandard Bstandard/alt:gauntlet Etoggle Gwarp/life/sylph/backrow -kit:better -noadamants -spoon' })}>Ladder Standard</button>
                    {/* <button onClick={() => this.setState({ flags: 'O1:quest_forge/2:quest_tradepink/3:quest_pass/win:crystal Kmain/trap/nofree Pkey Crelaxed/nofree/start:fusoya/j:abilities Twildish Sstandard/no:j Bstandard/nofree/alt:gauntlet Etoggle/noexp Gwarp/life/sylph/backrow -kit:freedom -vanilla:fusoya' })}>Fuwario</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:4,boss/req:3/win:crystal Kmain Pshop Crelaxed/j:abilities Twild Swild/free/no:apples Bstandard/whyburn Etoggle Glife/sylph/backrow -spoon' })}>Supermarket Sweep</button> */}
                </div>
                <h2 className="flag-preset-title">Tournament Flagsets</h2>
                <div className="flag-presets">
                <button onClick={() => this.setState({ flags: 'O1:quest_monsterqueen/2:quest_monsterking/3:quest_cavebahamut/4:quest_masamunealtar/5:quest_forge/random:3,tough_quest/req:6/win:game Kmain/trap/nofree/force:magma Pnone Cstandard/nofree/distinct:7/start:not_tellah,not_fusoya/no:fusoya/restrict:cecil/j:abilities/nekkie/nodupes/hero Twildish/money Swild/no:j Bstandard/nofree/alt:gauntlet/whichburn Etoggle/noexp Gwarp/life/sylph/backrow -kit:freedom -kit2:trap -kit3:basic -noadamants -nocursed -spoon' })}>EEL - Potion Party</button>
                <button onClick={() => this.setState({ flags: 'O1:quest_magnes/2:quest_forge/3:boss_fabulgauntlet/4:boss_golbez/random:3,tough_quest/req:6/win:crystal Kmain/summon/moon/nofree Pkey Cstandard/nofree/restrict:cecil,fusoya/j:abilities/nekkie/hero Twildish/maxtier:5 Sstandard Bstandard/alt:gauntlet/whichburn Etoggle/cantrun Gwarp/life/sylph/backrow -kit:better -kit2:dwarf -spoon' })}>EEL - Moonveil Mixer</button>
                    <button onClick={() => this.setState({ flags: 'O1:boss_golbez/2:boss_fabulgauntlet/random:6,boss/req:7/win:crystal Kmain/summon/moon/force:hook Pkey Crelaxed/noearned/distinct:7/start:any/no:fusoya/j:abilities/nekkie/nodupes Twildish Sstandard Bstandard/alt:gauntlet Etoggle Gwarp/life/sylph/backrow -kit:basic -kit2:freedom -noadamants -spoon -smith:super' })}>ZZ5 - Blue Moon</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:8,boss/req:7/win:crystal Kmain/summon/moon/nofree/force:hook Pkey Crelaxed/noearned/distinct:7/start:cecil/no:cecil,edge,fusoya/j:abilities Tpro Sstandard/no:apples Bstandard/alt:gauntlet Etoggle Glife -kit:notdeme -kit2:freedom -noadamants -spoon -smith:super' })}>ZZ5 - Red Moon</button>
                </div>
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
                <div><MysteryMode begin={results => {
                    sessionStorage.setItem('flags', results)
                    const parsedResults = parseFlags(results);
                    this.props.startTime(parsedResults);
                    }} /></div>
                
            </React.Fragment>
        )
    }
}

export default FlagInputForm;
