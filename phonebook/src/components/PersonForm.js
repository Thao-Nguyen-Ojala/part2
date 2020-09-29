import React, { useEffect } from "react";

const PersonForm = (props) => {
  const {
    addContact,
    newName,
    setNewName,
    onNameInput,
    newNumber,
    setNewNumber,
    onNumberInput,
  } = props;
  useEffect(() => {
    setNewName(newName);
  }, [setNewName, newName]);
  useEffect(() => {
    setNewNumber(newNumber);
  }, [setNewNumber, newNumber]);

  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={onNameInput} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
