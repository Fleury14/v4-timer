import React, { useState } from 'react';
import { MYSTERY } from '../../data/constants';
import './flag-input.scss';

const MysteryMode = props => {

  const [displayInput, toggleInput] = useState(false);
  const [objectives, setObj] = useState("1");
  const [zFight, setZ] = useState(false);
  const [errorMessage, setError] = useState('');

  const checkObjInput = () => {
    if(isNaN(parseInt(objectives))) setError('Please enter an actual number');
    if(parseInt(objectives) === 0) setError('If there are no objectives, do you really need this part?');
    if(parseInt(objectives) < 0) setError('Negative Objectives. Funny. Ha. Ha. Ha.');

    const result = `Orandom:${objectives}/win:${zFight ? 'crystal' : 'game'} ${MYSTERY}`;
    props.begin(result);
  }

  return (
    <>
      <div className="flag-presets">
        <button onClick={() => toggleInput(!displayInput)}>Mystery Mode!</button>
      </div>
      {displayInput && (
        <div className="mystery-input">
          <label> Number of objectives?</label>
          <input name="objectives" value={objectives} onChange={e => setObj(e.target.value)}/>
          <label>Defeat Zeromus?</label>
          <input type="checkbox" name="zeromus" checked={zFight} onChange={() => setZ(!zFight)} />
          <button onClick={() => checkObjInput()}>Go Mystery!</button>
        </div>
        
      )}
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );

}

export default MysteryMode;