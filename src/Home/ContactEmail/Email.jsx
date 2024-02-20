import background from "../../assets/Banner/Rectangle.png";
import { FiPhoneOutgoing } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";


const Email = () => {
  return (
    <div>
      <div className="relative">
        <img src={background} alt="" />
        <div className="absolute lg:-mt-[550px] text-white p-10">
        <div className="flex-col md:flex-row md:flex md:justify-between md:items-center">
          <div className=" md:w-1/3">
            <p className="text-4xl my-3 font-bold text-white">Contact With Us</p>
            <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</h2>
            <div className="my-8 flex gap-3 items-center">
                <FiPhoneOutgoing className="text-3xl"></FiPhoneOutgoing>
                <p className="text-lg">+88 01750 14 14 14</p>
            </div>
            <div className=" flex gap-3 items-center">
                <CiLocationOn className="text-3xl"></CiLocationOn>
                <p className="text-lg">Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="md:w-2/3"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
