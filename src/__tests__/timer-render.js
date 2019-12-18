import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapater from 'enzyme-adapter-react-16';
import { Timer } from '../components';


Enzyme.configure({ adapter: new Adapater() });

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

describe("Timer Component", () => {
    test('mounts as expected', () => {
        const flagObj = {
            objectives: [{
                id: 0,
                title: "Beat Zeromus",
                time: 0
            }]
        };
        const wrapper = mount(<Timer flagObj={flagObj} reEntry={() => {}} />);
        
        // initial state is as expected
        expect(wrapper.state('timerActive')).toBe(false);
        expect(wrapper.state('startTime')).toBe(0);
        expect(wrapper.state('bossTimes')).toHaveLength(0);
        expect(wrapper.state('currentTime')).toBe(0);

        // the one objective remaining should draw
        expect(wrapper.containsMatchingElement(
            <p>Defeat Zeromus</p>
        ))
    });
});
