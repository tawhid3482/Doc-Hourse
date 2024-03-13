import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa6";

const AllUser = () => {
  const axiosSecure = UseAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="text-center my-4">
        <SectionTitle title={"All Users"}></SectionTitle>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-bold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn bg-purple-600 "
                    >
                      <FaUsers className="text-2xl text-white"></FaUsers>
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="btn "
                  >
                    <FaTrash className="text-2xl text-red-600"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
