import React from 'react';
import Button from './UI/Button';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../store/Context';

const Modal = () => {
  const { toggleModal, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${toggleModal ? ' show-modal' : ''}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <Button css="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </Button>
      </div>
    </div>
  );
};

export default Modal;
