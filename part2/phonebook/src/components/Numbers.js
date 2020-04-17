import React from 'react'
import personService from '../services/persons.js'

const DeleteButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>delete</button>
  )
}

const Numbers = ({ persons, setPersons, search }) => {
  const personsToShow = (search === "")
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const deletePerson = person => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(() => setPersons(persons.filter(p => p.id !== person.id)))
    }
  }

  return (
    <>
      {personsToShow.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
          <DeleteButton
            handleClick={() => deletePerson(person)}
          />
        </div>
      )}
    </>
  )
}

export default Numbers

