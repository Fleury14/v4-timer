import React, { useState } from 'react';
import './trapped-chests.scss';

const TrappedChests = props => {

  const [view, setView] = useState('location');
  const [renderCount, setRenderCount] = useState(0);
  const [display, setDisplay] = useState('all');
  const { trapped, toggleOpen } = props;

  const changeView = (desiredView) => {
    setView(desiredView);
  }

  const forceUpdate = () => {
    setRenderCount(renderCount + 1);
  }

  const displayChests = (desiredRegion) => {
    const regionChests = trapped.filter(zone => zone.region === desiredRegion);
    return (
      <div className="trapped-container">
        {regionChests.map(zone => {
          if (!zone.chests.find(chest => !chest.opened)) return null;
          return (
            <div className="trapped-zone-container" key={zone.title}>
              <h2 className="trapped-zone-title">{zone.title}</h2>
              <div className="trapped-treasure-container">
                {
                  zone.chests.map(chest => {
                    return !chest.opened ? (
                      <button key={chest.location} onClick={() => {
                        toggleOpen(chest.location);  
                      }} className="trapped-chest-toggle">
                        <p className="trapped-chest-text">{view === "location" ? chest.location : chest.enemy}</p>
                      </button>
                    ) : null;
                  })
                }
              </div>
            </div>
          );
          
        })}
      </div>
    );
  }

  const toggleOpened = (region, title) => {
    const targetRegioin = trapped.find(zone => zone.region)
  }
  console.log('display', display);
  return (
    <div className="w-100">
      <div>
        <button className="trapped-button" onClick={() => changeView('location')}>Location</button>
        <button className="trapped-button" onClick={() => changeView('enemy')}>Enemy</button>
      </div>
      <div>
        <button onClick={() => setDisplay('all')}>All</button>
        <button onClick={() => setDisplay('overworld')}>Overworld</button>
        <button onClick={() => setDisplay('underground')}>Underground</button>
        <button onClick={() => setDisplay('moon')}>Moon</button>
      </div>
      {display === 'all' || display === 'overworld' ? (
        <div>
          <h2>Overworld</h2>
          {displayChests('overworld')}
        </div>  
      ) : null}
      {display === 'all' || display === 'underground' ? (
        <div>
          <h2>Underground</h2>
          {displayChests('underground')}
        </div>  
      ) : null}
      {display === 'all' || display === 'moon' ? (
        <div>
          <h2>The place marty never goes in 2v2</h2>
          {displayChests('moon')}
        </div>
      ) : null}
      <div>
        Opened Chests
        {trapped.map(zone => {
          if (!zone.chests.find(chest => chest.opened)) return null;
          return zone.chests.map(chest => {
            return chest.opened ? (<button key={chest.location} onClick={() => {
              toggleOpen(chest.location);  
            }} className="trapped-chest-toggle">
              <p className="trapped-chest-text">{view === "location" ? chest.location : chest.enemy}</p>
            </button>
          ) : null;
          })
        })}
      </div>
      {/* End trapped container */}
    </div>
  );
}

export default TrappedChests;