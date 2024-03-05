import { useLoaderData } from "react-router-dom";
import SPCard from "./SPCard";

const ServiceProducts = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.length === 0 ? (
          <div className="">
            <h1 className="text-4xl font-bold text-center flex justify-center items-center">
              There are no services in this sector
            </h1>
          </div>
        ) : (
          <div className="">
            {
                data?.map((service)=><SPCard key={service.id} service={service}></SPCard>)
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProducts;
