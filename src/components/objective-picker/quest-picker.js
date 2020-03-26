// @flow
import React from 'react';
import type { Quest, ObjByKeyItem } from '../../types/types';
import { objectiveItems, keyItems } from '../../data/key-items';
import './quest-picker.scss';

type Props = {
    edit: Function,
    quests: Quest[],
    id: number,
};

const displayRow = (row: number, objectiveItems: ObjByKeyItem[], props) => {
    const { edit, quests, id } = props;
    const rowFilteredItems = objectiveItems.filter(item => item.row === row);
    return (
        <div className="obj-picker-top">
            {rowFilteredItems.map(itemPair => {
                const targetKeyItem = keyItems.find(keyItem => keyItem.id === itemPair.keyItemId);
                const imageSource = targetKeyItem ? targetKeyItem.iconFile : '';
                const targetObjectives = [];
                itemPair.objectiveSlug.forEach(slug => {
                    const targetObj = quests.find(quest => quest.slug === slug);
                    if (targetObj) targetObjectives.push(targetObj);
                });
                return (
                    <div key={itemPair.keyItemId} className="one-key-item-obj-container">
                        <img src={`/images/key-item-icons/${imageSource}`} />
                        <div className={`one-key-item-obj-button-row quest-picker-single`}>
                            {targetObjectives.map(objective => {
                                return (
                                    <button
                                        key={objective.slug}
                                        className="quest-picker-button"
                                        onClick={() => edit(id, objective.title)}
                                    >
                                        {objective.buttonText}
                                    </button>
                                ); 
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const ObjectivePicker = (props: Props) => {
    const { edit, quests, id } = props;
    return (
        <div className="picker-container">
            <h2>Quests</h2>
            <div className="row-holder">
                {displayRow(0, objectiveItems, props)}
                {displayRow(1, objectiveItems, props)}
                {displayRow(2, objectiveItems, props)}
            </div>
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
