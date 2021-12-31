import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div style={{ 
            textAlign: 'center',
            marginTop: '30px',
            fontSize: '14px',
            padding: '10px',
            backgroundColor: '#708090'
            }}>
            경기도 남양주시 화로읍 경춘로 달뫼2길 10
            <br></br>
            사업자등록번호  659-54-00668
            <br></br>
            Copyright@2021 이안환경 All Rights Reserved
            <div><Link to="/manager"><button onClick={()=>{
                
            }}>관리자</button></Link></div>
        </div>
    )
}

export default Footer
