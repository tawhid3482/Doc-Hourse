import { Link } from "react-router-dom";
import logo from "../../assets/images/Screenshot_2024-02-17_192626-removebg-preview.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src={logo} className="" alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Laboriosam quaerat culpa odio consectetur sapiente rem ipsam, <br />{" "}
            reprehenderit at unde sit?
          </p>
          <button className="my-3 btn btn-outline btn-warning">
            Appointment
          </button>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Doctors</a>
          <a className="link link-hover">Online Payment</a>
          <a className="link link-hover">Contact Us</a>
          <Link to='https://protfolio-52046.web.app' className="link link-hover">Developer Info</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Doc House Services</h6>
          <a className="link link-hover">Pediatric Clinic</a>
          <a className="link link-hover">Diagnosis Clinic</a>
          <a className="link link-hover">Cardiac Clinic</a>
          <a className="link link-hover">Laboratory Analysis</a>
          <a className="link link-hover">Gynecological Clinic</a>
          <a className="link link-hover">Dental Clinic</a>
        </nav>
        <nav>
          <h6 className="footer-title">Working Hours</h6>
          <a className="link link-hover">Monday - 10 am to 7 pm</a>
          <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
          <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
          <a className="link link-hover">Thursday - 10 am to 7 pm</a>
          <a className="link link-hover">Sunday - 10 am to 7 pm</a>
        </nav>
        
      </footer>
      <div className="text-center bg-gray-100 p-5">
        Copyright © 2024 - All right reserved by Doc House Ltd
        </div>
    </div>
  );
};

export default Footer;
