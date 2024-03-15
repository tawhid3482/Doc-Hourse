import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseSRProducts from "../../Hooks/UseSRProducts";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr"


const ManagePro = () => {
  const [data, refetch] = UseSRProducts();
  const axiosSecure = UseAxiosSecure();
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
        axiosSecure.delete(`/service/${id}`).then((res) => {
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
        <SectionTitle title={"Manage Service Product"}></SectionTitle>
      </div>
      <div className="">
        <p className="text-2xl font-semibold">
          Total Services: {data?.length}
        </p>
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg">
              <tr>
                <th>No.</th>
                <th>Service Name</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((services, index) => (
                <tr key={data?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={services.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{services.name}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <Link to={`/dashboard/update/${services._id}`}>
                      <button className="btn ">
                        <GrUpdate className="text-xl text-purple-600"></GrUpdate>
                      </button>
                    </Link>
                  </td>

                  <th>
                    <button
                      onClick={() => handleDelete(services._id)}
                      className="btn"
                    >
                      <FaTrash className="text-xl text-pink-600"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePro;
