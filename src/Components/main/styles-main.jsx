import styled from 'styled-components';

export const Container = styled.div`

    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }

    height:80vh;

    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows:repeat(6, 1fr);
`;

export const Letters = styled.div`

    grid-column-start:1;
    grid-column-end:1;

    grid-row-start:1;
    grid-row-end:3;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;

    font-size:80px;
    font-weight:400;
    letter-spacing:-4px;
    line-height:bolder;
    font-family:Roboto, Helvetica, sans-serif;
    margin-top:40px;

    .LettersColors:nth-child(1){
        /* G */
        color:#4285f4;

    }
    .LettersColors:nth-child(2){
        /* o */
        color:#ea4335;
        font-weight:500;
    }
    .LettersColors:nth-child(3){
        /* o */
        color:#fbbc05;
        font-weight:500;
    }
    .LettersColors:nth-child(4){
        /* g */
        color:#4285f4;
        font-weight:500;
    }
    .LettersColors:nth-child(5){
        /* l */
        color:#34a853;
        font-weight:500;
    }
    .LettersColors:nth-child(6){
        /* e */
        color:#ea4335;
        font-weight:500;
        letter-spacing: 2px;
    }
    .LettersColors:nth-child(7){
        /* - */
        color:#fbbc05;
        font-weight:500;
        letter-spacing:2px;
    }
    .LettersColors:nth-child(8){
        /* C */
        color:#4285f4;
        font-weight:400;
    }
    .LettersColors:nth-child(9){
        /* l */
        color:#34a853;
        font-weight:500;
    }
    .LettersColors:nth-child(10){
        /* o */
        color:#ea4335;
        font-weight:500;
    }
    .LettersColors:nth-child(11){
        /* n */
        color:#fbbc05;
        font-weight:500;
    }
    .LettersColors:nth-child(12){
        /* e */
        color:#4285f4;
        font-weight:500;
    }


`;

export const SearchInput = styled.div`
    background-color:#0eb13f;

    grid-column-start:1;
    grid-column-end:1;

    grid-row-start:3;
    grid-row-end:4;

`;

export const Buttons = styled.div`

    grid-column-start:1;
    grid-column-end:1;

    grid-row-start:4;
    grid-row-end:5;

    display:flex;
    justify-content:space-evenly;
    align-items: center;
    padding: 0 25%;

    button{
        border:none;
        color:#252525;
        padding:10px;
        font-size:14px;
        border-radius:5px;

        background-color:#f8f9fa;
    }

    button:hover{
        border:1px solid #dadce0;
    }
`;

export const SmallText = styled.div`

    grid-column-start:1;
    grid-column-end:1;

    grid-row-start:5;
    grid-row-end:7;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;

    font-size:12px;

    padding-bottom:70px;

    span{
        color:blue;
        padding-left:5px;
    }

`;