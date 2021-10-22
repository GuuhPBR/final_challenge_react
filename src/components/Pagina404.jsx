import React from 'react'
import doguito404 from '../img/doguito404.svg';
import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 40px;
    text-align: center;
    margin-top: 80px;
`;

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    width: 400px;
    margin-top: 50px;
`;

const Pagina404 = () => {
    return (
        <main>
            <Img src={doguito404} />
            <Paragraph>
                Opss, Essa página não existe!
            </Paragraph>
        </main>
     );
}

export default Pagina404;
