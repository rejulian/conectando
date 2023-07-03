import React from 'react'
import './Main.css'
import Form from '../../components/Form/Form'

const Home = () => {
  return (
    <main id='main'>
        <section className='main__text'>
            <h1>Bienvenido a <br/> <span>CONECTANDO</span></h1>
            <p>La web donde puedes encontrar los profesionales que tanto deseas.</p>
        </section>
        <Form/>
    </main>
  )
}

export default Home