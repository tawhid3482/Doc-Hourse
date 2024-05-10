import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAppointment from "../../Hooks/UseAppointment";

const MyHistory = () => {
  const data = UseAppointment()
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>Doc-House | Patient History</title>
      </Helmet>
      <div className="mt-3">
        <SectionTitle title={'Your History'}></SectionTitle>
      </div>
    </div>
  );
};

export default MyHistory;
