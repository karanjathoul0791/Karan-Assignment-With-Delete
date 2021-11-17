import React, { useState } from 'react'
import CheckBox from './checkBox'
import TextBox from './textBox'

function RadioGroup({ cities, selectCity, selectAll, checkAll, addCity, deleteCity }) {
   return (
      <form>
         <TextBox label='Add City' placeholder='City Name' onSubmit={addCity} />

         <CheckBox
            label={checkAll.name}
            onChange={(e) => selectAll(e.target.checked)}
            key={checkAll.name}
            checked={checkAll.selected}
         />
         {cities.map((city) => {
            return (
               <div className='checkbox-button mt-3 '>
                  <CheckBox
                     label={city.name}
                     onChange={(e) => selectCity(e.target.checked, city)}
                     key={city.name}
                     checked={city.selected}
                  />
                  <button
                     type='button'
                     className='btn btn-primary btn-sm '
                     onClick={() => deleteCity(city.name)}
                  >
                     remove
                  </button>
               </div>
            )
         })}
      </form>
   )
}

export default RadioGroup
