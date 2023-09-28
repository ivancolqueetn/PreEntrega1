// import React from 'react'
// import CardWidget from './CardWidget'

// const NavBar = () => {
//   return (
//         <nav className="navbar navbar-expand-lg">
//             <a className="navbar-brand" href="./index.html"><img src="./Imagenes/LOGOT.png" width="230" height="100" alt="Logo"/></a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
//                 <ul className="navbar-nav">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="./index.html">Home</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Comprar Casilleros</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Ver precios</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Contacto</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Mi Cuenta</a>
//                     </li>
//                 </ul>
//             </div>
//         <CardWidget/>
//         </nav>
//   )
// }

// export default NavBar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="./Imagenes/LOGOT.png" width="230" height="100" alt="Logo"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Comprar Casilleros</Nav.Link>
            <Nav.Link href="#link">Ver Casilleros</Nav.Link>
            <NavDropdown title="Saber mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sobre Nosotros
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Registro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Links
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/>
    </Navbar>
  );
}

export default NavBar;