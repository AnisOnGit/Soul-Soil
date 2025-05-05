import { useContext, useEffect } from "react";
import { AllContext } from "../provider/AllProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  useEffect(() => {
    document.title = "Reset Password | Soul & Soil";
  }, []);
  const { passReset,resetMail } = useContext(AllContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    passReset(email)
      .then(() => {
        toast.success("reset email sent. Check your inbox");
        window.open("https://mail.google.com", "_blank");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(`something happened ${error.message}`);
      });
  };

  return (
    <div className="w-11/12 mx-auto  flex justify-center">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h1 className="text-bold text-xl">Rest your password now</h1>
            <fieldset className="fieldset">
              <label className="label">
                Email of forgotten password account
              </label>
              <input
                type="email"
                className="input bg-gray-300"
                value={resetMail}
                name="email"
              />

              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
