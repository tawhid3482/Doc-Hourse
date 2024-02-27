const DocDetailsShow = ({ doc }) => {
  // console.log(doc)
  return (
    <div className="mx-auto w-4/5 ">
      <div className="card card-side bg-base-100 shadow-lg rounded-lg my-5 mx-auto w-4/5">
        <figure>
          <img src={doc.img} alt="doc" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{doc.name}</h2>
          <p>{doc.title}</p>
          <p>{doc.rating}</p>
          <p>{doc.location}</p>
          <div className="card-actions ">
            <button className="btn btn-outline">{doc.specialist}</button>
            <button className="btn btn-outline">{doc.specialist2}</button>
          </div>
        </div>
      </div>
      <div className="my-5">
        <p className="text-2xl font-bold">About Me</p>
        <p> {doc?.about}</p>
      </div>
      <div className="my-5">
        <p className="text-2xl font-bold">Education</p>
        <p> {doc?.education}</p>
      </div>
    </div>
  );
};

export default DocDetailsShow;
