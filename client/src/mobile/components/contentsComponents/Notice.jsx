import React, { useState, useEffect } from 'react'
import dummyData from '../../../dummyDate/index';

function Notice() {

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
            <h3 className="area_tit" style={{ marginLeft: '10vw' }}>이안환경 서비스 <br></br>공지사항</h3>
            <hr></hr>
            <section >
                {notices}
            </section>
        </div>
    )
}

export default Notice
