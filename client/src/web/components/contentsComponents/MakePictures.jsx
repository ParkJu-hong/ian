import React, { useState, useEffect } from 'react';
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
// const formidable = require('formidable');


// s3에 이미지파일, 텍스트(문자열)올리고 볼 수 있는 Create, Read 까지 구현해보자.
/*
    npm install aws-sdk --save

    그 후에 notion에 정리한 대로 개발환경을 구축했다.

    npm install formidable@latest --save
*/

function MakePictures() {

    const [s3, setS3] = useState(null);
    // const [clickOrNot, setClickOrNot] = useState(false);
    const [forCleanUp, setForCleanUp] = useState(true);

    useEffect(() => {
        if (forCleanUp) {
            setS3(new AWS.S3());
        }
        return () => {
            setForCleanUp(false);
        }
    }, [])

    return (
        <div>
            <form enctype="multipart/form-data" method="post">
                <input type="file" name="userfile"></input>
                <input type="submit"></input>
            </form>
            {/* <form enctype="multipart/form-data" method="post" name="fileinfo">
                <label>Your email address:</label>
                <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
                <label>Custom file label:</label>
                <input type="text" name="filelabel" size="12" maxlength="32" /><br />
                <label>File to stash:</label>
                <input type="file" name="file" required />
                <input type="submit" value="Stash the file!" />
            </form> */}
            <h1 onClick={() => {
                console.log(s3);
                const params = {
                    Bucket: 'ianenvironment',
                    Key: 'ThisIsTest',
                    ACL: 'public-read',
                    Body: 'test.jpeg'
                }
                s3.upload(params, function (err, data) {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                });
            }}>Click Me !</h1>
        </div>
    )
}

export default MakePictures
