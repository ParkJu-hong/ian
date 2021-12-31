import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex' }}>
            <Link to="/">
                <Logo
                    src="/image/ian_images/logo.jpeg"
                    alt="logo"
                    onClick={() => {
                        dispatch({
                            type: 'CHANGE_MENU',
                            payload: {
                                selected: ''
                            }
                        })
                    }}
                ></Logo>
            </Link>
            <Menu src="/image/ian_images/menu_01.jpeg" alt="menu"
                onClick={() => {
                    dispatch({
                        type: 'CHANGE_MENU',
                        payload: {
                            selected: 'Introduction'
                        }
                    })
                }}
            ></Menu>
            <Menu src="/image/ian_images/menu_02.jpeg" alt="menu"
                onClick={() => {
                    dispatch({
                        type: 'CHANGE_MENU',
                        payload: {
                            selected: 'Gallery'
                        }
                    })
                }}
            ></Menu>
            <Menu src="/image/ian_images/menu_03.jpeg" alt="menu"
                onClick={() => {
                    dispatch({
                        type: 'CHANGE_MENU',
                        payload: {
                            selected: 'Notice'
                        }
                    })
                }}
            ></Menu>
            <Menu src="/image/ian_images/menu_04.jpeg" alt="menu"
                onClick={() => {
                    dispatch({
                        type: 'CHANGE_MENU',
                        payload: {
                            selected: 'Question'
                        }
                    })
                }}
            ></Menu>
            <Menu src="/image/ian_images/menu_05.jpeg" alt="menu"
                onClick={() => {
                    dispatch({
                        type: 'CHANGE_MENU',
                        payload: {
                            selected: 'Waytocome'
                        }
                    })
                }}
            ></Menu>
        </div>
    )
}

export default Header

const Logo = styled.img`
    margin-top: 14px;
    flex: 0.3;
    width: 40vw;
    justify-content: center;
`

const Menu = styled.img`
    margin-top: 14px;
    flex: 0.3
`


