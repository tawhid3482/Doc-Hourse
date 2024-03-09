import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
const UseAxiosSecure = () => {
    const navigate = useNavigate()
   const {logoutUser}=AuthHook()
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token')
      // console.log('saikat',token)
      config.headers.authorization = `Bearer ${token}`
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(function (response) {
   
   return response;
 }, async (error)=> {
   const status = error.response.status
   console.log('error status',status)
   if( status === 401 || status === 403){
     await logoutUser()
      navigate('/login')
   }
   return Promise.reject(error);
 });

  return axiosSecure;
};

export default UseAxiosSecure;