import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi! I am a react app.</h1>
      <p>It is real working!</p>
      <Person name="Remigiusz" age="30" />
      <Person name="Ewa" age="29"/>
      <Person name="Zuzia" age="1"/>
    </div>
  );
}

export default App;
