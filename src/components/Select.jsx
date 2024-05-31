import React from 'react'

export default function Select({
    id, 
    name, 
    value, 
    onChange, 
    error, 
    label,
    options,
    defaultOption,
}){
  return (
    <div className="input-container">
            <label htmlFor={label}>Category</label>
            <select id={id} 
                  name={name} 
                  value={value} 
                  onChange={onChange}>
                  { defaultOption && (
                     <option value="" hidden>
                    {defaultOption}</option> )}
                  {
                   options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>))
                  }
            </select>
            <p className='error'>{error}</p>
          </div>
  )
}
