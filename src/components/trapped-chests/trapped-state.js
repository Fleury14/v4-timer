import React, { useState } from 'react';
import trapped from '../../data/trapped-chests';
import { TrappedChests } from '..'

const TrappedState = (props) => {
  const [trap, setTrap] = useState(trapped);

  const resetState = () => {
    setTrap(trapped);
  }

  const toggleOpened = (location) => {
    const newTrap = trap.filter(() => true);
    trap.forEach(zone => {
      const target = zone.chests.find(chest => chest.location === location);
      if (target) {
        target.opened = !target.opened;
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