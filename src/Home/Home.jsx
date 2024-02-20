import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;