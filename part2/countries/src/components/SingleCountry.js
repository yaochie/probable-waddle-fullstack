import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherMap = ({ weather }) => {
  if (weather === null) {
    return <></>
  }

  const icons = weather.weather.map((w, index) => {
    return (
      <img
        key={index}
        src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
        alt={w.description}
      />
    )
  })

  return (
    <>
      <div><b>temperature:</b> {weather.main.temp} celsius</div>
      <div>
        {icons}
      </div>
      <div>
        <b>Wind:</b> {weather.wind.speed} m/s at {weather.wind.deg} degrees
      </div>
    </>
  )
}

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState(null)
  const api_key = process.env.REACT_APP_API_KEY

  const weatherQuery = "https://api.openweathermap.org/data/2.5/weather"
        + "?q=" + country.capital
        + "&units=metric"
        + "&appid=" + api_key

  useEffect(() => {
    axios
      .get(weatherQuery)
      .then(response => setWeather(response.data))
  }, [])

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
      <h2>Weather in {country.capital}</h2>
      <WeatherMap weather={weather} />
    </div>
  )
}

export default SingleCountry
