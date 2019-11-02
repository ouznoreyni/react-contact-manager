import React from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="">
        <Header  branding="Acme Contact Manager"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
