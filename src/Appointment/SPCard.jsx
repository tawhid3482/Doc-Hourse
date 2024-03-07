import { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Axios/UseAxiosPublic";
import Swal from "sweetalert2";

const SPCard = ({ service }) => {
  // console.log(service);
  const AxiosPublic = UseAxiosPublic()
  const { user } = UseAuth();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#B3D5A4",
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

  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName
    .value;
    const date = form.date.value;
    const time = form.time.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    console.log(date, time, name, phone, email,serviceName);
    const appItem = {
      serviceName,
      date,
      time,
      name,
      phone,
      email
    }
    console.log(appItem)
    const appointment = await AxiosPublic.post('/appointment',appItem)
    if(appointment.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }

  };
  

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
          <h2 className="card-title" >{service.name}</h2>
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
                <form onSubmit={handleSubmit} className="card-body">
                
                  <div className="form-control">
                    <input
                      type="text"
                      name="serviceName"
                      placeholder="date"
                      defaultValue={service.name}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="date"
                      placeholder="date"
                      defaultValue={currentDate}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="time"
                      placeholder="Time"
                      defaultValue={service.time}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <input
                      type="submit"
                      className="btn btn-error text-white uppercase"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPCard;
