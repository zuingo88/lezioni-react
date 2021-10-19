import React from "react";
import { datiIncompleti } from "../../../data";
import PropTypes from "prop-types";

const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";


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

const Prodotto = ({ nome, prezzo, image }) => {
  const img = image && image.url  //  Se image è true allora sarà uguale a image.url.

  return (
    <article className='card shadow my-3 p-2'>
      <div className="card-body">
        <img src={img || defaultImage} alt={nome} className="card-img-top" />
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

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
}

Prodotto.defaultProps = {
  nome: 'divano default',
  prezzo: 17.99,
}

export default PropComponent;
