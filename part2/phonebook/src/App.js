import { useState } from 'react'

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

// const Person = ({ person }) => {
//   return <div>{person.name} {person.number}</div>
// }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // const [newName, setNewName] = useState('')
  // const [newNumber, setNewNumber] = useState('')
  const [newPerson, setNewPerson] = useState({ name: '', number: ''});
  const [filter, setFilter] = useState('')
  const [personsShown, setPersonsShown] = useState(persons)

  const addNewPerson = (e) => {
    e.preventDefault()

    // if (persons.filter(p => p.name === newName).length === 0) {
    if (persons.filter(p => p.name === newPerson.name).length === 0) {
      // const objectName = {
      //   name: newName,
      //   number: newNumber,
      //   id: persons.length + 1,
      // }
      // setPersons(persons.concat(objectName))
      // setPersonsShown(persons.concat(objectName))
      setPersons(persons.concat(newPerson));
      setPersonsShown(personsShown.concat(newPerson));
    } else {
      // alert(`${newName} is already added to phonebook`)
      alert(`${newPerson.name} is already added to phonebook`)
    }
  
    // setNewName('')
    // setNewNumber('')
    setNewPerson({ name: "", number: "" })
  }

  const filterByName = (e) => {
    const searchEntry = e.target.value
    setFilter(searchEntry)
    setPersonsShown(
      persons.filter(p => p.name.toLowerCase().includes(searchEntry))
    )
  }

  // const handleNameChange = (e) => {
  //   setNewName(e.target.value)
  // }

  // const handleNumberChange = (e) => {
  //   setNewNumber(e.target.value)
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <p>
        filter shown with <input value={filter} onChange={filterByName} />
      </p> */}
      <Filter filter={filter} filterByName={filterByName} />
      <h3>Add a new</h3>
      {/* <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
           number: <input value={newNumber} onChange={handleNumberChange} />
         </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <PersonForm
         addNewPerson={addNewPerson}
         newPerson={newPerson}
         handleChange={handleChange}
       />
      <h3>Numbers</h3>
      {/* <div>
        {personsShown.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div> */}
      <Persons personsShown={personsShown} />
    </div>
  )
}

export default App