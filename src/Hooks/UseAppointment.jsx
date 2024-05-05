import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseAppointment = () => {
    const axiosSecure = UseAxiosSecure()
    const { user } = UseAuth();
    const { refetch, data } = useQuery({
      queryKey: ["appointment", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/appointment?email=${user?.email}`);
        return res.data;
      },
    });
    return [data, refetch];
};

export default UseAppointment;