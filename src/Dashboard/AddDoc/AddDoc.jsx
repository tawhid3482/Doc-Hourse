import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { useForm } from "react-hook-form";

const AddDoc = () => {
  const { register, handleSubmit } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // 1st img host
    const imageFile = { image: data.image[0], Image: data.insImage[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const courseItem = {
        name: data.name,
        title: data.title,
        address: data.address,
        rating: data.rating,
        date: data.date,
        fee: parseFloat(data.fee),
        specialist: data.specialist,
        specialist2: data.specialist2,
        about: data.about,
        image: res.data.data.display_url,
        insImage: data.insImage,
        instructor: data.instructor,
        level: data.level,
        method: data.method,
        scholarship: data.scholarship,
        time: data.time,
        semester: data.semester,
      };
      const courseRes = await axiosSecure.post("/department", courseItem);
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
        <SectionTitle title={"Add Doctors"}></SectionTitle>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Doctor name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Doctor Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Doc Title*</span>
                </div>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Doc Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Address*</span>
                </div>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Rating*</span>
                </div>
                <input
                  {...register("rating")}
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Date*</span>
                </div>
                <input
                  {...register("date")}
                  type="text"
                  placeholder="Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Doctor Fee*</span>
                </div>
                <input
                  {...register("fee")}
                  type="text"
                  placeholder="Doctor Fee"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Specialist</span>
                </div>
                <input
                  {...register("specialist")}
                  type="text"
                  placeholder="Specialist"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Specialist2*</span>
                </div>
                <input
                  {...register("specialist2")}
                  type="text"
                  placeholder="Another Specialist"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">About Doctor</span>
                </div>
                <input
                  {...register("about")}
                  type="text"
                  placeholder="about"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Method*</span>
                </div>
                <select
                  defaultValue="default"
                  className="select select-primary w-full "
                  {...register("method")}
                >
                  <option disabled value="default">
                    Select Your Method
                  </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="both">Online & Offline both</option>
                </select>
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Class Time*</span>
                </div>
                <input
                  {...register("time")}
                  type="text"
                  placeholder="Class Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Date Range*</span>
                </div>
                <input
                  {...register("dateRange")}
                  type="text"
                  placeholder="Date Range"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">About Course Description*</span>
                </div>

                <textarea
                  {...register("description1")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Course Description"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">
                    About Course Finish Description*
                  </span>
                </div>

                <textarea
                  {...register("description2")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Course Finish Description"
                ></textarea>
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">
                    About Course Instructor Description*
                  </span>
                </div>

                <textarea
                  {...register("description3")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Course Instructor Description"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">
                    About Scholarship Description*
                  </span>
                </div>

                <textarea
                  {...register("scholarship")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Scholarship Description"
                ></textarea>
              </label>
            </div>
            <div className=" w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Instructor Image*</span>
                </div>

                <input
                  {...register("insImage")}
                  type="text"
                  placeholder="Instructor Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control w-full">
            <label className=" ">
              <div className="label">
                <span className="label-text">Course Image*</span>
              </div>

              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full "
              />
            </label>
          </div>

          <div className="my-5 text-center">
            <button className="btn btn-secondary uppercase">Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoc;
