import React from 'react';
// import styled from 'styled-components';

function Notice() {

    return (
        <div style={{ textAlign: 'center'}}>
           <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: '#708090',
                fontSize: '30px',
                marginRight: '20vw',
                marginLeft: '20vw'
                }}>
            <div >제목</div>
            <div>날짜</div>
           </div>
        </div>
    )
}

export default Notice