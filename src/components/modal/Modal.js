import React, { useState, useEffect, useContext } from 'react'

import './modal.css';

import Context from '../../context/Context';

const Modal = () => {
  const { modalStatus, setModal } = useContext(Context)

  const [status, setStatus] = useState('off')

  useEffect(() => {
    if(modalStatus === 'on') {
      setStatus('come')
      setTimeout(() => {
        setStatus('on')
      }, 1000);
    } else if(modalStatus === 'off') {
      setStatus('go')
      setTimeout(() => {
        setStatus('off')
      }, 1000);
    } else if(modalStatus === 'first-off') {
      setStatus('off')
    }

    // eslint-disable-next-line
  }, [modalStatus])

  const onClose = (e) => {
    if(e.target.classList.contains('func-close-modal')) {
      status === 'on' && setModal('off', null)
    }
  }

  const oNCloseX = () => {
    status === 'on' && setModal('off', null)
  }

  return (
    <div id='modal' className={`func-close-modal modal-${status}`} onClick={onClose}>
      <div id='modal-container'>
        <div id='modal-close' onClick={oNCloseX}>
          &times;
        </div>
        
      </div>
    </div>
  )
}

export default Modal