import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyHistory = () => {
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
