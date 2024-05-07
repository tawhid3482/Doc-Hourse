import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import { useQuery } from "@tanstack/react-query";
// import {
//   FaBusAlt,
//   FaElementor,
//   FaMoneyCheckAlt,
//   FaUsers,
// } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
// import UseAxiosSecure from "../../Axios/UseAxiosSecure";
const AdminHome = () => {

  const { user } = UseAuth()
  // const axiosSecure =UseAxiosSecure()

 

  return (
    <div>
      <Helmet>
        <title>Doc-House | Admin Home</title>
      </Helmet>
      <div className="text-center my-4">
        <SectionTitle title={"Admin Home"}></SectionTitle>
      </div>

      <p className="text-3xl font-semibold my-2">Welcome {user?.displayName}</p>

      <div className="mt-10 grid grid-cols-1 md:flex md:items-start  gap-3 md:gap-10 lg:gap-20">
        <div className="">
          <img src={user?.photoURL} className="w-52 rounded-full" alt="" />
        </div>
        <div className="">
          <h2 className="text-xl font-medium">
            Position: <span className="text-pink-500">Admin</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Full Name: <br />{" "}
            <span className="text-pink-500 ">{user?.displayName}</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Email: <br /> <span className="text-pink-500">{user?.email}</span>
          </h2>
        </div>
        <div className="">
          <Link to='/dashboard/updateProfile'>
            <button className="btn btn-secondary">Update</button>
          </Link>
        </div>
      </div>
      {/* <div className="mt-10">
        <DashboardSectionTitle
          title={"All Information"}
        ></DashboardSectionTitle>
      </div> */}
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 ">
        <div className=" flex gap-8 md:gap-5 lg:gap-10 bg-pink-400 text-white p-3 rounded-xl">
          <div className=" ">
            <FaMoneyCheckAlt className="text-7xl "></FaMoneyCheckAlt>
          </div>
          <div className="">
            <p className="text-4xl font-bold">${status?.revenue}</p>
            <p className="text-2xl font-bold"> Revenue</p>
          </div>
        </div>
        <div className=" flex gap-8 md:gap-5 lg:gap-10 bg-purple-500 text-white p-3 rounded-xl">
          <div className="">
            <FaUsers className="text-6xl "></FaUsers>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{status?.user}</p>
            <p className="text-2xl font-bold">Users</p>
          </div>
        </div>
        <div className=" flex gap-8 md:gap-5 lg:gap-10 bg-yellow-300 text-white p-3 rounded-xl">
          <div className="">
            <FaElementor className="text-6xl "></FaElementor>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{status?.menuItems}</p>
            <p className="text-2xl font-bold">Contests</p>
          </div>
        </div>
        <div className=" flex gap-8 md:gap-5 lg:gap-3 bg-blue-400 text-white p-3 rounded-xl">
          <div className="">
            <FaBusAlt className="text-6xl "></FaBusAlt>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{status?.orderItems}</p>
            <p className="text-2xl font-bold">Registration</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminHome;




