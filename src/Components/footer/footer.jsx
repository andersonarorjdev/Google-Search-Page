import React from 'react';

import { Container, RowPais, RowMenu } from './styles-footer';

const Footer = () => {
  return (
    <Container>
      <RowPais>
        Brasil
      </RowPais>

      <RowMenu>
          <div className="Menu1">
            <a href="/" className="MenuItem">Privacidade</a>
            <a href="/" className="MenuItem">Termos</a>
            <a href="/" className="MenuItem">Configurações</a>
          </div>

          <div className="Menu2">
            <a href="/" className="MenuItem">Publicidade</a>
            <a href="/" className="MenuItem">Negócios</a>
            <a href="/" className="MenuItem">Sobre</a>
            <a href="/" className="MenuItem">Como funciona a Pesquisa</a>
          </div>
      </RowMenu>

    </Container>
  );
};

export default Footer;
