import UseService from "../Hooks/UseService";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Services = () => {
    const [service]=UseService()
    console.log(service)
    return (
        <div>
         <div className="my-8">
         <SectionTitle title={"Please select a service."}></SectionTitle>
         </div>
         <div className="">

         </div>
        </div>
    );
};

export default Services;