import { useEffect, useState } from "react";

const UseFeedBack = () => {
    const [Feedback,setfeedback]=useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://doc-house-server-two.vercel.app/feedback')
        .then(res =>res.json())
        .then(data => {
            setfeedback(data)
            setLoading(false)
        })
    },[])
    return [Feedback,loading]
};

export default UseFeedBack;