import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";

const UseDoc = () => {
    const axiosSecure = UseAxiosSecure()
    const {data,refetch} = useQuery({
        queryKey:['doctors'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/doctors')
            return res.data
        }
    })
    return [data,refetch]
};

export default UseDoc;