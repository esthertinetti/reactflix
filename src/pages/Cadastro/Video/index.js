import React from 'react';
import {Link} from 'react-router-dom';
import PageDefaul from '../../../components/PageDefault'

function CadastroVideo() {
  return (
    <PageDefaul>
      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria"> 
        Cadastrar Categoria
      </Link>
    </PageDefaul>
  )
}

export default CadastroVideo;