import React from 'react'

export default function Input({
    id, 
    name, 
    value ='please enter an email', // Here we should pass default value //
    onChange, 
    error, 
    label
}) {
  return (
    <div className='input-container'>
            <label htmlFor="title">{label}</label>
            <input 
             id={id} 
             name={name}
             value={value} 
             onChange={onChange}
              // ref={titleRef}
          />  
          <p className='error'>{error}</p>
    </div> 
  )
}
