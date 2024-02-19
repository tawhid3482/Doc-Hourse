import { useEffect, useState } from "react";

const UseFeedBack = () => {
    const [Feedback,setfeedback]=useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('/feedback.json')
        .then(res =>res.json())
        .then(data => {
            setfeedback(data)
            setLoading(false)
        })
    },[])
    return [Feedback,loading]
};

export default UseFeedBack;