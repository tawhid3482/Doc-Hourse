import Swal from "sweetalert2";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
// import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdOutlineLibraryAdd } from "react-icons/md";
import UseAuth from "../../Hooks/UseAuth";

const MyReviews = () => {
  const { user } = UseAuth();
  console.log(user)
  const { register, handleSubmit } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const axiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    // 1st img host
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const feedBackItem = {
        name: data.name,
        title: data.title,
        description:data.description,
        image: res.data.data.display_url,
      };
      const feed = await axiosPublic.post("/feedback", feedBackItem);
      // console.log(feed.data);
      if (feed.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your course has been added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <div className="text-center my-4">
        <SectionTitle title={"Add Service"}></SectionTitle>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex justify-around items-center gap-5">
            <label className="form-control w-full my-2">
              <div className="label">
                <span className="label-text">Your Name*</span>
              </div>
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-2">
              <div className="label">
                <span className="label-text">Your Title*</span>
              </div>
              <input
                {...register("title")}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Write Your FeedBack*</span>
            </div>
            <textarea
              {...register("description")}
              type="text"
              placeholder="Your FeedBack"
              className="input input-bordered w-full"
            />
          </label>

          <div className="form-control w-full">
            <label className=" ">
              <div className="label">
                <span className="label-text">Your Image*</span>
              </div>

              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full "
              />
            </label>
          </div>

          <div className="my-5 text-center">
            <button className="btn btn-secondary uppercase">
              Add FeedBack <MdOutlineLibraryAdd className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyReviews;
