import styled from 'styled-components';

export const Container = styled.div`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }
    height:10vh;
`;

export const RowPais = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;

    border-top:2px  solid #dadce0;
    background-color: #f2f2f2;
    
    font-size:14px;
    color:#717171;

    padding: 10px 0 10px 20px;
`;

export const RowMenu = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    flex-wrap:wrap;

    border-top:2px solid #dadce0;
    border-bottom:2px solid #dadce0;
    background-color:#f2f2f2;
    

    .MenuItem{
        color: #717171;
        text-decoration: none;
        font-size:14px;

        padding: 10px 15px;
    }

    @media(max-width:764px){
        .Menu1:nth-child(1){
            margin:0 auto;
            padding: 10px 0;
            background-color:#f2f2f2;
        }

        .Menu2:nth-child(2){
            margin: 0 auto;
            padding: 10px 0;
            background-color:#f2f2f2;
        }
    }

`;