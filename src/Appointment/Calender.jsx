import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [value, onChange] = useState(new Date()) ;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Calender;
