import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {

    const isMenu = useSelector((state) => {
        return state.reducerMenu.isMobileMenu;
    })

    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FontAwesomeIcon
                icon={faBars}
                size="3x"
                style={{ marginTop: '5vh', marginLeft: '2vw' }}
                onClick={() => {
                    if (isMenu) {
                        dispatch({
                            type: 'CLOSE_MOBILE_MENU'
                        })
                    } else {
                        dispatch({
                            type: 'OPEN_MOBILE_MENU'
                        })
                    }
                }}
            ></FontAwesomeIcon>
            <Img
                src="/image/ian_images/logo_mobile.jpeg"
                alt="logo"
                onClick={() => {
                    dispatch({
                        type: 'CHANGE_MENU',
                        payload: {
                            selected: ''
                        }
                    })
                }}
            ></Img>
        </div>
    )
}

export default Header

const Img = styled.img`
    margin-top: 2.5vh;
`
