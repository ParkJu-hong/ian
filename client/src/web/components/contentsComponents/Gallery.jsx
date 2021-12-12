import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dummyPictures from '../../../dummyDate';

function Gallery() {

    const [forRenderingOne, setForRenderingOne] = useState(<div></div>);
    const [forRenderingTwo, setForRenderingTwo] = useState(<div></div>);
    const [forRenderingThree, setForRenderingThree] = useState(<div></div>);
    const [forRenderingFour, setForRenderingFour] = useState(<div></div>);
    const [pageCount, setPageCount] = useState(<div>1</div>);

    // 애초에 4개씩 받아서 뿌릴 것

    function forFourMultiplyFour(_pictures) {

        if (_pictures.length === 0) {
            return '';
        }

        return <div
            style={{ display: 'flex', justifyContent: 'center' }}>{_pictures.map((el) => {
                return <div style={{ margin: '5px' }}>
                    <Img key={el.id} src={el.src} alt="picture"></Img>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>{el.title}</div>
                        <div>생성일자</div>
                    </div>
                </div>;
            })}</div>;
    }

    function makeHowManyPage(count) {

        let temp = ['안녕하세요', '안녕하세요', '안녕하세요', '안녕하세요'];

        return <div>{
        ()=>{
            for(let i = 0; i < temp.length; i++){
            <div>{temp[i]}</div>
        }
        }    
        }</div>;

        return <div 
        className="makeHowManyPage"
        style={{ display: 'flex', justifyContent: 'center' }}>
            {() => {
                for (let i = 1; i <= count; i++) {
                    return <div>{i}</div>
                }
            }}
        </div>;;
    }

    useEffect(() => {
        // 서버에서 줄때 무조건 객체 16개가 든 배열이 응답해와야 정상작동되는 코드다..
        setPageCount(makeHowManyPage(5))

        setForRenderingOne(forFourMultiplyFour(dummyPictures.pictures.slice(0, 4)));
        setForRenderingTwo(forFourMultiplyFour(dummyPictures.pictures.slice(4, 8)));
        setForRenderingThree(forFourMultiplyFour(dummyPictures.pictures.slice(8, 12)));
        setForRenderingFour(forFourMultiplyFour(dummyPictures.pictures.slice(12)));

    }, []);

    return (
            <div>
                {/* {forRenderingOne}
                {forRenderingTwo}
                {forRenderingThree}
                {forRenderingFour} */}
                {pageCount}
            </div>
    )
}

export default Gallery

const Img = styled.img`
    width: 15vw;
    height: 20vh;
`
