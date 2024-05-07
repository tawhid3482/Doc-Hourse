import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import UseAppointment from "../../Hooks/UseAppointment";
import { FaTrash } from "react-icons/fa6";

const YourAppointment = () => {
  const [data, refetch] = UseAppointment();
  console.log(data)
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
        axiosSecure.delete(`/appointment/${id}`).then((res) => {
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
      

      {data ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg font-bold">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Service</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((appoint, index) => (
                <tr key={appoint._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">{appoint?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{appoint?.serviceName}</td>
                  <td>{appoint?.time}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(appoint?._id)}
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
      ) : (
        <div className=""></div>
      )}
    </div>
  );
};

export default YourAppointment;
