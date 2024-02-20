import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../assets/services/img.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import UseFeedBack from "../../Hooks/UseFeedback/UseFeedBack";

import "swiper/css";
import "swiper/css/navigation";

const Feedback = () => {
  const [Feedback] = UseFeedBack();
  // console.log(Feedback);
  return (
    <div className="my-10">
      <div className="">
        <SectionTitle title={"What Our Patients Says"}></SectionTitle>
        <p className="text-center text-base md:w-4/5 lg:w-10/12 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {Feedback?.map((review) => (
            <SwiperSlide key={review?._id}>
             <div className="p-10">
             <div className="flex gap-5 items-center justify-around p-10">
                <div className="flex items-center gap-5">
                <div className="">
                  <img src={review?.img} className="rounded-full w-32 h-32" alt="" />
                </div>
                <div className="">
                  <p className="text-xl font-bold">{review?.name}</p>
                  <p>{review?.title}</p>
                </div>
                </div>
                <div className="">
                <img src={img} className="" alt="" />
              </div>
              </div>
              <div className="">
                <p className="text-center w-10/12 mx-auto">{review?.description}</p>
             </div>
              </div>
           
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
