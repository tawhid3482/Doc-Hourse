import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ManageService = () => {
    const [data,refetch] = UseCourse();
  const axiosSecure = UseAxiosSecure()
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/department/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="text-center my-4">
        <SectionTitle title={"Manage Service"}></SectionTitle>
      </div>
    </div>
  );
};

export default ManageService;
