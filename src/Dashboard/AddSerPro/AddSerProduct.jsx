import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";

const AddSerProduct = () => {
  const { register, handleSubmit } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure()

  const onSubmit = async (data) => {
    console.log(data);
    // 1st img host
    const imageFile = { image: data.image[0], };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const docItem = {
        name: data.name,
        service:data.service,
        time: data.time,
        image: res.data.data.display_url,
      };
      const courseRes = await axiosSecure.post("/srProducts", docItem);
      console.log(courseRes.data);
      if (courseRes.data.insertedId) {
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
        <SectionTitle title={"Add Service Product"}></SectionTitle>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Service Name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Service Name"
              className="input input-bordered w-full"
            />
          </label>


          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Service*</span>
                </div>
                <input
              {...register("service")}
              type="text"
              placeholder="Under The Service Name"
              className="input input-bordered w-full"
            />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Time*</span>
                </div>
                <input
                  {...register("time")}
                  type="text"
                  placeholder="Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <div className="form-control w-full">
            <label className=" ">
              <div className="label">
                <span className="label-text">Service Image*</span>
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
              Add SR Product 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSerProduct;
