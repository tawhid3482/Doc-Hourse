import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import chair from '../assets/images/chair 1.png'
const Calender = () => {
  const [value, onChange] = useState(new Date()) ;

  return (
    <div className=" p-5 md:p-10 my-10">
      <div className=" flex-col lg:flex-row gap-16 md:flex md:justify-center items-center">
        <div className="">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="my-5 lg:my-0">
          <img src={chair} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Calender;
