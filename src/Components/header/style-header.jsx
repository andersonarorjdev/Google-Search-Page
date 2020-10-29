//Importações do styled components
import styled from 'styled-components';

export const Container = styled.div`   
        /* Fazendo o reset para o header */
    *{ 
        padding:0;
        margin: 0;
        box-sizing: border-box;
    } 

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 0 20px;
    
    height:10vh;
`;

export const Menu = styled.div`

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    .MenuItem:nth-child(1){
        padding: 0 0.65rem;
        font-size: 13px;
        text-decoration: none;
        color:#252525;
    }
    .MenuItem:nth-child(2){
        padding: 0 0.65rem;
        font-size: 13px;
        text-decoration:none;
        color:#252525;
    }
    .MenuItem:nth-child(3){
        padding: 0 0.65rem;
        background-color:transparent;
    }
    .MenuItem:nth-child(4){
        margin:0 0.65rem;
    }

    .MenuIcon{
        width:16px;
        height:16px;
    }

    #ProfileUser{
        width: 35px;
        height: 35px;
        border: 1px solid transparent;
        border-radius: 20px;
    }

    button{
        border: none;
    }
`;

