import React from 'react'
import { useParams, useHistory } from "react-router-dom";

const SingleProgetto = (props) => {
  console.log(props);

  const { id } = useParams();
  return (
    <div>
      <h6>Singolo Progetto</h6>
      <h2>Progetto numero {id}</h2>
    </div>
  )
}

export default SingleProgetto
