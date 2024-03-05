import { useLoaderData } from "react-router-dom";

const ServiceProducts = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.length === 0 ? (
          <div className="">
            <h1 className="text-4xl font-bold text-center flex justify-center items-center">
              There are no products in this brand
            </h1>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default ServiceProducts;
