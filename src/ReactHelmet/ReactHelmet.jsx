import { Helmet } from "react-helmet-async";

const ReactHelmet = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default ReactHelmet;
