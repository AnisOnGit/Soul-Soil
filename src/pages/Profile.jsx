import { useContext } from "react";
import { AllContext } from "../provider/AllProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Profile = () => {
  useEffect(() => {
    document.title = "Profile | Soul & Soil";
  }, []);
  const { loggedUser } = useContext(AllContext);
  const navigate = useNavigate();
  const handleUpdtBtn = () => {
    navigate("/update");
  };
  // const { displayName, photoURL, email } = loggedUser;

  return (
    <div className="w-11/12 mx-auto flex justify-center mt-10">
      <div className="card w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={loggedUser?.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Hi <span>{loggedUser?.displayName},</span>
          </h2>
          <p>your email :{loggedUser?.email}</p>
          <div className="card-actions">
            <button onClick={handleUpdtBtn} className="btn btn-primary">
              Update information ?
            </button>
          </div>
        </div>
      </div>

      {/* <h1 className="text-2xl">Hi {loggedUser?.displayName},</h1>
      <p>This is your Profile Page</p>
      <div>
        <img src={loggedUser?.photoURL} alt="Your Profile Pic" />
      </div>
      <p>Display Name: {loggedUser?.displayName}</p>
      <p>email: {loggedUser?.email}</p>
      <button onClick={handleUpdtBtn} className="btn">
        Update information ?
      </button> */}

      {/* image email name
      upd btn > update thingy */}
    </div>
  );
};

export default Profile;
