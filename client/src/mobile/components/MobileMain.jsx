import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import Menubar from './Menubar';
import styled from 'styled-components';

import Introduction from './contentsComponents/Introduction';
import Gallery from './contentsComponents/Gallery';
import Notice from './contentsComponents/Notice';
import Question from './contentsComponents/Question';
import Waytocome from './contentsComponents/Waytocome';

function checkMenu(str) {
    switch (str) {
        case '':
            return <Contents />;
        case 'Introduction':
            return <Introduction />;
        case 'Gallery':
            return <Gallery />;
        case 'Notice':
            return <Notice />;
        case 'Question':
            return <Question />;
        case 'Waytocome':
            return <Waytocome />;
        default:
            return <Contents />;
    }
}


function MobileMain() {

    const isMenu = useSelector((state) => {
        return state.reducerMenu.isMobileMenu;
    });

    const dispatch = useDispatch();

    const [content, setContent] = useState(<Contents />)

    const selected = useSelector((state) => {
        return state.reducerMenu.selected
    })

    useEffect(() => {
        setContent(checkMenu(selected));
    }, [selected])

    return (
        <Main>
            {isMenu ? <Menubar /> : ''}
            <Div style={{ flex: 0.2 }}><div></div><Header /></Div>
            <Div
                style={{
                    flex: 0.6,
                    marginTop: '18vh'
                }}
                onClick={() => {
                    dispatch({
                        type: 'CLOSE_MOBILE_MENU'
                    })
                }}
            >{content}</Div>
            <Div
                style={{ flex: 0.2 }}
                onClick={() => {
                    dispatch({
                        type: 'CLOSE_MOBILE_MENU'
                    })
                }}
            ><Footer /></Div>
        </Main>
    )
}

export default MobileMain

const Main = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid yellowgreen; */
    height: 100vh;
`;

const Div = styled.div`
    /* border: 1px solid red */
`;

