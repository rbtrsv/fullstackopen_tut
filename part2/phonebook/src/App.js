import { useState, useEffect } from "react"

import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: ''})
  const [filter, setFilter] = useState('')
  const [personsShown, setPersonsShown] = useState([])
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService.getAll().then((iP) => {
      setPersons(iP)
      setPersonsShown(iP)
    })
    
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(null);
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  const addNewPerson = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.name === newPerson.name).length === 0) {
      personService.create(newPerson).then((rP) => {
        setPersons(persons.concat(rP))
        setPersonsShown(persons.concat(rP))
        setNotification(`Added ${newPerson.name}`)
      })
      .catch((e) => setNotification(e.response.data.error))
    } else {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(persons.filter(p => p.name === newPerson.name)[0].id, newPerson)
          .then((rP) => {
            const newPersonsList = persons.map((p) =>
              p.id !== rP.id ? p : rP
            )
            setPersons(newPersonsList)
            setPersonsShown(newPersonsList)
            setNotification(`Updated ${newPerson.name}`)
            })
          .catch((e) => setNotification(e.response.data.error))
      }
    }
  
    setNewPerson({ name: "", number: "" })
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
      .delete_(id).then(() => {
        const newPersonsList = persons.filter((p) => p.id !== id)
        setPersons(newPersonsList)
        setPersonsShown(newPersonsList)
        setNotification(`Removed ${name}`)
      })
      .catch(() => {
        setNotification(
          `Information of ${name} has already been removed from the server`
        )}
      )
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
    setNewPerson({ ...newPerson, [name]: value })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />

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