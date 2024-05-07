import axios from "axios";

const AxiosPublic = axios.create({
    baseURL: 'https://doc-house-server-two.vercel.app'
})
   
const UseAxiosPublic = ()=>{
    return AxiosPublic
}


export default UseAxiosPublic;