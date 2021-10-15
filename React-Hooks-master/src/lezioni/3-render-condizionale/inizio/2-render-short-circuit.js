import React, { useState } from "react";

const ShortRender = () => {

  const [parola, setParola] = useState('Sono una parola');

  //  Short Circuit Evaluation con OR operator 
  const esempioOr = !parola || 'Parola è false'  //  Vedrò il secondo valore solo se parola risulterà false.

  //  Short Circuit Evaluation con AND operator 
  const esempioAnd = parola && 'Valore generico'  //  In questo caso vedrò il secondo valore solo quando parola.è true

  return (
    <div>
      <h2>{esempioOr}</h2>
      <h2>{esempioAnd}</h2>
      {
        parola && <h4>Ho bypassato l'if statement</h4>  //  h4 sarà visibile quando parola sarà true. Non è possibile usare degli if statement all'interno di JSX.
      }
    </div>
  );
};

export default ShortRender;
