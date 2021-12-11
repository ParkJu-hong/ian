import React from 'react'

function Contents() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
                src="/image/ian_images/mainImage.jpg"
                alt="mainImage"
                style={{}}
            ></img>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                    src="/image/ian_images/naver.jpeg"
                    alt="naver"
                    style={{ flex: 0.5 }}
                ></img>
                <img
                    src="/image/ian_images/customer.jpeg"
                    alt="customer"
                    style={{ flex: 0.3 }}
                ></img>
            </div>
        </div>
    )
}

export default Contents
