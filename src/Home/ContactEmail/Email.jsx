import background from "../../assets/Banner/Rectangle.png";
import { FiPhoneOutgoing } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const Email = () => {
    // const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_sv7i17n",
          "template_nf7vqxk",
          form.current,
          "Q3TAuECGDlUuLdAnW"
        )
        .then(
          (result) => {
              console.log(result.text);
              if (result.text === 'OK') {
                form.current.reset(); 
              }
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <div>
      <div className="relative">
        <img src={background} alt="" />
        <div className="absolute lg:-mt-[550px] text-white p-10">
          <div className="flex-col md:flex-row md:flex md:justify-between md:items-center gap-8">
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
            <div className="md:w-2/3">
            <form  className="" onSubmit={sendEmail}>
            <div className="text-white flex justify-around items-center gap-3">
              <input
                placeholder="Your Name"
                className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                type="text"
                name="from_name"
              />
              <input
                placeholder="Your Email"
                className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                type="email"
                name="from_email"
              />
            </div>
            <br />
            <br />
            <div className="flex justify-around items-center gap-3">
              <input
                placeholder="Your Name"
                className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                type="text"
                name="from_name"
              />
              <input
                placeholder="Your Email"
                className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                type="email"
                name="from_email"
              />
            </div>
            <br />
            <br />
            <div className="flex justify-around items-center gap-3">
              <input
                placeholder="Date"
                className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                type="text"
                name="from_date"
              />
              <input
                placeholder="Time"
                className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                type="email"
                name="from_time"
              />
            </div>
            <br />
            <br />
            <textarea
              placeholder="Your Message"
              className=" bg-transparent border-yellow-600 border rounded-3xl p-8 w-full text-white"
              name="message"
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
