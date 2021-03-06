import React, { useState, useEffect } from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

import Introduction from './contentsComponents/Introduction';
import Gallery from './contentsComponents/Gallery';
import Notice from './contentsComponents/Notice';
import Question from './contentsComponents/Question';
import Waytocome from './contentsComponents/Waytocome';

import styled from 'styled-components';

import { useSelector } from 'react-redux';

function checkMenu(str){
    switch(str){
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

function DesktopMain() {

    // 갤러리랑 공지사항에 많은 ajax나 axios요청을 할텐데 라우팅을 따로 해야될 듯함 by react-router-dom

    const [content, setContent] = useState(<Contents />);

    const selected = useSelector((state) => {
        return state.reducerMenu.selected;
    });

    useEffect(()=>{
        setContent(checkMenu(selected));
    }, [selected]);
    

    return (
        <Main>
            <Div style={{ flex: 0.2 }}><Header/></Div>
            <Div style={{ flex: 0.6 }} >{content}</Div>
            <Div style={{ flex: 0.2 }}><Footer /></Div>
        </Main>
    )
}

export default DesktopMain;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid yellowgreen; */
    height: 100vh;
`;

const Div = styled.div`
    /* border: 1px solid red; */
`