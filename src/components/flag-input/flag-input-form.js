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
                <div className="flag-presets">
                    <button onClick={() => this.setState({ flags: 'Orandom:5/win:crystal Kmain/summon/moon Pkey Cstandard/j:abilities Tstandard Sstandard Bstandard/alt:gauntlet Nchars/key Etoggle Glife -kit:basic -noadamants' })}>Fabul Gauntlet - Swiss</button>
                    <button onClick={() => this.setState({ flags: 'Orandom:5/win:crystal Kmain/summon/moon Pkey Cstandard/distinct:7/j:abilities/nodupes/bye Tpro Spro/quarter Bstandard/alt:gauntlet Nchars/key Etoggle Glife -kit:basic -noadamants' })}>Fabul Gauntlet - Bracket</button>
                    <button onClick={() => this.setState({ flags: 'Omode:classicforge/1:quest_giant/random:2/win:crystal Kmain/summon/moon/unsafe Pkey Cstandard/distinct:7/j:abilities/nodupes Tpro Spro Bstandard Nchars/key Etoggle Glife -kit:basic -noadamants' })}>Underground Racing Club</button>
                    <button onClick={() => this.setState({ flags: 'O1:quest_masamunealtar/2:quest_ribbonaltar/random:2/win:crystal Kmain/summon/moon/unsafe Pkey Cstandard/distinct:7/j:abilities/nodupes Tpro Spro Bstandard Nchars/key Etoggle Glife -noadamants' })}>Lunar Racing Club</button>
                </div>
            </React.Fragment>
        )
    }
}

export default FlagInputForm;
