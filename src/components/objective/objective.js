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
            <div>
                <p>{title}</p>
                {time
                    ?  <div>
                        <p>{parseTime(time)}</p>
                        <button onClick={() => undo(id)}>Undo</button>
                    </div>
                    : <button onClick={() => finish(id)}>Complete</button>}
                
            </div>
        );
    }
}

export default Objective;