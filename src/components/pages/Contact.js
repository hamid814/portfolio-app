import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/contact.scss';

const Contact = () => {
  const { setActivePage,
          pagesStatus,
          activePage,
          setPagesStatus,
          aPageIsActive,
          traversPages,
          setPagesTransiting,
          pagesTransiting } = useContext(Context)

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const goToWorks = () => {
    traversPages('works')
  }

  const goToHome = () => {
    traversPages('home')
  }

  return (
    <div className={`page-container ${activePage === 'home' && aPageIsActive && 'active'}`} id='contact'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'} ${pagesStatus === 'zoom-in' ? 'zoom-in-vertical' : 'zoom-out-vertical'}`} onClick={onClick}>
        <h1>
          CONTACT
          <span className='desc'>
            <div className='text'>
              click
            </div>
          </span>
        </h1>
      </div>
      <div className='background-layer'></div>
      <div className={`page ${activePage === 'contact' ? 'on' : 'off'}`}>
        <div className='background'>
          <div className='line-one'>
            CON
          </div>
          <div className='line-two'>
            TACT
          </div>
        </div>
        <div className='social'>
          <div className='item-container'>
            <div className='item'>
              <div className='text'>
                email
              </div>
              <div className='item-desc'>
                item desc
              </div>
            </div>
            <div className='item-border'></div>
          </div>
          <div className='item-container'>
            <div className='item'>
              <div className='text'>
                github
              </div>
              <div className='item-desc'>
                click to open github
              </div>
            </div>
            <div className='item-border'></div>
          </div>
        </div>
        <Form />
        <div className='go-to-works-container' onClick={goToWorks}>
          <div className='text'>
            See My <span>works</span>
          </div>
        </div>
        <div className='go-to-home-container' onClick={goToHome}>
          <div className='go-to-home'>
            <div className='arrow'>
              <div className='line line-one'></div>
              <div className='line line-two'></div>
              <div className='line line-three'></div>
            </div>
            <div className='text'>
              Home
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Form = () => {
  const [data, setData] = useState({
    name: {
      value: '',
      focused: false
    },
    email: {
      value: '',
      focused: false
    },
    company: {
      value: '',
      focused: false
    },
    message: {
      value: '',
      focused: false
    },
  })
  const [nameIsFocused, setNameIsFocused] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [companyValue, setCompanyValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  
  const onInputChange = e => {
    const newData = {
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      }
    }

    setData(newData)
  }

  const onInputFocus = e => {
    const newData = {
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        focused: true,
      }
    }

    setData(newData)
  }

  const onInputBlur = e => {
    const newData = {
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        focused: false,
      }
    }

    setData(newData)
  }
  
  const onSubmit = e => {
    e.preventDefault()
  }
  
  return (
    <div id='form' onSubmit={onSubmit}>
      <form>
        <div className='form-header'>
          <h2>
            Let's Get in touch
          </h2>
        </div>
        <div className={`form-group ${data.name.value !== '' || data.name.focused ? 'active' : 'not-active'}`}>
          <label onClick={onInputFocus}>Name</label>
          <input type='text' name='name' value={data.name.value} onChange={onInputChange} onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>
        <div className={`form-group ${data.email.value !== '' || data.email.focused ? 'active' : 'not-active'}`}>
          <label>Email</label>
          <input type='text' name='email' value={data.email.value} onChange={onInputChange} onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>
        <div className={`form-group ${data.company.value !== '' || data.company.focused ? 'active' : 'not-active'}`}>
          <label>Company</label>
          <input type='text' name='company' value={data.company.value} onChange={onInputChange} onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>
        <div className={`form-group ${data.message.value !== '' || data.message.focused ? 'active' : 'not-active'}`}>
          <label>Message</label>
          <input type='text' name='message' value={data.message.value} onChange={onInputChange} onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>
        <div className='form-group'>
          <input type='submit' value='Send'/>
        </div>
      </form>
    </div>
  )
}

export default Contact
