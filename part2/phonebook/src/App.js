import { useState } from 'react'

const Person = ({ person }) => {
  return <div>{person.name} {person.number}</div>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewName = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.name === newName).length === 0) {
      const objectName = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(objectName))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
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