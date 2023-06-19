import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main id='main'>
        <section className='main__text'>
            <h1>Bienvenido a <br/> <span>CONECTANDO</span></h1>
            <p>La web donde puede encontrar los profesionales que tanto deseas.</p>
        </section>
        <form className='main__form'>
            <input type="text" placeholder='Gasista, Plomero, Psicologo...'/>
            <button className='form__button'>🔍</button>
        </form>
    </main>
  )
}

export default Main