import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {

  const [people, setPeople] = useState(data);
  //console.log(people);

  const removePeople = (id) => {
    let newPeople = people.filter(el => el.id !== id); //  il nuovo array people sarà composto da tutti gli elementi con id diverso da quello che sto elminando
    setPeople(newPeople);
  }

  return (
    <>
      {people.map(el => {
        const { id, name } = el;
        return (
          <div
            key={id}
            className='item shadow'
          >
            <h5>{name}</h5>
            <button
              type='button'
              className='button delete-button'
              onClick={() => removePeople(id)}
            >
              Elimina!
            </button>
          </div>
        )
      })}
    </>
  );
};

export default ArrayState;
