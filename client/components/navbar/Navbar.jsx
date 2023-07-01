import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavbarLayout() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Ohara</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <NavDropdown title="Catalogue" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to='/catalogue'>Catalogue</Link></NavDropdown.Item>
                <NavDropdown.Item>
                <Link to='/catalogue/management'>Management Books</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarLayout;
