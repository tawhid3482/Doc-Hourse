import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";

const UseSRProducts = () => {
     const axiosPublic = UseAxiosPublic()
    const {data,refetch} = useQuery({
        queryKey:['srProducts'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/srProducts')
            return res.data
        }
    })
    return [data,refetch]
};

export default UseSRProducts;