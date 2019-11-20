import React, { useContext } from 'react'

import './modal.css';

import Context from '../../context/Context';

const Modal = () => {
  const { modalStatus, setModal } = useContext(Context)

  const onClose = () => {
    setModal('off', null)
  }

  return (
    <div id='modal' className={`${modalStatus === 'off' && 'd-n'}`} onClick={onClose}>
      <div id="modal-container">
        
      </div>
    </div>
  )
}

export default Modal