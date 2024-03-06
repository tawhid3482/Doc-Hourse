import { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";

const SPCard = ({ service }) => {
  // console.log(service);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: '#B3D5A4'
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "green";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="card w-full md:w-80 lg:w-96  bg-base-100 shadow-xl">
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
            <button className="btn btn-error btn-outline" onClick={openModal}>
              Book Appointment
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              
            > 
              <div className=" w-[420px] rounded-2xl ">
              <div className="flex justify-between items-center">
                <h2
                  className="text-2xl font-bold text-green-600"
                  ref={(_subtitle) => (subtitle = _subtitle)}
                >
                  {service.name}
                </h2>
                <button
                  className="btn btn-sm rounded-full btn-success text-white uppercase"
                  onClick={closeModal}
                >
                  <RxCross2 className="text-xl "></RxCross2>
                </button>
              </div>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              </div>
            </Modal>
            {/* <button onClick={handleClick} className="btn btn-error btn-outline">
                Book Appointment
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPCard;
