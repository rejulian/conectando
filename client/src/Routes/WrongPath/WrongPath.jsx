import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../utils/404.png'
import './WrongPath.css'

const WrongPath = () => {
  return (
    <main className='wrong_path'>
      <img className='img_wrong' src={Image} alt="page not found" />
      <Link to="/" className='btn secondary'>Volver</Link>
    </main>
  )
}

export default WrongPath