import React from 'react';
import './App.css';
import Contact from'./components/Contact';




const App = () => {
  return (
    <div className="App">
      <Contact
      name = "MexicainLego"
      online = {true}
      avatar = {'https://randomuser.me/api/portraits/lego/6.jpg'}
      />

      <Contact
      name = "CuisinierLego"
      online = {false}
      avatar = {'https://randomuser.me/api/portraits/lego/8.jpg'}
      />

      <Contact
      name = "DriverLego"
      online = {true}
      avatar = {'https://randomuser.me/api/portraits/lego/0.jpg'}
      />
    </div>
  );
}

export default App;
