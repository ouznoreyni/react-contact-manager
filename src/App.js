import React from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound";
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header  branding="Acme Contact Manager"/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />>
          </Switch>
        </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
