import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from "../provider/AllProvider";
import toast from "react-hot-toast";
import { useEffect } from "react";
//________________________________
const Register = () => {
  useEffect(() => {
    document.title = "Register | Soul & Soil";
  }, []);
  const { registerUser, updProfile } = useContext(AllContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!regEx.test(password)){
      toast.error('password must be 6 char long minimum, must cointain at least one upper and one lowercase character')
      return
    }
    // console.log(name, email, password);
    registerUser(email, password)
      .then(() => {
        // console.log(result);
        toast.success("Successfully Registered!");
        updProfile({ displayName: name, photoURL: photo });
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Registration Failed - ${error.message}`);
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto  flex justify-center">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-bold text-xl">Register your account</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input bg-gray-300"
                  placeholder="John Snow"
                  name="name"
                />

                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input  bg-gray-300"
                  placeholder="abc@def.com"
                  name="email"
                />

                {/* photoUrl */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input bg-gray-300"
                  placeholder="URL"
                  name="photo"
                  required
                />

                {/* password */}
                <label className="label ">Password</label>
                <input
                  type="password"
                  className="input bg-gray-300"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
