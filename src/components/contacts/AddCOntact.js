import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
import uuid from 'uuid';

export default class AddCOntact extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'',
      phone:''
    }
  }
  onChange = (e)=>this.setState({ [e.target.name]: e.target.value});

  onSubmit = (dispatch ,e) =>{
    e.preventDefault();
    const {name, email, phone} = this.state;
    
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }

    dispatch({
      type: 'ADD_CONTACT',
      payload:newContact
    });
    
    //clear state
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  }
  render() {
    const {name, email, phone} = this.state;
    return (
      <Consumer>
        {value=>{
          const { dispatch } = value;
          return(
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label = "Name"
                      type="text"
                      name="name"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label = "Email"
                      type="email"
                      name="email"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label = "Phone"
                      type="text"
                      name="phone"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    />
                    <input type="submit" value="add Contact" className="btn btn-light btn-block"/>
                  </form>
                </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
