import {  } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";

const Dashboard = () => {
    const isAdmin = UseAdmin()
  const isModerator = false;
  // console.log(isAdmin)
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
                    Admin Home
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/addService">
                   Add Service
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/manageService">
                   
                    Manage Service
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/allUsers">
                  All Users
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/addDoc">
                      Add Doctors
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/manageDoc"> 
                    Manage Doctors
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/AddServicePro">
                   Add Service Products
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/manageServicePro">
                   
                    Manage Service Product
                  </NavLink>
                </li>
              </>
            )}
                {/* for moderator */}
            {isModerator && (
              <>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/allPatients">
                     All 
                    Patients
                  </NavLink>
                </li>
              </>
            )}

            {!isAdmin && !isModerator && (
              <>
                {/* Panel for User */}
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/userHome">
                  Patients Home
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/myAppointment">
                     My Appointment
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/myReviews">
                   
                    My Reviews
                  </NavLink>
                </li>
                <li className=" mb-2 uppercase">
                  <NavLink to="/dashboard/myHistory">
                    My History
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
              <NavLink to="/appointment">
                 appointment
              </NavLink>
            </li>
            <li className=" mb-2 uppercase">
              <NavLink to="/contact">
                contact
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