//Imports Funcionais do React
import React from 'react';

//Imports de estilizações do react;
import {Container, Menu1, Menu2} from './style-header';


const header = props =>{
    return(
        <Container>

          <Menu1>
            <h1>Menu1</h1>
          </Menu1>

          <Menu2>
            <h1>Menu2</h1>
          </Menu2>

        </Container>
    );
}

export default header;
