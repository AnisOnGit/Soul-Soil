import { Link } from "react-router-dom";
import { useContext } from "react";
import { AllContext } from "../provider/AllProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
const Login = () => {
  useEffect(() => {
    document.title = "Login | Soul & Soil";
  }, []);
  const { loginUser, googleSignIn, setResetMail } = useContext(AllContext);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        // console.log(result);
        toast.success("Login Successful");
        e.target.reset()
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(`Login Failed - ${error.message}`);
      });
    
  };
  const handleGooglebtn = () => {
    googleSignIn()
      .then(() => {
        // console.log(result);
        toast.success("logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Registration Failed - ${error.message}`);
      });
  };
  const handleForgot = () => {
    navigate("/reset");
    const email = document.querySelector('input[name="email"]').value;
    setResetMail(email);
  };

  return (
    <div className="w-11/12 mx-auto  flex justify-center">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h1 className="text-bold text-xl">Login to your account now</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-gray-300"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input bg-gray-300"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover" onClick={handleForgot}>
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          <p className="text-center">or</p>
          <button onClick={handleGooglebtn} className="btn">
            <FaGoogle />
            Continue with Google
          </button>
          <p>
            Dont have an account?{" "}
            <Link to="/register" className="text-red-600">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
