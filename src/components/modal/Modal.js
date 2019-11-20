import React, { useContext } from 'react'

import './modal.css';

import Context from '../../context/Context';

const Modal = () => {
  const { modalStatus } = useContext(Context)

  return (
    <div id='modal' className={`${modalStatus === 'on' ? '' : 'd-n'}`}>
      <div id="modal-container">
        
      </div>
    </div>
  )
}

export default Modal