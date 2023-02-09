import { useState } from 'react'

const Person = ({ person }) => {
  return <div>{person.name} {person.number}</div>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsShown, setPersonsShown] = useState(persons)

  const addNewName = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.name === newName).length === 0) {
      const objectName = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(objectName))
      setPersonsShown(persons.concat(objectName))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  
    setNewName('')
    setNewNumber('')
  }

  const filterByName = (e) => {
    const searchEntry = e.target.value
    setFilter(searchEntry)
    setPersonsShown(
      persons.filter(p => p.name.toLowerCase().includes(searchEntry))
    )
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
      <p>
        filter shown with <input value={filter} onChange={filterByName} />
      </p>
      <h2>add a new</h2>
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
        {personsShown.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App