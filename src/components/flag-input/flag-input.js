import React from 'react';
import FlagInputForm from './flag-input-form';
import './flag-input.scss';

const FlagInputComponent = (props) => {
    return (
        <div className="flag-input-container">
            <FlagInputForm startTime={(flagObj) => props.onStartTimer(flagObj)}/>
        </div>
    );
}

export default FlagInputComponent;
