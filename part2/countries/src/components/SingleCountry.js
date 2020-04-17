import React from 'react'

const SingleCountry = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {country.languages.map(lang =>
          <li key={lang.iso639_2}>{lang.name}</li>
        )}
      </ul>
      <div>
        <img
          src={country.flag}
          width="20%"
          height="20%"
          alt={`${country.name}'s flag`}
        />
      </div>
    </div>
  )
}

export default SingleCountry
