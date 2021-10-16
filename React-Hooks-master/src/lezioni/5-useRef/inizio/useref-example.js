import React, { useRef, useState, useEffect } from "react";

const RefExample = () => {
  const [posizione, setPosizione] = useState(0);

  const inputRef = useRef(null);
  const titolo = useRef(null);
  //console.log(useRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputRef.current.value);
    console.log(titolo.current.getBoundingClientRect());
  };

  useEffect(() => {
    setPosizione(titolo.current.getBoundingClientRect()); //  Metodo per restituire oggetto con la posizione dell'elemento.
  }, [titolo]); //  Al variare di titolo avrò un nuovo valore di posizione 

  return (
    <div>
      <h2 ref={titolo} className='ml-3'>useRef titolo</h2>
      <h4
        style={{position: ' absolute', left: posizione.left, top: `${posizione.top + 200}px`}}
      >
        posizione
        </h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button className="button" type='submit'>Invia</button>
      </form>
    </div>
  );
};

export default RefExample;
