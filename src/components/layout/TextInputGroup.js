import React from 'react';
import Proptype from 'prop-types'


const TextInputGroup = (props)=>{
    return(
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
        	name={props.name}
        	className="form-control form-control-lg"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    )
}
TextInputGroup.propType={
    label: Proptype.string.isRequired,
    type: Proptype.string.isRequired,
    name: Proptype.string.isRequired,
    placholder: Proptype.string.isRequired,
    value: Proptype.string.isRequired,
    onChange: Proptype.func.isRequired
}
TextInputGroup.defaulProps = {
	type: 'text',
}

export default TextInputGroup