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
        // 태그안에 함수로 또 다른 태그를 감싼다음에 forFourMultiplyFour로 한 것처럼 렌더링할 것을 return 했는데
        // 안되서 state을 배열로 만들어서

        let arr = [];

        for (let i = 1; i <= count; i++) {
            arr.push(<div style={{ margin: '10px' }}>{i}</div>)
        }

        return <div
            className="makeHowManyPage"
            style={{ display: 'flex', justifyContent: 'center' }}>
            {arr}
        </div>
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {dummyPictures.pictures.map((el) => {
                return <div style={{ margin: '20px'}}>
                    <img key={el.id} src={el.src} alt="test"
                        style={{ width: '70vw'}}
                    ></img>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70vw'}}>
                    <div>{el.title}</div>
                    <div>생성일자</div>
                    </div>
                </div>
            })}
            {pageCount}
            {/* 
                여기에 페이지 수를 이동하는 코드를 pageCount라는 state와 makeHowManyPage 함수로 렌더링 하려했는데
                이상하게 렌더링이 되지않아 스택오버플로우에 올렸다.
                https://stackoverflow.com/questions/70330427/why-this-function-doesnt-rendering-in-react
            */}
        </div>
    )
}

export default Gallery

const Img = styled.img`
    width: 15vw;
    height: 20vh;
`
