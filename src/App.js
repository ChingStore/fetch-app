import React from 'react';
import './App.css';
import List from './components/List'

let title = 'Order Summary'

function App() {
  return (
    <div className='App'>
      <div>{title}</div>
      <List/>
    </div>
  );
}

export default App;
