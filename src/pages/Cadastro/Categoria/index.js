import React from 'react';
import {Link} from 'react-router-dom';
import PageDefaul from '../../../components/PageDefault'

function CadastroCategoria() {
  return (
    <PageDefaul>
      <h1>Cadastro de Categoria</h1>
      <Link to="/"> 
        Ir pra home
      </Link>
    </PageDefaul>
  )
}

export default CadastroCategoria;