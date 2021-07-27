import React from 'react';
import './form-input.styles.scss'

export function FormInput({onChange, label, ...props}) {
    return (
        <div className='group'>
            <input className='form-input' onChange={onChange} {...props}/>
            {label ? <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
        </div>
    )
}
