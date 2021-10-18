import {
  APRI_MODAL,
  CHIUDI_MODAL
} from './actions';

const reducer = (state, action) => {
  console.log('state:', state, 'action:', action);
  if (action.type === 'PREMO_BOTTONE') {
    console.log('Bottone premuto!');
  }
  if (action.type === APRI_MODAL) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: action.payload
    }
  }
  if (action.type === CHIUDI_MODAL) {
    return {
      ...state,
      isModalOpen: false
    }
  }
  throw new Error(`Nessuna funzione corrispondente a ${action.type}`);
  return state  //  Devo sempre ritornare un state
};

export default reducer