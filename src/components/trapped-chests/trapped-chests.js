import React, { useState } from 'react';
import trapped from '../../data/trapped-chests';
import './trapped-chests.scss';

const TrappedChests = props => {

  const [view, setView] = useState('location');

  const changeView = (desiredView) => {
    setView(desiredView);
  }

  return (
    <div>
      <div>
        <button className="trapped-button" onClick={() => changeView('location')}>Location</button>
        <button className="trapped-button" onClick={() => changeView('enemy')}>Enemy</button>
      </div>
      {trapped.map(zone => {
        return (
          <div>
            <h2 className="trapped-zone-title">{zone.title}</h2>
            {
              zone.chests.map(chest => {
                return (
                  <div>
                    <p className="trapped-chest-text">{view === "location" ? chest.location : chest.enemy}</p>
                  </div>
                );
              })
            }
          </div>
        );
        
      })}
    </div>
  );
}

export default TrappedChests;