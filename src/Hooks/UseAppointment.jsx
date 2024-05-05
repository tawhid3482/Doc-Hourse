import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";

const UseAppointment = () => {
    const axiosSecure = UseAxiosSecure()
    const {data,refetch} = useQuery({
        queryKey:['appointment'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/appointment')
            return res.data
        }
    })
    return [data,refetch]
};

export default UseAppointment;