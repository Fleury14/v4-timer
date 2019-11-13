import React from 'react';
import Firebase from './firebase';
import { FirebaseContext } from './context';
import { MainComponent } from './components';
import './App.scss';

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <MainComponent />
    </FirebaseContext.Provider>
  );
}

export default App;
