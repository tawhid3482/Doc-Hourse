const DocDetailsShow = ({ doc }) => {
  // console.log(doc)
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-5 mx-auto w-4/5">
        <figure>
          <img
            src={doc.img}
            alt="doc"
          />
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
    </div>
  );
};

export default DocDetailsShow;
