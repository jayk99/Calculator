import React from 'react';
import Calculator from './Calculator';
import './App.css';

function App() {
  return (
    <div className="App" style={{ background: 'linear-gradient(to bottom, cyan, limegreen)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Calculator />
    </div>
  );
}

export default App;
