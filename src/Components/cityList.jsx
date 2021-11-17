import React, { useEffect, useState } from 'react'
import RadioGroup from './radioGroup'

function CityList() {
   const [cities, setCities] = useState([
      { name: 'Chennai', selected: false },
      { name: 'Bangalore', selected: false },
      { name: 'Mumbai', selected: false },
   ])
   const [checkAll, setCheckAll] = useState({
      name: 'Select All',
      selected: false,
   })

   const selectAll = (checked) => {
      setCheckAll({ ...checkAll, selected: checked })
      setCities(function (prevState) {
         const newState = [...prevState]
         for (let i of newState) i.selected = checked
         return newState
      })
   }

   const selectCity = (checked, city) => {
      const updatedCity = cities.map((i) =>
         i.name === city.name ? { ...city, selected: checked } : i
      )
      setCities(updatedCity)
   }

   const deleteCity = (city) => {
      console.log(city)
      const updatedCity = cities.filter((i) => i.name !== city)
      setCities(updatedCity)
   }

   const addCity = (city) => {
      setCities((prevState) => {
         const newState = [...prevState]
         newState.push({ name: city, selected: false })
         return newState
      })
   }

   useEffect(
      function () {
         let flag = true
         for (let i of cities) if (!i.selected) flag = false
         setCheckAll({ ...checkAll, selected: flag })
      },
      [cities]
   )

   return (
      <React.Fragment>
         <RadioGroup
            cities={cities}
            selectCity={selectCity}
            selectAll={selectAll}
            checkAll={checkAll}
            addCity={addCity}
            deleteCity={deleteCity}
         />
      </React.Fragment>
   )
}

export default CityList
