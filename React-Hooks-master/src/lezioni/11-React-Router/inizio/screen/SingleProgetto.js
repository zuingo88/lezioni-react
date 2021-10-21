import React from 'react'
import { useParams, useHistory } from "react-router-dom";

const SingleProgetto = ({ history, location, match }) => {
  console.log('History:', history);
  console.log('Location:', location);
  console.log('Match:', match);

  const { id } = useParams();

  const routerHistory = useHistory();  //  Non posso utilizzare gli Hook all'interno di un if statement, per cui devo dichiarare una variabile col suo valore.

  const forcePageChange = () => {
    console.log('Click');

    if (Number(id) === 1) {
      history.push('/progetto/2');
    } else if (Number(id) === 2) {
      history.push('/progetto/3');
    } else {
      routerHistory.push('/progetto/1');
    }
  };

  return (
    <div>
      <h6>Singolo Progetto</h6>
      <h2>Progetto numero {id}</h2>
      <button
        className="btn btn-dark"
        onClick={forcePageChange}
      >
        Cambia Progetto
      </button>
    </div>
  )
}

export default SingleProgetto
