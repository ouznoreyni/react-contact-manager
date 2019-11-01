import React from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="">
      <Header  branding="Acme Contact Manager"/>
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
