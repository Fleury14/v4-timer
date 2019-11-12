// @flow
import React, { Component } from 'react';
import './clock.scss';

type Props = {
    confirmAction: Function,
};

type State = {
    confirmed: boolean
};

class ConfirmReset extends Component<Props, State> {
    state = {
        confirmed: false,
    }

    handleClick() {
        if (this.state.confirmed) {
            this.props.confirmAction()
        } else {
            this.setState({ confirmed: true })
        }
    }

    render() {
        // todo: possibly refactor the text into a prop to make this reusable
        const normalText = 'Re-enter flag string';
        const areYouSure = 'Are you sure?';
        return (
            <button className="re-entry-button" onClick={() => this.handleClick()}>{this.state.confirmed ? areYouSure : normalText}</button>
        );
    }
}

export default ConfirmReset;
