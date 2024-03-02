import { useState } from "react";
import UseDoc from "../../Hooks/UseDoc/UseDoc";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DocDetailsShow from "./DocDetailsShow";
import ReactHelmet from "../../ReactHelmet/ReactHelmet";

const DocDetails = () => {
  const [Doc] = UseDoc();
  const [doc, SetDoc] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const findDoc = Doc?.find((data) => data.id === id);
    SetDoc(findDoc);
  }, [id, Doc]);
  return (
    <div>
      <ReactHelmet title={"DocHouse - Doctors"}></ReactHelmet>

      {doc ? (
        <DocDetailsShow doc={doc}></DocDetailsShow>
      ) : (
        <div className="text-center">
          <progress className="progress w-56"></progress>
        </div>
      )}
    </div>
  );
};

export default DocDetails;
