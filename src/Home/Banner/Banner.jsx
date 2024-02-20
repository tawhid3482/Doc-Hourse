import logo from '../../assets/Banner/Rectangle.png';
import doc from '../../assets/Banner/doc.png'

const Banner = () => {
  return (
    <div className=''>
     <div  className="relative ">
        <img src={logo} className='h-[480px] md:h-screen w-full' alt="" />
       <div className="absolute -mt-[460px]  md:-mt-[400px] lg:-mt-[600px] p-5">
       <div className="flex-col md:flex-row md:flex md:justify-between md:items-center ">
        <div className=" ">
            <h1 className='text-base md:text-4xl lg:text-7xl font-bold text-white'>Your Best Medical Help Center</h1>
            <p className='text-white my-4 md:my-8 text-xs '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque repellendus eligendi  <br /></p>
            <button className='btn btn-sm md:btn-md btn-warning'>All Services</button>
        </div>
        <div className="">
            <img src={doc} alt="" />
        </div>
        </div>
       </div>
     </div>
    </div>
  );
};

export default Banner;
