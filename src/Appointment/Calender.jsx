import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const ValuePiece = Date | null;

const Value = ValuePiece ;
const Calender = () => {
  const [value, onChange] = useState < Value > new Date();

  return (
    <div>
      <div className="">
        <div className="">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Calender;
