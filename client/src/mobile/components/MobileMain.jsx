import React from 'react'
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import styled from 'styled-components';

function MobileMain() {
    return (
        <Main>
            <Div style={{ flex: 0.2 }}><Header/></Div>
            <Div style={{ flex: 0.6 }}><Contents /></Div>
            <Div style={{ flex: 0.2 }}><Footer /></Div>
        </Main>
    )
}

export default MobileMain

const Main = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid yellowgreen;
    height: 100vh;
`;

const Div = styled.div`
    border: 1px solid red
`;

