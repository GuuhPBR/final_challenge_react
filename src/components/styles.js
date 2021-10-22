import styled, {css} from "styled-components";

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100%;
    margin-top: 2vh;
`;

export const ContainerContent = styled.div`
    width: 75%;
    background: white;
    display: flex;
    flex-direction: row;
`;

export const BoxCenter = styled.div`
     flex: 1;
    width: 20px;
    align-content: flex-end;
    padding: 80px 15px;
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
    background-image: url(${props => props.image_url});
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

export const Title = styled.h4`
    text-align: center; 
`;

export const TitleSub = styled.h5`
    text-align: center; 
`;
   
export const SubTitleV = styled.h5`
    text-align: center;
    color: #63c99a;
`;

export const SubTitleVi = styled.h5`
    text-align: center;
    color: #8a113c;    
`;

export const SubTitleL = styled.h5`
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

export const Lista = styled.ul`
    margin: 16px 0px;
    padding-bottom: 20px;
    display: inline-flex;
    position: absolute;
`;

export const ItemLista = styled.li`
    display: block;
    padding: 10px;
    background: #0a294a;
    margin-right: 5px;
`;