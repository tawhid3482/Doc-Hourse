import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";

const UseAllUser = () => {
    const axiosPublic = UseAxiosPublic()
    const {data,refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })
    return [data,refetch]
};

export default UseAllUser;