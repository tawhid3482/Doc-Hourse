import background from "../../assets/Banner/Rectangle.png";
import { FiPhoneOutgoing } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import { useState } from "react";
// import { useState } from "react";
const serviceId = import.meta.env.VITE_SERVICEID;
const templateId = import.meta.env.VITE_TEMPLATEID;
const publicKey = import.meta.env.VITE_PUBLICKEY;

const Email = () => {
  // const form = useRef();

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const [doctor,setDoctor]=useState()
  const [date,setDate]=useState()
  const [time,setTime]=useState()
  const [message,setMessage]=useState()

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
     form_name: name,
     form_email: email,
     form_phone: phone,
     form_doctor:doctor,
     form_date:date,
     form_time: time,
      to_name: "Tawhidul Islam",
      message: message,
    };
    console.log(templateParams);
    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          // if (result.text === 'OK') {
          //   form.current.reset();
          // }
          setName('')
          setEmail('')
          setPhone('')
          setDoctor('')
          setDate('')
          setTime
          setMessage('')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="relative">
        <img
          src={background}
          className="w-full h-[900px] md:h-[550px]"
          alt=""
        />
        <div className="absolute -mt-[880px] md:-mt-[540px] lg:-mt-[550px] text-white p-10">
          <div className="flex-col md:flex-row md:flex md:justify-between  gap-8">
            <div className=" md:w-1/3">
              <p className="text-4xl my-3 font-bold text-white">
                Contact With Us
              </p>
              <h2>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi.
              </h2>
              <div className="my-8 flex gap-3 items-center">
                <FiPhoneOutgoing className="text-3xl"></FiPhoneOutgoing>
                <p className="text-lg">+88 01750 14 14 14</p>
              </div>
              <div className=" flex gap-3 items-center">
                <CiLocationOn className="text-3xl"></CiLocationOn>
                <p className="text-lg">Dhanmondi, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="md:w-2/3 my-5 md:my-0">
              <form className="" onSubmit={sendEmail}>
                <div className="text-white flex justify-around items-center gap-3">
                  <input
                    placeholder="Your Name"
                    className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <input
                    placeholder="Your Email"
                    className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div className="flex justify-around items-center gap-3">
                  <input
                    placeholder="Phone Number"
                    className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                    type="text"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <input
                    placeholder="Doctor Name "
                    className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                    type="text"
                    value={doctor}
                    onChange={(e)=>setDoctor(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div className="flex justify-around items-center gap-3">
                  <input
                    placeholder="Date"
                    className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                    type="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                  />
                  <input
                    placeholder="Time"
                    className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                    type="time"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <textarea
                  placeholder="Your Message"
                  className=" bg-transparent border-yellow-600 border rounded-3xl p-8 w-full text-white"
                  value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <div className="text-center mt-3">
                  <input
                    className="btn rounded-3xl bg-transparent uppercase text-white border border-yellow-600"
                    type="submit"
                    value="send message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
