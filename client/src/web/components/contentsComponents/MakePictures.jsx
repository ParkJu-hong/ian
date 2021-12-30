import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MakePictures() {
    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일


    useEffect(()=>{
        {console.log('imgBase64 : ', imgBase64)}
    }, [imgBase64])

    const handleChangeFile = (event) => {
        setImgFile(event.target.files);
        setImgBase64([]);
        for (let i = 0; i < event.target.files.length; i++) {
            if (event.target.files[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);

                reader.onload = () => {
                    const base64 = reader.result;
                    // console.log('reader.result : ', reader.result);
                    if (base64) {
                        let base64Sub = base64.toString();
                        // console.log('base64.toString(); : ', base64.toString());
                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                    }
                }
            }
        }
    }

    const onImgChange = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        // const response = await axios.post('http://localhost:3001/uploadfile', formData);
        const response = await axios.post('http://localhost:3001/uploadfile', { data: JSON.stringify(formData) });
        console.log('response : ', response);
    }

    const WriteBoard = async() => {
        const fd = new FormData();

        // Object.values(imgFile).forEach((file) => {
        //     console.log('imgFile : ', file);
        //     fd.append("test", 'test')
        // });
        fd.append('file', imgBase64[0])
        console.log('fd',fd);

        // fd.append("comment", "이건 테스트라구요 아셨나요?");

        await axios.post('http://localhost:3001/uploadfile', fd, {
            headers: {
              "Content-Type": `multipart/form-data; `,
            }
          })
        .then((response) => {
            if(response.data){
                console.log('response.data : ', response.data)
            }
        })
        .catch((error) => {
            console.log('error : ', error)
        })

        // const result = await axios({
        //     method: 'POST',
        //     url: 'http://localhost:3001/uploadfile',
        //     // headers: { "Content-Type": `multipart/form-data`},
        //     data: {
        //         test: fd
        //     }
        // })
        // console.log('result : ', result);
    }

    /*
        reader.result 는 파일을 비트맵 데이터를 리턴해준다.

        해당 데이터를 통해서 파일 미리보기가 가능하다.
        비트맵 데이터를 저장 가능하도록 스트링으로 바꾼다.  
        var base64Sub = base64.toString()
        해당 데이터를 imgBase64 스테이트에 저장하는데 파일이 하나가 아니라 배열이므로 배열에 붙여줘야한다.
        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
        
        위와 같이 적으면 기존 imgBase64 배열에 base64Sub 값을 붙인 새로운 배열을 스테이트에 저장한다.
    */

    function zerocho(event){
        console.log(event.target.files);

        const xhr = new XMLHttpRequest();
        const fd = new FormData();

        fd.append('img', event.target.files[0]);

        xhr.onload = function(){
            if(xhr.status === 200 || xhr.status === 201){
                console.log(xhr.responseText);
            }else{
                console.error(xhr.responseText);
            }
        }
        xhr.open('POST', 'http://localhost:3001/uploadfile')
        xhr.send(fd);
    }

    return (
        <div>
            <input type="file" id="file" onChange={zerocho} multiple="multiple" />
            <button 
                onClick={WriteBoard}
                style={{ 
                    border: '2px solid black',
                    width: '700px',
                    fontSize: '40px'    
                }}
            >작성완료</button>
            {/* {imgBase64.map((item) => {
                return (

                    <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                        style={{ width: "100%", height: "550px" }}
                    />

                )
            })} */}
               
                {/* 이렇게 해도 되네.. imgBase64[0]번째가 비트맵을 다 가지고 있나..? 
                    imgBase64 :  ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACsAA…CBAgQIECAAAECBDqwwP8DbEbzzpAKhGgAAAAASUVORK5CYII=']
                    이런식으로 하나만 가지고 있음
                */}
        </div>
    )
}

export default MakePictures
