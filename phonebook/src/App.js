import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PhonebookRequests from "./components/PhonebookRequests";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [successMessage, setSussesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const newContact = { name: newName, number: newNumber };

  useEffect(() => {
    PhonebookRequests.getData().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNewContact = (event) => {
    event.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      let name = persons[i].name;
      let id = persons[i].id;
      if (name === newName) {
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        );
        editContact(id);
        return;
      }
    }
    addContact(event);
  };

  const editContact = (id) => {
    const updateContact = [...persons];
    const selectedPerson = updateContact.find((person) => person.id === id);
    const selectedPersonAfterUpdate = { ...selectedPerson, number: newNumber };
    const index = updateContact.indexOf(selectedPerson);

    updateContact[index] = selectedPersonAfterUpdate;
    PhonebookRequests.editContact(id, newContact).then((response) => {
      setPersons(updateContact);
      setNewName("");
      setNewNumber("");
    });
  };

  const addContact = () => {
    const updateContact = [...persons];
    PhonebookRequests.addToPhonebook(newContact).then((returnedPersons) => {
      setSussesMessage(`Added ${newName}`);
      setTimeout(() => {
        setSussesMessage(null);
      }, 5000);
      setPersons(updateContact.concat(returnedPersons));
      setNewName("");
      setNewNumber("");
    });
  };

  const removeContact = (contactId) => {
    const updateContact = [...persons];
    const deletedPerson = updateContact.filter(
      (person) => person.id === contactId
    );
    const afterDelete = updateContact.filter(
      (person) => person.id !== contactId
    );

    PhonebookRequests.removeContact(contactId)
      .then((res) => {
        setPersons(afterDelete);
      })
      .catch((err) => {
        setErrorMessage(
          `Information of ${deletedPerson[0].name} has already been removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
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

  let message;
  let isMessageError;
  if (successMessage) {
    message = successMessage;
    isMessageError = false;
  }
  if (errorMessage) {
    message = errorMessage;
    isMessageError = true;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {message && (
        <Notification message={message} isMessageError={isMessageError} />
      )}

      <Filter
        filterValue={filterValue}
        onFilterList={handleFilterList}
        setFilterValue={setFilterValue}
      />

      <h3>Add a new</h3>
      <PersonForm
        addContact={handleNewContact}
        newName={newName}
        onNameInput={handleNameInput}
        setNewName={setNewName}
        newNumber={newNumber}
        onNumberInput={handleNumberInput}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons
        personsToRender={personsToRender}
        onRemoveContact={removeContact}
      />
    </div>
  );
}

export default App;
