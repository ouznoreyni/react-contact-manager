import React, { Component } from 'react'
import Contact from './Contact';
class Contacts extends Component {
  constructor(){
    super();
    this.state = {
      contacts:[
        {
          id:1,
          name:"More faye",
          email:"mfaye@gmail.com",
          phone:"444-222-444"
        },
        {
          id:2,
          name:"Khady Fall",
          email:"kfall@gmail.com",
          phone:"444-222-444"
        },
        {
          id:3,
          name:"Assane diallo",
          email:"adiallo@gmail.com",
          phone:"444-222-444"
        },
      ]
    }
  }

  render() {
    const {contacts} = this.state;
    return (
      <div>
        {
          contacts.map(contact =>(
            <Contact
              key={contact.id}
              contact={contact}
            />
          ))
        }
      </div>
    )
  }
}


export default Contacts;