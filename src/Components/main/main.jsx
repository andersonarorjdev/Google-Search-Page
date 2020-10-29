//Imports Funcionais do React.
import React from 'react';

//imports de estilizações do React.
import { Container, Letters, SearchInput, BoxSearch, Buttons, SmallText } from './styles-main';

//Imports de imagens e icones
import SearchIcon from '../../assets/icons/loupe.svg';
import KeyboardIcon from '../../assets/icons/keyboard.svg';

const Main = () => {
  return (
    <Container>

      <Letters>
        <span className="LettersColors">G</span>
        <span className="LettersColors">o</span>
        <span className="LettersColors">o</span>
        <span className="LettersColors">g</span>
        <span className="LettersColors">l</span>
        <span className="LettersColors">e</span>
        <span className="LettersColors">-</span>
        <span className="LettersColors">C</span>
        <span className="LettersColors">l</span>
        <span className="LettersColors">o</span>
        <span className="LettersColors">n</span>
        <span className="LettersColors">e</span>
      </Letters>

      <SearchInput>
        <BoxSearch className="BoxSearchClass">
          <button>
            <img src={SearchIcon} alt="Pesquisar" className="SearchIconClass" srcset=""/>
          </button>
          <input type="search" className="BoxSearchInput" />
          <button>
            <img src={KeyboardIcon} alt="Teclado Virtual" className="KeyboardIconClass" srcset=""/>
          </button>
        </BoxSearch>
      </SearchInput>

      <Buttons className="ButtonsSection">
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
      </Buttons>

      <SmallText>
        Desenvolvido por AndersonArorj: <span>Developed by AndersonArorj</span>
      </SmallText>
    </Container>
  );
};

export default Main;
