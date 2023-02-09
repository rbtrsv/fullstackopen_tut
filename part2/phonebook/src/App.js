import { useState } from 'react'

const Person = ({ person }) => {
  return <div>{person.name}</div>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewName = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.name === newName).length === 0) {
      const objectName = {
        name: newName,
      }
      setPersons(persons.concat(objectName))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  
    setNewName('')
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>
         {persons.map((person) => (
           <Person key={person.name} person={person} />
         ))}
      </div>
    </div>
  )
}

export default App