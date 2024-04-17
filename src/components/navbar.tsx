import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Universiapolis from "./Universiapolis.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <img src={Universiapolis} alt="Universiapolis Logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        
            <Nav.Link href="#action1" className='home'><b>Home</b></Nav.Link>
          </Nav>
          <Button variant="outline-success">Accueil</Button>
        
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
