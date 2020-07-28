import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import Button  from '../Button'
//import ButtonLink from '../ButtonLink';
import './menu.css' 

function  Menu( ) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;