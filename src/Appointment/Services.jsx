import { Link } from "react-router-dom";
import UseService from "../Hooks/UseService";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Services = () => {
  const [service] = UseService();
//   console.log(service);
  return (
    <div>
      <div className="my-8">
        <SectionTitle title={"Please select a service."}></SectionTitle>
      </div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {service?.map((services) => (
          <div key={services.id}>
            <Link to={`/services/${services.name}`}>
            <div className="bg-gray-100 rounded-xl flex justify-center items-center gap-4 p-5">
                <div className="">
                    <img src={services.img} className="w-32 h-32" alt="" />
                </div>
                <div className="">
                    <p className="text-xl font-bold">{services.name}</p>
                </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
