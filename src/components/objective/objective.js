import React, { Component } from 'react';
import { parseTime } from '../../helpers'
import './objective.scss';

//expects the following props
// id: number
// description: string

class Objective extends Component {
    
    render() {
        
        const { title, id, finish, time, undo } = this.props;
        
        return (
            <div className="objective-container">
                <p className="objective-title">{title}</p>
                {time
                    ?  <div>
                        <p>{parseTime(time)}</p>
                        <button className="objective-undo" onClick={() => undo(id)}>Undo</button>
                    </div>
                    : <button className="objective-complete" onClick={() => finish(id)}>Complete</button>}
                
            </div>
        );
    }
}

export default Objective;