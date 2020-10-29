//Imports Funcionais do React
import React from 'react';

//Importaçoes dos componentes;
import Header from './Components/header/header';
import Main from './Components/main/main';
import Footer from './Components/footer/footer';

//Imports de estilizações;
import GlobalStyle from './styles/global-reset';

function App() {
  return (
    <div>
    <GlobalStyle />
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
