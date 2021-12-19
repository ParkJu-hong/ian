import React, { useState, useEffect } from 'react'
import dummyData from '../../../dummyDate/index';

export default function Question() {

    const [notices, setNotices] = useState(<></>);

    useEffect(() => {
        setNotices(forRenderNotices(dummyData.notices));
    }, [])

    function forRenderNotices(_notices) {
        return <>
            {_notices.map((el) => {
                return <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
                    <div>{el.title}</div>
                    <div>{el.birth}</div>
                </div>
            })}
        </>
    }

    return (
        <div>
            <h3 className="area_tit" style={{ marginLeft: '10vw' }}>이안환경 서비스 <br></br>온라인 문의</h3>
            <hr></hr>
            <section >
                {notices}
            </section>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>글쓰기</div>
        </div>
    )
}
