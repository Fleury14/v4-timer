// @flow
import React from 'react';
import type { Quest, ObjByKeyItem } from '../../types/types';
import { objectiveItems, keyItems, multiKeyObj } from '../../data/key-items';
import './quest-picker.scss';

type Props = {
    edit: Function,
    quests: Quest[],
    id: number,
};

const displayRow = (row: number, objectiveItems: ObjByKeyItem[], props: Props) => {
    const { edit, quests, id } = props;
    const rowFilteredItems = objectiveItems.filter(item => item.row === row);
    const underObj = ['dwarfcastle', 'lowerbabil', 'monsterqueen', 'monsterking'];
    const underObjectives = [];
    underObj.forEach(slug => {
        const selectedObj = quests.find(quest => quest.slug === slug);
        if (selectedObj) underObjectives.push(selectedObj);
    });
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
            {row === 2 ? (
                <div>
                    <p className="world-text">Underground</p>
                    {underObjectives.map(objective => {
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
            ) : null}
        </div>
    );
}

const displayMultiRow = (props:Props) => {
    const { quests, edit, id } = props;
    const openObj = ['mistcave', 'waterfall', 'antlionnest', 'hobs', 'fabul', 'ordeals', 'baroninn' ];
    const openObjectives = [];
    openObj.forEach(slug => {
        const selectedObj = quests.find(quest => quest.slug === slug);
        if (selectedObj) openObjectives.push(selectedObj);
    });
    return (
        <div>
            {multiKeyObj.map(objective => {
                let iconDisplay = [];
                objective.keyItemId.forEach(keyItem => {
                    const selectedItem = keyItems.find(eachItem => eachItem.id === keyItem);
                    if (selectedItem) iconDisplay.push(selectedItem.iconFile);
                });
                let targetObjectives = [];
                objective.objectiveSlug.forEach(slug => {
                    const foundObj = quests.find(quest => quest.slug === slug);
                    if (foundObj) targetObjectives.push(foundObj);
                })
                const openObjectives = [];
                openObj.forEach(slug => {
                    const selectedObj = quests.find(quest => quest.slug === slug);
                    if (selectedObj) openObjectives.push(selectedObj);
                })
                return (
                    <div className="obj-picker-top multi-key-cont">
                        <div className="multi-key-item">
                            {iconDisplay.map(icon => (
                            <img src={`/images/key-item-icons/${icon}`} />  
                            ))}
                        </div>
                        <div>
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
            <p className="world-text">Overworld</p>
            <div className="open-objectives-container">
                {openObjectives.map(objective => {
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
                {displayMultiRow(props)}
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
