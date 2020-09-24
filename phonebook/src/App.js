import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    console.log("effect");
    Axios.get("http://localhost:3001/phonebook").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    for (let i = 0; i < persons.length; i++) {
      let name = persons[i].name;
      if (name === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }
    const updateContact = [...persons];
    updateContact.push({ name: newName, number: newNumber });
    setPersons(updateContact);
  };

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterList = (event) => {
    setFilterValue(event.target.value);
  };

  const personsToRender = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterValue={filterValue}
        onFilterList={handleFilterList}
        setFilterValue={setFilterValue}
      />

      <h3>Add a new</h3>
      <PersonForm
        addContact={addContact}
        newName={newName}
        onNameInput={handleNameInput}
        setNewName={setNewName}
        newNumber={newNumber}
        onNumberInput={handleNumberInput}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons personsToRender={personsToRender} />
    </div>
  );
}

export default App;
