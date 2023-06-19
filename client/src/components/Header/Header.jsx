import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Conectando</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trabajadores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Precios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Soporte</a>
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