import { FaBook, FaHouseMedical, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = false
  const isModerator = false;
    return (
        <div>
            <div className="w-full h-16 bg-green-800 flex items-center text-white p-5">
                <p className="text-lg font-bold ">Doc House</p>
            </div>
        <div className="md:flex md:gap-5">
        <div className="md:w-64 h-full md:h-screen ">
          <ul className="menu p-5">
            {/* admin panel */}
            {isAdmin && (
              <>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/AdminHome">
                    <FaHouseMedical className="text-xl mr-2"></FaHouseMedical> Admin Home
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/addCourse">
                    <FaBook className="text-xl mr-2"></FaBook> Add course
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/manageCourse">
                   
                    Manage course
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/allStudents">
                    <FaUsers className="text-xl mr-2"></FaUsers> All Students
                  </NavLink>
                </li>
              </>
            )}
                {/* for moderator */}
            {isModerator && (
              <>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/allUser">
                    <FaUsers className="text-xl mr-2"></FaUsers> All Students
                  </NavLink>
                </li>
              </>
            )}

            {!isAdmin && !isModerator && (
              <>
                {/* Panel for User */}
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/studentHome">
                    Student Home
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/myCourse">
                    <FaBook className="text-xl mr-2 "></FaBook> My Course
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/cart">
                   
                    My Cart{" "}
                    <span className="text-yellow-500 text-lg">
                    
                    </span>
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/paymentHistory">
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider ">OR</div>

            {/* Common navigation items for all roles */}
            <li className=" mb-2 uppercase">
              <NavLink to="/">
                 Home
              </NavLink>
            </li>
            <li className=" mb-2 uppercase">
              <NavLink to="/page">
                 Page
              </NavLink>
            </li>
            <li className=" mb-2 uppercase">
              <NavLink to="/course">
                Course
              </NavLink>
            </li>
            <li className=" mb-2 uppercase">
              <NavLink to="/athletics">
              
                Athletics
              </NavLink>
            </li>
            <li className=" mb-2 uppercase">
              <NavLink to="/university">
               
                University Life
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;