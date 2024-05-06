import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import Universiapolis from './Universiapolis.png'; // Logo de l'université
import circularButtonImage from './user.png'; // Image pour le bouton circulaire

// Style pour le bouton circulaire
const circularButtonStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: `url(${circularButtonImage}) no-repeat center`,
  backgroundSize: 'contain',
  border: 'none',
};

// Style pour la flèche blanche
const whiteArrowStyle = {
  color: 'white',
  marginLeft: '35px',
  fontSize: '10px',
};

// Composant Navbar avec une liste déroulante personnalisée
function Navbarprofile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Change l'état du menu lors du clic
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <img src={Universiapolis} alt="Universiapolis Logo" style={{ width: '100px' }} />
        <Navbar.Toggle aria-controls="navbarScroll" />

        <a className="home">Demande d'admission</a>

        {/* Bouton circulaire avec une flèche blanche */}
        <Button onClick={toggleMenu} style={circularButtonStyle}>
          {/* Flèche blanche indiquant le menu */}
          <span style={whiteArrowStyle}>{isMenuOpen ? '▼' : '▼'}</span> {/* Flèche blanche */}
        </Button>

        {/* Liste déroulante conditionnelle */}
        {isMenuOpen && (
          <div style={{ position: 'absolute',  top: '60px', right: '30px', background: 'white', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px' }}>
            {/* Contenu de la liste */}
            <ul style={{ listStyle: 'none', padding: '10px', paddingLeft: '50px' , margin: '0' }}>
              <li><a href="#/action-1" style={{color: 'gray', marginRight: '30px'}}>nom etudiant</a></li>
              <hr></hr>
              <li><a href="#/action-2" style={{color: 'gray'}}>Déconnexion</a></li>
            </ul>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default Navbarprofile;
