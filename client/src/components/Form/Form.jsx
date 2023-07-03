import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css'

const Form = ({value}) => {

  const [query, setQuery] = useState('')
  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo(`/user/:${query}`)
  }

  return (
    <form onSubmit={handleSubmit} className='main__form'>
        <input name='job' defaultValue={value ? value : ''} onChange={e=>setQuery(e.target.value)} type="text" placeholder='Gasista, Plomero, Psicologo...'/>
        <button type='submit' className='form__button'>🔍</button>
    </form>
  )
}

export default Form