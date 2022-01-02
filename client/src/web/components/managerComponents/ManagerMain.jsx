import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';

function ManagerMain() {
    // 리덕스로 로그인되면 다른 컴포넌트로 렌더링하자

    const [temp, setTemp] = useState(false);

    const dispatch = useDispatch();
    const ismanagerLogin = useSelector((state) => {
        return state.reducerMenu.ismanagerLogin;
    });
    const accessToken = useSelector((state)=>{
        return state.reducerMenu.accessToken;
    })
    useEffect(async ()=>{
        // 새로고침해도 그때마다 ajax요청해서 만약 req.header 즉 브라우저의 캐시, 쿠키, 헤더에 토큰이 있다면
        // 관리자페이지를 Authorizaion할 수 있도록 하는 코드
        // await axios.post('')

    }, [])

    async function test(res) {
        await axios.get('https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + res.accessToken, {
            headers: {
                authorization: `token ${res.accessToken}`,
                accept: 'application/json'
            }
        })
            .then(data => {
                const isHeManager = data.data.email === "bejejupark@gmail.com";
                if (isHeManager) {
                    dispatch({
                        type: 'LOGIN_MANAGER'
                    });
                    ajaxForJsonWebToken(res.accessToken);
                } else {
                    console.log('실패함')
                }
            }).catch(e => console.log('oAuth token expired'));
    }
    async function ajaxForJsonWebToken(temp){
        // nodejs로 만든 서버에서 google로 로그인이 됐을시, jsonwebtoken을 발급해줄 수 있도록 함
        // 그래서 새로고침해도 브라우저 쿠키에 토큰 표딱지가 있으면 관리자 페이지가 안꺼질 수 있도록
        await axios.post('http://localhost:3001/login', {
            token: temp
        })
        .then((data)=>{
            console.log('data : ', data);
            console.log('data.data.accessToken : ', data.data.accessToken);
            setTemp(data.data.accessToken);
            dispatch({
                type: 'ACCESS_TOKEN',
                payload: {
                    accessToken: data.data.accessToken
                }
            })
            ajaxForIsAuthorization();
        })
        .catch((error)=>{
            console.log('error : ', error);
        })
    }
    async function ajaxForIsAuthorization(){
        await axios.get('http://localhost:3001/isAuthorization', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
        .then((data)=>{
            console.log('data : ', data);
            console.log('{ message: This is Authorization OK }');
        })
        .catch((error) =>{
            console.log('ajaxForIsAuthorization error : ', error);
        })
    }

    return (
        <div>
            {ismanagerLogin ? <>로그인됌</>: <>
                <GoogleLogin
                clientId={'780867118511-7phr24j325eauivpisavdb062rmi68er.apps.googleusercontent.com'}
                buttonText="Google로 로그인"
                onSuccess={test}
                onFailure={test} />
            </>}
        </div>
    )
}

export default ManagerMain
