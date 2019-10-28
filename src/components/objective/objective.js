import React, { Component } from 'react';
import './objective.scss';

//expects the following props
// id: number
// description: string

class Objective extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button>Complete</button>
            </div>
        );
    }
}

export default Objective;