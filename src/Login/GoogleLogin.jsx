import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Axios/UseAxiosPublic";

const GoogleLogin = () => {
    const {googleLogin}=UseAuth()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    const handleGoogle = ()=>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
            navigate('/')
            const userInfo ={
                email:res.user?.email,
                name:res.user?.displayName,
                photo:res.user?.photoURL,
                
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className="">
                <button onClick={handleGoogle} className="btn w-48 text-xl">
                    <FaGoogle className="text-2xl text-yellow-500"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;