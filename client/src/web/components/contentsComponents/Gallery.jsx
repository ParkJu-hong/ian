import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dummyPictures from '../../../dummyDate';

function Gallery() {
    
    const [forRenderingOne, setForRenderingOne] = useState(<div></div>);
    const [forRenderingTwo, setForRenderingTwo] = useState(<div></div>);
    const [forRenderingThree, setForRenderingThree] = useState(<div></div>);
    const [forRenderingFour, setForRenderingFour] = useState(<div></div>);


    // 애초에 4개씩 받아서 뿌릴 것

    function forFourMultiplyFour(_pictures) {
        if(_pictures.length === 0){
            return '';
        }
        for (let i = 0; i < 3; i++) {
            _pictures.push(dummyPictures.pictures[i]);
        }
        return <div
            style={{ display: 'flex' }}>{_pictures.map((el) => {
                return <div style={{ margin: '5px'}}key={el.id}><Img src={el.src} alt="picture"></Img></div>
            })}</div>;
    }

    useEffect(() => {
        // 서버에서 줄때 무조건 객체 16개가 든 배열이 응답해와야 정상작동되는 코드다..

        console.log('dummyPictures.pictures.slice(0,4) : ', dummyPictures.pictures.slice(0,4));
        console.log('dummyPictures.pictures.slice(4,8) : ', dummyPictures.pictures.slice(4,8));
        console.log('dummyPictures.pictures.slice(8,12) : ', dummyPictures.pictures.slice(8,12));
        console.log('dummyPictures.pictures.slice(12) : ', dummyPictures.pictures.slice(12));

        setForRenderingOne(forFourMultiplyFour(()=>{
            if(dummyPictures.pictures.slice(0,4).length === 0){
                return [];
            }else{
                return dummyPictures.pictures.slice(0,4);
            } 
        }));
        setForRenderingTwo(forFourMultiplyFour(()=>{
            if(dummyPictures.pictures.slice(4,8).length === 0){
                return [];
            }else{
                return dummyPictures.pictures.slice(4,8);
            }   
        }));
        setForRenderingThree(forFourMultiplyFour(()=>{
            if(dummyPictures.pictures.slice(8,12).length === 0){
                return [];
            }else{
                return dummyPictures.pictures.slice(8,12);
            }
        }));
        setForRenderingFour(forFourMultiplyFour(()=>{
            //dummyPictures.pictures.slice(12)
            if(dummyPictures.pictures.slice(12).length === 0){
                return [];
            }else{
                return dummyPictures.pictures.slice(12);
            }
        }));
    }, [])
    return (
        <div style={{ textAlign: 'center'}}>
                {forRenderingOne}
                {forRenderingTwo}
                {forRenderingThree}
                {forRenderingFour}
        </div>
    )
}

export default Gallery

const Img = styled.img`
    width: 20vw;
    height: 20vh;
`

/*
                {dummyPictures.pictures.map((el)=> {
                return <p>
                    <Img key={el.id} src={el.src} alt="test"></Img>
                    <div>{el.title}</div>
                </p>
            })}
*/
