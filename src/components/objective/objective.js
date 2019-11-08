// @flow

import React, { Component } from 'react';
import { parseTime } from '../../helpers'
import './objective.scss';

//expects the following props
// id: number
// description: string
type Props = {
    title: string,
    id: number,
    finish: Function,
    undo: Function,
    time: ?number,
    complete: ?boolean
}


class Objective extends Component<Props> {
    
    render() {
        
        const { title, id, finish, time, undo, complete } = this.props;
        
        return (
            <div className="objective-container">
                <p className={complete ? "objective-title-complete" : "objective-title"}>{title}</p>
                {time
                    ?  <div className="objective-time-container">
                        <p>{parseTime(time)}</p>
                        <button className="objective-undo" onClick={() => undo(id)}>Undo</button>
                    </div>
                    : <button className="objective-complete" onClick={() => finish(id)}>Finish</button>}
                
            </div>
        );
    }
}

export default Objective;