import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";


const Contacts = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 flex-col lg:flex-row lg:flex lg:justify-between items-center gap-5 md:p-10 p-5">
        <div className="bg-green-800 p-4  w-80 h-40 text-white ">
          <div className="flex items-center gap-5 mt-5 ml-7">
            <GoClock className="text-white text-3xl"></GoClock>
            <div className="">
              <p className="text-xl font-semibold">Opening Hours</p>
              <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
          </div>
        </div>
        <div className="bg-red-400 p-4  w-80 h-40 text-white ">
          <div className="flex items-center gap-5 mt-5 ml-7">
            <IoLocationOutline className="text-white text-4xl"></IoLocationOutline>
            <div className="">
              <p className="text-xl font-semibold">Our Locations</p>
              <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="bg-green-800 p-4  w-80 h-40 text-white ">
          <div className="flex items-center gap-5 mt-5 ml-7">
            <BsTelephoneOutbound className="text-white text-3xl"></BsTelephoneOutbound>
            <div className="">
              <p className="text-xl font-semibold">Contact Us</p>
              <p>
                +88 01750 00 00 00 <br />
                +88 01750 00 00 00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
