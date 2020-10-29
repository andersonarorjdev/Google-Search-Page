//Imports Funcionais do React
import React from 'react';

//Imports de estilizações do react;
import {Container, Menu, Menuicon} from './style-header';

//Imports de imagens e icones
import MenuIcon from '../../assets/icons/menu.svg';
import UserPicture from '../../Images/profile.jpg'

const header = props =>{
    return(
        <Container>

          <Menu>
              <a href="/" className="MenuItem">Gmail</a>
              <a href="/" className="MenuItem">Imagens</a>
            <button className="MenuItem">
                <img src={MenuIcon} className="MenuIcon" alt="Icone do Menu" />
            </button>
            <img src={UserPicture} id="ProfileUser" className="MenuItem" alt="" />
          </Menu> 
        </Container>
    );
}

export default header;
