import React from "react";

const ControlledInput = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form inviato!');
  }

  return (
    <form className='bg-white shadow p-4 rounded'>

      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input id='nome' type="text" name='nome' className='form-control col-9' />
      </div>

      <div className="form-group d-flex align-items-center justify-content-around container rounded">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          Email:
        </label>
        <input id='email' type="email" name='email' className='form-control col-9' />
      </div>

      <div className="form-group d-flex align-items-center justify-content-around container rounded">
        <label htmlFor="telefono" className="text-left font-weight-bold col-3">
          Telefono:
        </label>
        <input id='telefono' type="tel" name='telefono' className='form-control col-9' />
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
