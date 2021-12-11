import React from 'react'

function Introduction() {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                src="/image/ian_images/ian_introduction.jpg"
                alt="introduction"
                style={{}}
            ></img>
            <div style={{
                padding: '10px',
                backgroundColor: '#D3D3D3',
                marginRight: '5vw',
                marginLeft: '5vw'
            }}>-회사소개-</div>
            <section style={{
                padding: '10px',
                textAlign: 'left',
                marginRight: '4vw',
                marginLeft: '4vw'
            }}>
                <div>업체명 : 이안환경</div>
                <div>전화번호 : 031-559-0444</div>
                <div>핸드폰번호 : 010-7755-0489</div>
                <div>FAX : 031-591-0405</div>
            </section>
        </div>
    )
}

export default Introduction
