import React from 'react'

const Numbers = ({ persons, search }) => {
  const personsToShow = (search === "")
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      {personsToShow.map(person => 
        <div key={person.name}>{person.name} {person.number}</div>
      )}
    </>
  )
}

export default Numbers