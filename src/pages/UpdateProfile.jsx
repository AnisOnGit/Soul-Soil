import { useContext } from "react";
import { AllContext } from "../provider/AllProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
const UpdateProfile = () => {
  useEffect(() => {
    document.title = "Update Profile | Soul & Soil";
  }, []);

  const { updProfile } = useContext(AllContext);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updProfile({ displayName: name, photoURL: photo })
      .then(navigate("/profile"))
      .catch((error) => {
        toast.error("error occured", error.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto flex justify-center mt-20">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1>Update Your Information</h1>
          <form onSubmit={handleOnSubmit}>
            <fieldset className="fieldset">
              <label className="label ">Photo</label>
              <input
                type="text"
                className="input  bg-gray-300"
                name="photo"
                placeholder="URL"
              />
              <label className="label">Name</label>
              <input
                type="text"
                className="input  bg-gray-300"
                name="name"
                placeholder="name"
              />
              <button className="btn  mt-4">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
