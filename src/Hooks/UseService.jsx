
import UseAxiosPublic from "../Axios/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UseService = () => {
    const axiosPublic = UseAxiosPublic()
    const {data,refetch} = useQuery({
        queryKey:['department'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/service')
            return res.data
        }
    })
    return [data,refetch]
    
};


export default UseService;