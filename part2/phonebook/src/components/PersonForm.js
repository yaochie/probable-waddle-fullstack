import React from 'react'
import personService from '../services/persons.js'

const PersonForm = ({
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons,
    setMessage,
    setError
  }) => {

  const updatePhone = (personObject) => {
    personService.updatePhone(personObject)
      .then(newPerson => {
        setPersons(persons.map(person => {
          return person.id !== newPerson.id ? person : newPerson
        }))

        setMessage(`Updated ${newPerson.name}'s number to ${newPerson.number}`)
        setTimeout(() => setMessage(null), 5000)
      })
      .catch(error => {
        setError(`${personObject.name} has already been deleted`)
        setTimeout(() => setError(null), 5000)
        setPersons(persons.filter(p => p.id !== personObject.id))
      })
  }

  const addPerson = (event) => {
    event.preventDefault()

    // prevent duplicate people
    const entry = persons.find(person => person.name === newName)
    if (entry !== undefined) {
      const confirmString = `${entry.name} is already in phonebook.`
        + " Replace the old number with a new one?"

      if (window.confirm(confirmString)) {
        const personObject = { ...entry, number: newNumber }
        updatePhone(personObject)
      }

      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService.addPerson(personObject)
      .then(person => {
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')

        setMessage(`Added ${person.name}`)
        setTimeout(() => setMessage(null), 5000)
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm

