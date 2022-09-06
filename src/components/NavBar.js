import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light"  fixed="top">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logos/logo96.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            Tailor Cut
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">           
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;