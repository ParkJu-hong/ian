import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function Menubar() {
    const dispatch = useDispatch();
    return (
        <div 
        style={{
             backgroundColor: 'white',
             position: 'fixed',
             height: '100vh',
             width: '30vw',
             fontSize: '30px',
             top: 100
        }}>
            <Menu 
            onClick={()=>{
                dispatch({
                    type: 'CHANGE_MENU',
                    payload: {
                        selected: 'Introduction'
                    }
                })
            }}>업체소개</Menu>
            <Menu
            onClick={()=>{
                dispatch({
                    type: 'CHANGE_MENU',
                    payload: {
                        selected: 'Gallery'
                    }
                })
            }}
            >갤러리</Menu>
            <Menu
            onClick={()=>{
                dispatch({
                    type: 'CHANGE_MENU',
                    payload: {
                        selected: 'Notice'
                    }
                })
            }}
            >공지사항</Menu>
            <Menu
            onClick={()=>{
                dispatch({
                    type: 'CHANGE_MENU',
                    payload: {
                        selected: 'Question'
                    }
                })
            }}
            >온라인문의</Menu>
            <Menu
            onClick={()=>{
                dispatch({
                    type: 'CHANGE_MENU',
                    payload: {
                        selected: 'Waytocome'
                    }
                })
            }}
            >오시는길</Menu>
        </div>
    )
}

export default Menubar

const Menu = styled.div`
    margin: 40px;
`;
