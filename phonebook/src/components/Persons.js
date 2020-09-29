import React from "react";

const Persons = (props) => {
  const { personsToRender, onRemoveContact } = props;
  return personsToRender.map((person, i) => (
    <div key={i}>
      <span>
        {person.name} {person.number}
      </span>
      <button
        onClick={() => {
          if (window.confirm(`Delete ${person.name} ?`))
            onRemoveContact(person.id);
        }}
      >
        Delete
      </button>
    </div>
  ));
};

export default Persons;

//<button onClick={() => onRemoveContact(person.id)}>Delete</button>
