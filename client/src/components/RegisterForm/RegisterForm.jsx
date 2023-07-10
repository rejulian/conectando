import React, { useState, useEffect } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {

    const [fetchProvincias, setFetchProvincias] = useState([])
    const [fetchCiudades, setFetchCiudades] = useState([])

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [contrasenia2, setContrasenia2] = useState("")
    const [celular, setCelular] = useState("")
    const [localidad, setLocalidad] = useState("")
    const [provincia, setProvincia] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre.toLowerCase(),
            apellido: apellido.toLowerCase(),
            email: email.toLowerCase(),
            contrasenia: contrasenia.toLowerCase(),
            celular,
            localidad: localidad.toLowerCase()
        }
        console.log(data);
    }

    useEffect(() => {
        fetch(`https://apis.datos.gob.ar/georef/api/provincias`)
            .then(res => res.json())
            .then(data => {
                const provinciasOrdenadas = data.provincias.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase();
                    const nombreB = b.nombre.toLowerCase();

                    if (nombreA < nombreB) {
                        return -1;
                    }
                    if (nombreA > nombreB) {
                        return 1;
                    }
                    return 0;
                });
                setFetchProvincias(provinciasOrdenadas);
            });
    }, [])

    useEffect(() => {
        if (provincia) {
            fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia}&max=5000`)
                .then((res) => res.json())
                .then((data) => {
                    const ciudadesOrdenadas = data.departamentos.sort((a, b) => {
                        const nombreA = a.nombre.toLowerCase();
                        const nombreB = b.nombre.toLowerCase();
    
                        if (nombreA < nombreB) {
                            return -1;
                        }
                        if (nombreA > nombreB) {
                            return 1;
                        }
                        return 0;
                    });
                    setFetchCiudades(ciudadesOrdenadas);
                });
        } else {
            setFetchCiudades([]);
        }
    }, [provincia]);

    return (
        <form onSubmit={handleSubmit} className='register__container'>
            <h1>Registro</h1>
            <input onChange={e => setNombre(e.target.value)} className='register__input' type="text" placeholder="Nombre" name='nombre' />
            <input onChange={e => setApellido(e.target.value)} className='register__input' type="text" placeholder="Apellido" name='apellido' />
            <input onChange={e => setEmail(e.target.value)} className='register__input' type="email" placeholder="Email" name='email' />
            <input onChange={e => setContrasenia(e.target.value)} className='register__input' type="password" placeholder="Contraseña" name='password' />
            <input onChange={e => setContrasenia2(e.target.value)} className='register__input' type="password" placeholder="Repite la Contraseña" name='password' />
            <input onChange={e => setCelular(e.target.value)} className='register__input' type="text" placeholder="Celular" name='phone' />
            <select onChange={e => setProvincia(e.target.value)} className='register__input' name="provincia" id="provincia">
                <option selected disabled value="null">
                    Seleccione provincia
                </option>
                {
                    fetchProvincias.map(p => (
                        <option key={p.id} value={p.nombre}> {p.nombre} </option>
                    ))
                }
            </select>
            <select onChange={e=>setLocalidad(`${provincia}, ${e.target.value}`)} className="register__input" name="ciudad" id="ciudad">
                <option selected disabled value="null">
                    Seleccione ciudad
                </option>
                {fetchCiudades.map((c) => (
                    <option key={c.id} value={c.nombre}>
                        {c.nombre}
                    </option>
                ))}
            </select>
            <button onSubmit={handleSubmit} className='btn primary'>Crear usuario</button>
        </form>
    )
}

export default RegisterForm