import React from 'react'

const Modal = ({ modalContent, modalState, openModal }) => {
  return (
    <section className={`modal-section ${modalState ? 'show-modal' : ''}`}>
      <div className='container modal-content'>
        <h4>
          {modalContent || 'Sono un bel modal!'}
        </h4>
        <button className="button delete-button" onClick={openModal}>X</button>
      </div>
    </section>
  )
}

export default Modal
