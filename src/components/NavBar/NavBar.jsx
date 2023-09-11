import React from 'react'
import CardWidget from './CardWidget'

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="./index.html"><img src="./Imagenes/LOGOT.png" width="230" height="100" alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="./index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Comprar Casilleros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ver precios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mi Cuenta</a>
                    </li>
                </ul>
            </div>
        <CardWidget/>
        </nav>
  )
}

export default NavBar