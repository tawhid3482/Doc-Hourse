import back from '../assets/Banner/Rectangle.png'
const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img src={back} className='h-96 w-full' alt="" />
            </div>
            <div className=" absolute -mt-60 text-white p-10">
                <p>Home / Appointment</p>
                <p className='text-3xl md:text-5xl font-bold my-5'>Appointment</p>
            </div>
        </div>
    );
};

export default Banner;