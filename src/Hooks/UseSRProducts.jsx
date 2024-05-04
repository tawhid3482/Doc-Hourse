import { useQuery } from "@tanstack/react-query";
// import UseAxiosPublic from "../Axios/UseAxiosPublic";
import UseAxiosSecure from "../Axios/UseAxiosSecure";

const UseSRProducts = () => {
     const axiosSecure = UseAxiosSecure()
    const {data,refetch} = useQuery({
        queryKey:['srProducts'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/srProducts')
            return res.data
        }
    })
    return [data,refetch]
};

export default UseSRProducts;