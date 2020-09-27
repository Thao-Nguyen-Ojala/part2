import React from "react";

const Button = (props) => {
  const { showCountry, country } = props;
  return (
    <div>
      <button onClick={() => showCountry(country)}> show </button>
    </div>
  );
};

export default Button;
