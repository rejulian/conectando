import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand">Conectando</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/acerca" className="nav-link">Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/prices" className="nav-link">Precios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/support" className="nav-link">Soporte</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <a href="/" className='btn secondary'>Iniciar sesion</a>
                            <a href="" className='btn primary'>Registrarse</a>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header