import React from 'react';
import Firebase from './firebase';
import { FirebaseContext } from './context';
import { MainComponent } from './components';
import './App.scss';

console.log(process.env.REACT_APP_TEST);

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <MainComponent />
    </FirebaseContext.Provider>
  );
}

export default App;
