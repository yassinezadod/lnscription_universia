import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Universiapolis from "./Universiapolis.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <img src={Universiapolis} alt="Universiapolis Logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
          
            <a className='home'>Formulaire de pré-inscription à UNIVERSIAPOLIS</a>

          <Button className='button-3'>Accueil</Button>


      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
