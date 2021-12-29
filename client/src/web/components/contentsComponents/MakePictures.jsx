import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MakePictures() {
    /*
        서버에서 S3로 이미지파일을 업로드하는 웹페이지를 html코드로 보내줄 것이다
        이 컴포넌트에서는 그걸 ajax로 rest api get요청 사용해서 받고 뿌려주면 됨 
    */

    // const [forRendering, setForRendering] = useState(<></>);

    const [selectedFile, setSelectedFile] = useState(null);

    // onChange역할
    const handleFileChange = (event) => {
        console.log('handleFileChange => event.target : ', event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    };
    const handleFileUpload = () => {
        const formData = new FormData();
     
        formData.append("userfile", selectedFile, selectedFile.name);

        console.log('formData : ', Object.keys(formData).length === 0);

        axios.post("http://localhost:3001/uploadfile", { formData }) // 여기서 {} 객체로 감싸면 req.body로 받을 수 있다.
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

        return;
    }

    useEffect(() => {
        // axios.get('http://localhost:3001/awssdk')
        // .then((response)=>{
        //     // console.log('response : ', response);
        //     setForRendering(response.data);
        // })
        // .catch((error) => {
        //     console.log(error);
        //     setForRendering(<h1>error</h1>);
        // })
    }, [])

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>업로드!</button>
        </div>
    )
}

export default MakePictures
