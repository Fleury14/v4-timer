// @flow
import React from 'react';
import './objective-picker.scss';

const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa'];

type Props = {
    id: number,
    edit: Function
}

const ObjectivePicker = (props: Props) => {
    const { id, edit } = props;
    console.log('id', id, 'edit', edit);
    return (
        <div className="picker-container">
            <h2>Character</h2>
            <div className="picker-button-row">
                {characters.map(char => {
                    const title = `Get ${char}`;
                    return (
                        <button
                            key={char}
                            className="picker-button"
                            onClick={() => edit(id, title)}
                        >
                            {char}
                        </button>
                    );
                })}
            </div>
        </div>
        
    );
}

export default ObjectivePicker;