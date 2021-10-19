import React from "react";
import { datiIncompleti } from "../../../data";

const PropComponent = () => {
  return (
    <div>
      {
        datiIncompleti.map(el => {
          return (
            <Prodotto key={el.id} {...el} />
          )
        })
      }
    </div>
  );
};

const Prodotto = ({nome, prezzo, image}) => {
  return (
    <article className='card shadow my-3 p-2'>
      <div className="card-body">
        <img src={image.url} alt={nome} className="card-img-top" />
        <div className="card-text">
          <h4 className="card-title">
            {nome}
          </h4>
          <p className='card-subtitle'>
            {prezzo} €
          </p>
        </div>
      </div>
    </article>
  )
}

export default PropComponent;
