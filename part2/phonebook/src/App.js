import { useState, useEffect } from "react"

import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: ''})
  const [filter, setFilter] = useState('')
  const [personsShown, setPersonsShown] = useState([])


  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
      setPersonsShown(initialPersons)
    });
    
  }, [])

  const addNewPerson = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.name === newPerson.name).length === 0) {
      personService.create(newPerson).then((returnedPersons) => {
        setPersons(persons.concat(returnedPersons))
        setPersonsShown(persons.concat(returnedPersons))
      })
    } else {
      alert(`${newPerson.name} is already added to phonebook`)
    }
  
    setNewPerson({ name: "", number: "" })
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.delete_(id).then((r) =>{
        const newPersonsList = persons.filter((p) => p.id !== id)
        setPersons(newPersonsList)
        setPersonsShown(newPersonsList)
      })
    }
  }

  const filterByName = (e) => {
    const searchEntry = e.target.value
    setFilter(searchEntry)
    setPersonsShown(
      persons.filter(p => p.name.toLowerCase().includes(searchEntry))
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} filterByName={filterByName} />
      
      <h3>Add a new</h3>
      
      <PersonForm
         addNewPerson={addNewPerson}
         newPerson={newPerson}
         handleChange={handleChange}
       />

      <h3>Numbers</h3>

      <Persons personsShown={personsShown} deletePerson={deletePerson} />
    </div>
  )
}

export default App