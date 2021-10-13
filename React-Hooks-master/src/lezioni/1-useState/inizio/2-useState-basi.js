import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {

  //  const { log } = console;
  //  log(useState(`Hello World!`));
  //  const value = useState()[0];
  //  const handler = useState()[1];
  //  log(`Value = `, value, `Handler = `, handler);

  const [titolo, setTitolo] = useState(`Hello World!!!`);

  const changeTitolo = () => {
    if (titolo === 'Hello World!!!') {
      setTitolo(`Nuovo Titolo!`);
    } else {
      setTitolo(`Hello World!!!`);
    }

  };

  return (

    <>
      <h2>{titolo}</h2>
      <button
        type='button'
        className='btn btn-info shadow my-3'
        onClick={changeTitolo}
      >
        Change Me!
      </button>
    </>
  );
};

export default UsoBase;
