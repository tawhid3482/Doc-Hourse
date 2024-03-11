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
        campus: data.campus,
        courseId: data.courseId,
        credit: data.credit,
        dateRange: data.dateRange,
        department: data.department,
        description1: data.description1,
        description2: data.description2,
        description3: data.description3,
        fee: parseFloat(data.fee),
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
      if(courseRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your course has been added",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div>
      <div className="text-center my-4">
        <SectionTitle title={"Add Doctors"}></SectionTitle>
      </div>

    </div>
  );
};

export default AddDoc;
