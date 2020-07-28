import React from 'react';

import Logo from '../../assets/Logo.png';
import Button  from '../Button'
//import ButtonLink from '../ButtonLink';
import './menu.css' 

function  Menu( ) {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;