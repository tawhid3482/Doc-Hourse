const SPCard = ({ service }) => {
  console.log(service);


  return (
    <div>
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={service.img}
            alt={service.name}
            className="rounded-xl w-72 h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.time}</p>
          <div className="card-actions">
            <button className="btn btn-error btn-outline">
                Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPCard;
