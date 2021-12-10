import React from 'react'
import styled from 'styled-components';


function Header() {
    return (
        <div>
            <Img src="/image/ian_images/logo.jpeg"alt="logo" ></Img>
        </div>
    )
}

export default Header

const Img = styled.img`
    width: 100vw;    
`
