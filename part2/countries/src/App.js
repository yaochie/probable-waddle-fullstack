import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <div>
        find countries 
        <input value={search} onChange={handleSearchChange}/>
      </div>
      <div>
        <Countries countries={countries} search={search} />
      </div>
    </div>
  )
}

export default App
