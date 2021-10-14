import React, { useEffect } from "react";

const useEffectBasi = () => {

  const [value, setValue] = React.useState(0); // Altro modo per dichiarare Hooks useState

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  }

  useEffect(() => {
    console.log(`Ciao! sono useEffect.`);
    if (value < 1) {
      document.title = `Nessun messaggio`;
    } else {
      document.title = `${value} Nuovi messaggi`;
    }
  }, [value]); // Lo useEffect sarà eseguito ogni qual volta ci sarà una variazione dell'elemento scritto dentro l'array. In caso di array vuoto lo useEffect sarà eseguito solo al primo caricamento della pagina.

  return (
    <div>
      <h4>Value: {value}</h4>
      <button
        className="button"
        onClick={aumenta}
      >
        Aumenta!
      </button>
    </div>
  );
};

export default useEffectBasi;
