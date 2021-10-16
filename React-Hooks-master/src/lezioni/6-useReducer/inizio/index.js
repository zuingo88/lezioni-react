import React, { useReducer, useState } from "react";
import Modal from './Modal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(`ciao, sono Modal...`);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div>
        <h2>Premi qui per aprire il modal!</h2>
        <button className='button' onClick={openModal}>Mostrami</button>
      </div>
      <Modal
        modalContent={modalContent}
        modalState={isModalOpen}
        openModal={openModal}
      />
    </>
  );
};

export default Index;
