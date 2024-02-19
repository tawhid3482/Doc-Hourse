import Banner from "./Banner/Banner";
import Contacts from "./Contacts/Contacts";
import Feedback from "./Feedback/Feedback";
import Service from "./Service/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Contacts></Contacts>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;