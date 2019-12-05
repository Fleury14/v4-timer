import React from 'react';
import ReactDOM from 'react-dom';
import { Timer } from '../components';

it('timer renders without crashing', () => {
  const div = document.createElement('div');
  const flagObj = {
      objectives: [{
          id: 0,
          title: "Beat Zeromus",
          time: 0
      }]
  }
  ReactDOM.render(<Timer flagObj={flagObj} reEntry={() => {}} />, div);
});

// a timer with no objectives should still function, even solely as a timer

it('timer renders with a null flag objectives without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timer flagObj={null} reEntry={() => {}} />, div);
});