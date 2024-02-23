import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import back from "../assets/login/back.png";
import login from "../assets/login/login.png";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    signInUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <img src={back} className="h-[420px] w-[680px] " alt="" />
            <div className=" -mt-96  lg:ml-20">
              <img src={login} className="w-96 h-96 p-10" alt="" />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <p className="text-2xl font-bold text-center">
                Sign in to Doc House
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email",{required:true})}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password",{required:true})}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">password field is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center p-5">
              <p>
                If you are a new Patients <br />
                Please{" "}
                <Link to="/singUp">
                  {" "}
                  <span className="text-yellow-500 ">Sing Up</span>
                </Link>
              </p>
            </div>
            <div className="divider divider-warning w-2/3 mx-auto">OR</div>

            <div className="text-center my-3">
              <div className=" flex justify-center items-center gap-4">
                <button className="btn btn-warning">
                  <FaGoogle className="text-3xl text-green-600"></FaGoogle>
                  <p className="text-xl font-bold text-white">Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
