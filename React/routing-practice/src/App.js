import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import HomePage from './components/HomePage'
import WordPage from './components/WordPage'

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home"/>
        <WordPage path="/:wordId"/>
        <WordPage path="/:wordId/:textColor/:backColor"/>
      </Router>
    </div>
  );
}

export default App;
