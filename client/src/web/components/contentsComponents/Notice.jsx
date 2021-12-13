import React,{useState,useEffect} from 'react'

function Notice() {
    const [temp,setTemp] = useState(false);
    useEffect(()=>{
        setTemp("angry")
    },[])
    return (
        <div>
           <div style={{ display: 'flex', justifyContent: 'center', width: '40vw'}}>
               <p>
                   제목
                </p>
                <p>
                날짜    
                </p></div>
        </div>
    )
}

export default Notice
