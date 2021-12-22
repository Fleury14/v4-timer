import React, { useState } from 'react';
import trapped from '../../data/trapped-chests';
import './trapped-chests.scss';

const TrappedChests = props => {

  const [view, setView] = useState('location');

  const changeView = (desiredView) => {
    setView(desiredView);
  }

  const displayChests = (desiredRegion) => {
    const regionChests = trapped.filter(zone => zone.region === desiredRegion);
    return (
      <div className="trapped-container">
        {regionChests.map(zone => {
          return (
            <div className="trapped-zone-container">
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

  return (
    <div className="w-100">
      <div>
        <button className="trapped-button" onClick={() => changeView('location')}>Location</button>
        <button className="trapped-button" onClick={() => changeView('enemy')}>Enemy</button>
      </div>
      <div>
        <h2>Overworld</h2>
        {displayChests('overworld')}
      </div>
      <div>
        <h2>Underground</h2>
        {displayChests('underground')}
      </div>
      <div>
        <h2>The place marty never goes in 2v2</h2>
        {displayChests('moon')}
      </div>
      {/* End trapped container */}
    </div>
  );
}

export default TrappedChests;