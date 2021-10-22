import styled from 'styled-components'
import meditacao from '../img/meditacao.jpg';

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: #0a294a;
`;

export const ContainerContent = styled.div`
    width: 50%;
    background: white;
    display: flex;
    flex-direction: row;
`;

export const BoxCenter = styled.div`
     flex: 1;
    width: 20px;
    align-content: flex-end;
    padding: 40px;
    line-height: 33px;
    height: 100%;
`;


export const ContainerLoginBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #0a294a;
`;

export const ContainerLogin = styled.div`
    width: 50%;
    height: 35em;
    background: white;
    display: flex;
    flex-direction: row;
`;


export const ContDiv = styled.div`
    width: 50%;
    background: white;
    display: flex;
    flex-direction: row;
`;

export const BoxDiv = styled.div`
    flex: 1;
    align-content: flex-end;
    padding: 40px;
    line-height: 33px;
    height: 100%;
    width: 20px; 
`;
export const BoxLeft = styled.div`
    flex: 1;
    background: black;
    width: 50%;
    height: 100%;
    background-image: url(img/meditacao.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    align-content: flex-start; 
`;

export const BoxRight = styled.div`
    flex: 1;
    width: 20px;
    align-content: flex-end;
    padding: 40px;
    line-height: 33px;
    background-color: white; 
`;

export const TextCenterP = styled.p`
    text-align: center; 
`;


export const TextCenter = styled.div`
    text-align: center; 
`;

export const Title = styled.h1`
    text-align: center; 
`;
    
export const SubTitleV = styled.h2`
    text-align: center;
    color: #63c99a;
`;

export const SubTitleVi = styled.h2`
    text-align: center;
    color: #8a113c;    
`;

export const SubTitleL = styled.h2`
    text-align: center;
    color: #fe912a;
`;

export const Button = styled.input`
    background: #0c325a;
    padding: 8px 40px;
    border: 0px;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

