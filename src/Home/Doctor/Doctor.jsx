import UseDoc from "../../Hooks/UseDoc/UseDoc";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import DoctorsCard from "./DoctorsCard";

const Doctor = () => {
  const [doc] = UseDoc();
  console.log(doc)
  return (
    <div>
      <div className="">
        <SectionTitle title={"Our Expert Doctors"}></SectionTitle>
        <p className="text-center text-base md:w-4/5 lg:w-10/12 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ml-4 my-8 md:gap-4 lg:gap-0 md:ml-0">
        {doc?.map((doctor) => (
          <DoctorsCard key={doctor?.id} doctor={doctor}></DoctorsCard>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
