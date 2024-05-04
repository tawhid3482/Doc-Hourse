import { useQuery } from "@tanstack/react-query";
// import UseAxiosPublic from "../Axios/UseAxiosPublic";
import UseAxiosSecure from "../Axios/UseAxiosSecure";

const UseAllUser = () => {
  // const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure()
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [data, refetch];
};

export default UseAllUser;
