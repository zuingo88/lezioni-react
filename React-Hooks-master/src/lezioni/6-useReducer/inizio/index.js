import React, { useReducer, useState } from "react";
import Modal from './Modal';
import reducer from './reducer';
import {
  APRI_MODAL,
  CHIUDI_MODAL
} from './actions';

const initialState = {
  isModalOpen: false,
  modalContent: 'Ciao, sono Modal...'
};

const Index = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const tiPremo = () => {
    dispatch({
      type: 'PREMO_BOTTONE'
    });
  }

  const apriModal = () => {
    dispatch({ type: APRI_MODAL, payload: 'il mio nuovo modal' })
  };

  const chiudiModal = () => {
    dispatch({ type: CHIUDI_MODAL })
  };

  return (
    <>
      <div>
        <h2>Premi qui per aprire il modal!</h2>
        <button className='button' onClick={apriModal}>Mostrami</button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        chiudiModal={chiudiModal}
      />
    </>
  );
};

export default Index;
