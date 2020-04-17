import React from 'react'

const Filter = ({ search, setSearch }) => {
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div>
      filter shown with <input value={search} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter