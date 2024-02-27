import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const DoctorsCard = ({ doctor }) => {
  const {id}=doctor
//   console.log(doctor);
  return (
    <div>
      <div className="card border border-green-700 md:border-none w-80 my-3 md:my-0 md:w-[350px] lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={doctor?.img}
            alt="doctor"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="text-xl font-bold">{doctor.name}</h2>
          <p>{doctor?.title}</p>
          <div className="">
            {doctor?.rating}
          </div>
          <div className="flex items-center gap-3">
            <CiLocationOn className="text-2xl "></CiLocationOn>
            <p>{doctor.location}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCalendar className="text-2xl "></FaRegCalendar>
            <p>{doctor?.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <RiMoneyDollarCircleLine className="text-2xl "></RiMoneyDollarCircleLine>
            <p>{doctor?.fee}</p>
          </div>
          <div className="my-2">
            <Link to={`/docDetails/${id}`}> 
            <button className="btn btn-outline w-full btn-warning
            ">View Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
