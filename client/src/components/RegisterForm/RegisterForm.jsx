import React, { useState } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [contrasenia2, setContrasenia2] = useState("")
    const [celular, setCelular] = useState("")
    const [localidad, setLocalidad] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            nombre : nombre.toLowerCase(),
            apellido :apellido.toLowerCase(),
            email : email.toLowerCase(),
            contrasenia : contrasenia.toLowerCase(),
            celular,
            localidad : localidad.toLowerCase()
        }
    }

    return (
        <form onSubmit={handleSubmit} className='register__container'>
            <h1>Registro</h1>
            <input onChange={e=>setNombre(e.target.value)} className='register__input' type="text" placeholder="Nombre" name='nombre'/>
            <input onChange={e=>setApellido(e.target.value)} className='register__input' type="text" placeholder="Apellido" name='apellido'/>
            <input onChange={e=>setEmail(e.target.value)} className='register__input' type="email" placeholder="Email" name='email'/>
            <input onChange={e=>setContrasenia(e.target.value)} className='register__input' type="password" placeholder="Contraseña" name='password'/>
            <input onChange={e=>setContrasenia2(e.target.value)} className='register__input' type="password" placeholder="Repite la Contraseña" name='password'/>
            <input onChange={e=>setCelular(e.target.value)} className='register__input' type="text" placeholder="Celular" name='phone'/>
            <input onChange={e=>setLocalidad(e.target.value)} className='register__input' type="text" placeholder="Localidad" name='localidad'/>
            <button onSubmit={handleSubmit} className='btn primary'>Crear usuario</button>
        </form>
    )
}

export default RegisterForm