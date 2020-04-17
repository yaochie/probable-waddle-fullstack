import React from 'react'
import SingleCountry from './SingleCountry'
import CountryList from './CountryList'

const Countries = ({ countries, search }) => {
  const countriesToShow = (search === "")
    ? countries
    : countries.filter(
        country => country.name.toLowerCase().includes(search.toLowerCase())
      )

  if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countriesToShow.length === 1) {
    return <SingleCountry country={countriesToShow[0]} />
  } else {
    return <CountryList countries={countriesToShow} />
  }
}

export default Countries
