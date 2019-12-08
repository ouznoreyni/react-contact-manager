import React, { Component } from 'react'
import {Consumer} from '../../context'
import Contact from './Contact';


class Contacts extends Component {

  deletContact = (id)=>{
    const {contacts} = this.state;
    const newContact = contacts.filter(contact => contact.id !== id)
    this.setState({
        contacts:newContact
      })
  }

  render() {
    return(
      <Consumer>
        {
          value=>{
            const {contacts} = value;
            return(
              <React.Fragment>
                <h1 className="display-4 mb-2 text-primary">Contact list</h1>
                {
                  contacts.map(contact =>(
                    <Contact
                      key={contact.id}
                      contact={contact}
                      onDeleteContactHandler = {this.deletContact.bind(this, contact.id)}
                    />
                  ))
                }
              </React.Fragment>
            )
          }
        }
      </Consumer>
    )
  }
}


export default Contacts;