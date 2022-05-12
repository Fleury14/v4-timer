import React, { useState } from 'react';
import initialTrapped from '../../data/trapped-chests';
import { TrappedChests } from '..'

const TrappedState = (props) => {
  const storedTrapped = localStorage.getItem('trapped');
  const [trap, setTrap] = useState(storedTrapped ? JSON.parse(storedTrapped) : JSON.parse(JSON.stringify(initialTrapped)));

  const resetState = () => {
    const resettedTrapped = JSON.parse(JSON.stringify(initialTrapped));
    localStorage.removeItem('trapped')
    setTrap(resettedTrapped);
  }

  const toggleOpened = (location) => {
    const newTrap = JSON.parse(JSON.stringify(trap));
    newTrap.forEach(zone => {
      const target = zone.chests.find(chest => chest.location === location);
      if (target) {
        target.opened = !target.opened;
        localStorage.setItem('trapped', JSON.stringify(newTrap))
        setTrap(newTrap);
      }
    })
  }

  return <TrappedChests
    reset={() => resetState()}
    toggleOpen={(location) => toggleOpened(location)}
    trapped={trap}
    />
}

export default TrappedState;