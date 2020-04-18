import React, { useState, useEffect } from 'react'

import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Error from './components/Error'

import personService from './services/persons.js'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Error message={error} />
      <Filter search={search} setSearch={setSearch} />
      <h3>Add a new number</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setError={setError}
      />
      <h3>Numbers</h3>
      <Numbers
        persons={persons}
        setPersons={setPersons}
        search={search}
        setError={setError}
      />
    </div>
  )
}

export default App

