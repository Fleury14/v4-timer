// @flow
import React from 'react';
import type { Quest } from '../../types/types';

type Props = {
    edit: Function,
    quests: Quest[],
    id: number,
};

const ObjectivePicker = (props: Props) => {
    const { edit, quests, id } = props;
    return (
        <div className="picker-container">
            <h2>Quests</h2>
            <div className="picker-button-row quest-button-row">
                {quests.map(quest => {
                    return (
                        <button
                            key={quest.slug}
                            className="picker-quest-button"
                            onClick={() => edit(id, quest.title)}
                        >
                            {quest.buttonText}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ObjectivePicker;
