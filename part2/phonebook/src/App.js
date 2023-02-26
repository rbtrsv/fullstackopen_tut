import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: ''})
  const [filter, setFilter] = useState('')
  const [personsShown, setPersonsShown] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((r) => {
      setPersons(r.data);
      setPersonsShown(r.data);
    });
  }, []);

  const addNewPerson = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.name === newPerson.name).length === 0) {
      
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then((r) => {
          setPersons(persons.concat(newPerson));
          setPersonsShown(personsShown.concat(newPerson));
        })
    } else {
      alert(`${newPerson.name} is already added to phonebook`)
    }
  
    setNewPerson({ name: "", number: "" })
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

      <Persons personsShown={personsShown} />
    </div>
  )
}

export default App