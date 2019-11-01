import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="">
      <Header  branding="Acme Contact Manager"/>
      <div className="container">
        <Contact 
        name="john Doe"
        email="jdoe@gmail.com"
        phone="444-222-444"
      />
      <Contact 
        name="karen smith"
        email="ksmith@gmail.com"
        phone="444-222-444"
      />
      </div>
    </div>
  );
}

export default App;
