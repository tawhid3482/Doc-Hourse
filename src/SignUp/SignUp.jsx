import { Link } from 'react-router-dom';
import back from '../assets/login/back.png'
import login from '../assets/login/login.png'
import { FaGoogle } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const {
        register,
        handleSubmit,
      
      } = useForm()
      const onSubmit = (data) => console.log(data)
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <p className='text-2xl font-bold text-center'>Sign Up to Doc House</p>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                 {...register("Name")}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                 {...register("photo")}
                  type="text"
                  placeholder="Your Photo "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                 {...register("email")}
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
                  {...register("password")}
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
              <button className="btn btn-warning">Sign Up</button>
              </div>
            </form>
            <div className="text-center p-5">
                <p>If you are an already patients <br />
                Please <Link to='/login'> <span className='text-yellow-500 '>Sing in</span></Link>
                 </p>
            </div>
            <div className="divider divider-warning w-2/3 mx-auto">OR</div>

            <div className="text-center my-3">
                <div className=" flex justify-center items-center gap-4">
                <button className='btn btn-warning'>
                <FaGoogle className='text-3xl text-green-600'></FaGoogle>
                <p className='text-xl font-bold text-white'>Google</p>

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