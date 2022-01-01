import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';

function ManagerMain() {
    // 리덕스로 로그인되면 다른 컴포넌트로 렌더링하자

    const dispatch = useDispatch();
    const ismanagerLogin = useSelector((state) => {
        return state.reducerMenu.ismanagerLogin;
    });

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
                } else {
                    console.log('실패함')
                }
            }).catch(e => console.log('oAuth token expired'));
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
