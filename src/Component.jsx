import React from "react";
import data from "./data";
import { useState } from "react";

function Component() {
  const [persons, setPersons] = useState(data);

  const clearAll = () => {
    setPersons([]);
  };

  return (
    <main>
      <div className="container">
        <h3>5 Birthdays today</h3>
        {persons.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4> {name} </h4>
                <p> {age} </p>
              </div>
            </div>
          );
        })}
        <button type="button" className="btn btn-block" onClick={clearAll}>
          clear all
        </button>
      </div>
    </main>
  );
}

export default Component;
