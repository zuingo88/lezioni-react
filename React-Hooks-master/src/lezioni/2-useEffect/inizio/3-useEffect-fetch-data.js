import React, { useState, useEffect } from "react";
import Axios from "axios";

const url = "https://api.github.com/users";

const FetchComponent = () => {

  const [users, setUsers] = useState([]);     //  Dichiaro come state un array vuoto.

  const getData = async () => {               //  Funzione per fetchare dati tramite Axios.
    const response = await Axios.get(url);
    console.log(response);
    setUsers(response.data);                  //  setto nuovo state con array di oggetti ricevuto da risposta chiamata Axios di tipo GET.
  }

  useEffect(() => {                           //  Richiamo la funzione get useEffect
    getData();                                //  Richiamo la funzione get data in useEffect perchè esso non può avere come parametro un async.
  }, []);                                     //  Do un secondo parametro a useEffect per far sì che la chiamata Axios avvenga una sola vola al caricamento della pagina.

  return (
    <div>
      <h1>Fetch Component</h1>
      <ul className='users'>

        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el
          return (
            <li key={id} className='shadow'>
              <img src={img} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Link</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default FetchComponent;
