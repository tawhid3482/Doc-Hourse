import ReactHelmet from "../ReactHelmet/ReactHelmet";
import Banner from "./Banner";
import Calender from "./Calender";
import Services from "./Services";

const Appointment = () => {
    return (
        <div>
            <ReactHelmet title={'DocHouse - Appointment'}></ReactHelmet>
            <Banner></Banner>
            <Calender></Calender>
            <Services></Services>
        </div>
    );
};

export default Appointment;