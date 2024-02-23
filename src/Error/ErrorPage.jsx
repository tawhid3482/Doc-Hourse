import { Link } from "react-router-dom";
import error from "../assets/error/error.png";
const ErrorPage = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold">Sorry,</p>
        <h2 className="text-xl my-2">This page is not found</h2>
      </div>
      <div className="flex justify-center">
        <img src={error} alt="" />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-outline btn-error">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
