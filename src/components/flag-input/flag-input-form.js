import React, { Component } from 'react';
import parseFlags from '../../helpers/parse-flags';
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
        const flagObj = parseFlags(flags);
        this.props.startTime(flagObj);
    }

    render() {
        const { flags } = this.state;
        return (
            <form className="flag-input-form" onSubmit={(e) => this.onSubmit(e, flags)}>
                <label>Input Flags</label>
                <textarea value={flags} onChange={(e) => this.onChange(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
        )
    }
}

export default FlagInputForm;
