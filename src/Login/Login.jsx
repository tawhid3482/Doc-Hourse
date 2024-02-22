// import { useForm, SubmitHandler } from "react-hook-form"
import back from '../assets/login/back.png'
import login from '../assets/login/login.png'
import { Link } from "react-router-dom";

const Login = () => {
  // const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm()
  //   const onSubmit = (data) => console.log(data)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <img src={back} className='h-[420px] w-[680px] ' alt="" />
            <div className=" -mt-96  lg:ml-20">
                <img src={login} className='w-96 h-96 p-10' alt="" />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center p-5">
                <p>If you are a new Patients <br />
                Please <Link to='/singUp'> <span className='text-yellow-500 '>Sing Up</span></Link>
                 </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
