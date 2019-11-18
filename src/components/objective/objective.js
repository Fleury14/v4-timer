// @flow

import React, { Component } from 'react';
import { parseTime } from '../../helpers'
import './objective.scss';

type Props = {
    title: string,
    id: number,
    finish: Function,
    undo: Function,
    edit: Function,
    time: ?number,
    complete: ?boolean,
    random?: boolean
}


class Objective extends Component<Props> {
    
    render() {
        
        const { title, id, finish, time, undo, complete, random, edit } = this.props;
        
        return (
            <div className="objective-container">
                <p className={complete ? "objective-title-complete" : "objective-title"}>
                    {title}
                    {random ? <button className="objective-edit-button" onClick={(id) => edit(id)}>Edit</button> : null}
                </p>
                {time
                    ?  <div className="objective-time-container">
                        <p>{parseTime(time)}</p>
                        <button className="objective-undo" onClick={() => undo(id)}><span className="fas fa-times"></span></button>
                    </div>
                    : <button className="objective-complete" onClick={() => finish(id)}><span className="fas fa-check"></span></button>}
                
            </div>
        );
    }
}

export default Objective;