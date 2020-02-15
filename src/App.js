import React from 'react';
import Header from './components/Header';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {
  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de Seguros"
      />

      <ContenedorForm>
        
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
