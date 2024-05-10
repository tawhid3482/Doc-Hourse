import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAppointment from "../../Hooks/UseAppointment";

const MyHistory = () => {
  const data = UseAppointment()
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>Doc-House | Patient History</title>
      </Helmet>
      <div className="mt-3">
        <SectionTitle title={'Your History'}></SectionTitle>
      </div>

      <div className="">
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
    </div>
  );
};

export default MyHistory;
