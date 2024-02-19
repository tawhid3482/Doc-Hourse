import doc from "../../assets/services/doc.png";
import dat from "../../assets/services/dat.png";
const Service = () => {
  return (
    <div>
      <div className="flex-col md:flex-row md:flex md:justify-between md:items-center p-5">
        <div className="md:w-1/2">
          <img src={doc} className="" alt="" />
        </div>
        <div className="md:w-1/2  p-3" >
          <div className="">
            <p className="text-5xl font-bold">Our Services</p>
            <h1 className="my-2 text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </h1>
            <div className="flex-col lg:flex-row  my-8 gap-5">
              <button className="btn bg-red-300 text-black">
                Cavity Protection
              </button>
              <button className="btn bg-red-300 my-2 mx-2 lg:my-0 text-black">
                Cosmetic Dentisty
              </button>
              <button className="btn bg-red-300 text-black">
                Oral Surgery
              </button>
            </div>
          </div>
          <div className="">
            <img src={dat} className="" alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold my-8">Electro Gastrology Therapy</h1>
            <p className="text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error{" "}
            </p>
            <p className="text-lg my-4">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.{" "}
            </p>
            <button className="btn btn-outline btn-warning">More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
