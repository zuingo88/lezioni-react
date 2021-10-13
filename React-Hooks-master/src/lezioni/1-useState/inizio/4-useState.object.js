import React, { useState } from "react";

const StateObject = () => {

  const [persona, setPersona] = useState({
    name: 'zuingo',
    age: 33,
    saluto: 'saluto sempre ciao!'
  });

  const cambiaStato = () => {
    // if ((persona.age === 33) & (persona.saluto === 'saluto sempre ciao!')) {
    //   persona.age = 34;
    //   persona.saluto = 'non saluto più ciao!';
    // } else {

    // }
    setPersona({
      ...persona, //  Richiamo tutto il precendente state altrimenti mi rimangono solo le coppie chiave-valore che modifico. In questo caso perderei name.
      age: 34,
      saluto: 'non saluto più ciao!'
    })
  }

  return (
    <div className='item shadow'>
      <div className="text-left">
        <h5>{persona.name}</h5>
        <h5>{persona.age}</h5>
        <h6>{persona.saluto}</h6>
        <button
          className='button'
          onClick={cambiaStato}
        >
          Bottone!
        </button>
      </div>
    </div>
  );
};

export default StateObject;
