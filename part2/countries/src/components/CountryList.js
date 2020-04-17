import React, { useState } from 'react'
import SingleCountry from './SingleCountry'

const ShowButton = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const CountryList = ({ countries }) => {
  const [ show, setShow ] = useState(
    new Array(countries.length).fill(false)
  )

  function toggleClick(i) {
    return () => {
      setShow(show.map((item, index) => {
        return (index === i) ? !item : item
      }))
    }
  }

  const list = countries.map((country, index) => {
    return (
      <div key={country.name}>
        {country.name}
        <ShowButton
          handleClick={toggleClick(index)}
          text={show[index] ? "hide" : "show"}
        />
        {
          show[index]
          ? (<><SingleCountry country={country} /><br /></>)
          : <></>
        }
      </div>
    )
  })

  return list
}

export default CountryList
