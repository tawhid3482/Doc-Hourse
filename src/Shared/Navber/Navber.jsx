import { Link } from "react-router-dom";
import logo from "../../assets/images/Screenshot_2024-02-17_192626-removebg-preview.png";
const Navber = () => {
    const navOptions =<>
    <li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Appointment</Link></li>
    </>
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
          <ul className="menu menu-horizontal px-1">
          {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <Link><button className="btn uppercase">login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
