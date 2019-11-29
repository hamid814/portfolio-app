import React, { useState, useEffect, useContext } from 'react'

import './modal.css';

import Context from '../../context/Context';

const Modal = () => {
  const { modalStatus, setModal } = useContext(Context)

  const [hanging, setHanging] = useState(false)
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
    }

    // eslint-disable-next-line
  }, [modalStatus])

  const onClose = (e) => {
    if(e.target.classList.contains('func-close-modal')) {
      setModal('off', null)
    }
  }

  const oNCloseX = () => {
    setModal('off', null)
  }

  const onHangeStart = () => {
    setHanging(true)
  }

  const onHangEnd = () => {
    setHanging(false)
  }

  return (
    <div id='modal' className={`func-close-modal modal-${status}`} onClick={onClose}>
      <div id='modal-container' className={`${hanging && 'modal-hanging'}`}>
        <div id='modal-close' onClick={oNCloseX} onMouseEnter={onHangeStart} onMouseLeave={onHangEnd}>
          &times;
        </div>
        
      </div>
    </div>
  )
}

export default Modal