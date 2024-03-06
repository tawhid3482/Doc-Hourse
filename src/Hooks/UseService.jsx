import { useEffect } from "react";
import { useState } from "react";

const UseService = () => {
    const [service, setService]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then((res)=> res.json())
        .then(data =>{
            setService(data)
            setLoading(false)
            
        })
    },[])
    return [service,loading]
};

export default UseService;