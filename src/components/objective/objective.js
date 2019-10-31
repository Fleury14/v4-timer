import React, { Component } from 'react';
import './objective.scss';

//expects the following props
// id: number
// description: string

class Objective extends Component {
    render() {
        const { title, id, finish } = this.props;
        return (
            <div>
                <p>{title}</p>
                <button onClick={() => finish(id)}>Complete</button>
            </div>
        );
    }
}

export default Objective;