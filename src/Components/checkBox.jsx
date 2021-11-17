import React from 'react'

function CheckBox({ label, onChange, checked }) {
   return (
      <div className='form-check'>
         <input
            className='form-check-input'
            type='checkbox'
            name={label}
            id={label}
            value={label}
            onChange={onChange}
            checked={checked}
         />
         <label className='form-check-label' htmlFor={label}>
            {label}
         </label>
      </div>
   )
}

export default CheckBox
