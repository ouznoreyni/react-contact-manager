import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action)=>{
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts:state.contacts.filter(contact=>
          contact.id !== action.payload)
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  constructor(){
    super()
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
        ],
        dispatch: action=>this.setState(state=>reducer(state, action))
      }
    }

    render(){
      return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      )
    }
}

export const  Consumer = Context.Consumer;