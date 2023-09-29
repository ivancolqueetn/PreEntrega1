import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src="./Imagenes/LOGOT.png" width="230" height="100" alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Buy">Comprar Casilleros</Nav.Link>
            <Nav.Link href="#link">Ver Casilleros</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Category/men's clothing">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Category/jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Category/electronics">Electronics</NavDropdown.Item>
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