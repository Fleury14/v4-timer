import React from 'react';
import Firebase from './firebase';
import { FirebaseContext } from './context';
import AppRouter from './router/router';
import './App.scss';

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <AppRouter />
    </FirebaseContext.Provider>
  );
}

export default App;
