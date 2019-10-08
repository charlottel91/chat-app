import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      name = "Charlotte"
      online = 'true'
      avatar = 'https://avatars2.githubusercontent.com/u/53869538?s=400&u=4a97861fce7ea75e170ef6594b6a7c81d48efebc&v=4'
      />
    </div>
  );
}

export default App;
