import { Link } from "react-router-dom";
import logo from "../../assets/images/Screenshot_2024-02-17_192626-removebg-preview.png";
import UseAuth from "../../Hooks/UseAuth";
const Navber = () => {
  const { user, logoutUser } = UseAuth();

  console.log(user?.displayName)
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Appointment</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="">
            <img src={logo} className="h-16" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
            <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="">
                      {
                        user?.displayName
                      }
                    </a>
                  </li>
                  <li>
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <a onClick={logoutUser} >Logout</a>
                  </li>
                </ul>
              </div>
             
            </>
          ) : (
            <>
             
             <Link to="/login">
                <button className="btn uppercase">login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
