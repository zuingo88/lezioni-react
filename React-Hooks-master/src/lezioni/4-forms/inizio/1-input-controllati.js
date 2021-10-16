import React, { useState, useEffect } from "react";

const ControlledInput = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && tel) {
      console.log('Form inviato!', 'Nome:', name, 'Email:', email, 'Telefono:', tel);

      setUsers(
        [
          ...users,
          {
            id: new Date(Date.now()).getTime().toString(),  //  Trickc per generare un numero univoco. L'ideale è usare librerie come uuid.
            name, //  Equivalente di scrivere `nome: nome,`. In ES6 si può fare quando la chiave è uguale al valore che gli viene assegnato.
            email,
            tel,
          }
        ]
      )

      setName('');
      setEmail('');
      setTel('');
    } else {
      alert('Riempi i campi richiesti!');
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <form className='bg-white shadow p-4 rounded'>

      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="na
        me" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input
          id='name'
          type="text"
          name='name'
          className='form-control col-9'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group d-flex align-items-center justify-content-around container rounded">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          Email:
        </label>
        <input
          id='email'
          type="email"
          name='email'
          className='form-control col-9'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group d-flex align-items-center justify-content-around container rounded">
        <label htmlFor="tel" className="text-left font-weight-bold col-3">
          Telefono:
        </label>
        <input
          id='tel'
          type="tel"
          name='tel'
          className='form-control col-9'
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" className='btn btn-info' onClick={handleSubmit}>
          Invia
        </button>
      </div>

    </form>
  );
};

export default ControlledInput;
