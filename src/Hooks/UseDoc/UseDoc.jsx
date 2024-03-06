import { useEffect, useState } from "react";

const UseDoc = () => {
    const [doc, setDoc]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then((res)=> res.json())
        .then(data =>{
            setDoc(data)
            setLoading(false)
            
        })
    },[])
    return [doc,loading]
};

export default UseDoc;