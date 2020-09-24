import React from "react";

const Persons = (props) => {
  const { personsToRender } = props;
  return personsToRender.map((person, i) => (
    <p key={i}>
      {person.name} {person.number}
    </p>
  ));
};

export default Persons;
