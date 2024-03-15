import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";

const UseDoc = () => {
    const axiosPublic = UseAxiosPublic()
    const {data,refetch} = useQuery({
        queryKey:['doctors'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/doctors')
            return res.data
        }
    })
    return [data,refetch]
};

export default UseDoc;