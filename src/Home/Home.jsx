import Banner from "./Banner/Banner";
import Email from "./ContactEmail/Email";
import Contacts from "./Contacts/Contacts";
import Doctor from "./Doctor/Doctor";
import Feedback from "./Feedback/Feedback";
import Service from "./Service/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Contacts></Contacts>
            <Feedback></Feedback>
            <Doctor></Doctor>
            <Email></Email>
        </div>
    );
};

export default Home;