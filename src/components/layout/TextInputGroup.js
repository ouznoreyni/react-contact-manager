import React from 'react';
import Proptype from 'prop-types'
import classnames from 'classnames'

const TextInputGroup = (props)=>{
    return(
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
					name={props.name}
					className={classnames("form-control form-control-lg",{
						"is-invalid ": props.error
					})}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
				/>
				{props.error && <div className="invalid-feedback">{props.error}</div>}
      </div>
    )
}
TextInputGroup.propType={
    label: Proptype.string.isRequired,
    type: Proptype.string.isRequired,
    name: Proptype.string.isRequired,
    placholder: Proptype.string.isRequired,
    value: Proptype.string.isRequired,
		onChange: Proptype.func.isRequired,
		error: Proptype.string
}
TextInputGroup.defaulProps = {
	type: 'text',
}

export default TextInputGroup