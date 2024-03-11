import { Link, useNavigate } from "react-router-dom";
import back from "../assets/login/back.png";
import login from "../assets/login/login.png";
import { FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic()

  const { createUser, updateUserProfile } = UseAuth();

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo).then(() => {
        navigate("/");
        setTimeout(() => {
          window.location.reload();  
      }, 2*1000);
        // console.log(data)
      
        const userInfo = {
            namae: data.name,
            email: data.email,
            photo: data.photo,
          }
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId){
              // console.log('users')

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You are register successfully",
                showConfirmButton: false,
                timer: 1500,
              });
          }else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Something wrong please try later",
              showConfirmButton: false,
              timer: 1500,
            });
          }
         

          });
      });
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
                Sign Up to Doc House
              </p>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  placeholder="Your Photo "
                  className="input input-bordered"
                  
                />
                {errors.photo && (
                  <span className="text-red-500">
                    Photo url field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
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
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600"> Password is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Sign Up</button>
              </div>
            </form>
            <div className="text-center p-5">
              <p>
                If you are an already patients <br />
                Please{" "}
                <Link to="/login">
                  {" "}
                  <span className="text-yellow-500 ">Sing in</span>
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

export default SignUp;
