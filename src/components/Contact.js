import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../context';


class Contact extends Component {
  constructor(){
    super();
    this.state = {
    showContactInfo: false
  };
  }

  onDeleteContact = (id, dispatch)=>{
    dispatch({type:'DELETE_CONTACT', payload: id})
  }

  onShowClick = (e)=>{
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <Consumer>
        {value =>{
          const {dispatch} = value
          return (
            <div className="card card-body mb-3">
        <h4> 
          {name}
          <i onClick={this.onShowClick} className="fas fa-short-down" style={{ cursor: 'pointer'}}>  +</i>
          <i onClick={this.onDeleteContact.bind(this.setState, id, dispatch)} className="fas fa-times" style={{ cursor: 'pointer',color: 'red', float: 'right' }}>  -</i>
         </h4>
         {
           showContactInfo ? (
             <ul className="list-group">
              <li className="list-group-item"> {email} </li>
              <li className="list-group-item"> {phone} </li>
            </ul>
           ):null
         }
      </div>
          )
        }}
      </Consumer>
      
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;