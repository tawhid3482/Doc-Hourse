import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";

const UseDoc = () => {
    const axiosPublic = UseAxiosPublic()
    const {doc,refetch} = useQuery({
        queryKey:['department'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/service')
            return res.data
        }
    })
    return [doc,refetch]
};

export default UseDoc;