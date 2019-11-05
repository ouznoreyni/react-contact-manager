import React from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddCOntact';
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="">
        <Header  branding="Acme Contact Manager"/>
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
