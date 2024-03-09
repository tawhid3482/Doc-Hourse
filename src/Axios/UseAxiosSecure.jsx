import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
const UseAxiosSecure = () => {
    return (
        <div>
            <p>axios secure</p>
        </div>
    );
};

export default UseAxiosSecure;