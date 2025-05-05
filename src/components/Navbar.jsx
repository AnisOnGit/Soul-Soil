import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AllContext } from "../provider/AllProvider";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { loggedUser, logUserOut } = useContext(AllContext);
  // console.log(loggedUser);

  console.log(location);
  const navigate = useNavigate();
  const handleProfileIcon = () => {
    navigate("/login");
  };
  const handleMyProfile = () => {
    navigate("/profile");
  };
  const handleLogOut = () => {
    logUserOut()
      .then(() => {
        toast.success("user Signed Out Successfully");
      })
      .catch((error) => {
        toast.error("error happened", error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto max-w-screen-xl">
      <div className="navbar ">
        <div className="navbar-start w-5/6 b">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-gray-500">
                <Link to="/">Home</Link>
              </li>
              {loggedUser ? (
                <li className="hover:bg-gray-500">
                  <Link to="/profile">Update Profile</Link>
                </li>
              ) : null}
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold text-[#cdcdcd] ">
            Soul&Soil
          </Link>
        </div>
        <div className="navbar-end w-1/6 gap-3 border-2 border-[#cdcdcd]   justify-center rounded-3xl">
          <Link
            to="/"
            className=" font-bold p-1 hover:bg-gray-500 px-2 text-[#cdcdcd] rounded-xl hidden lg:flex  "
          >
            Home
          </Link>
          {loggedUser ? (
            <button
              className=" font-bold p-1 hover:bg-gray-500 px-2 text-[#cdcdcd] rounded-xl hover:cursor-pointer "
              onClick={handleLogOut}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="my-2 font-bold p-1 hover:bg-gray-500 px-2 text-[#cdcdcd] rounded-xl hover:cursor-pointer"
            >
              Login
            </Link>
          )}
          <div className="">
            {loggedUser && loggedUser?.email ? (
              <div className="flex items-center gap-2">
                <div className="group relative">
                  <div className="hidden group-hover:block text-white mt-2 absolute top-full">
                    <p>{loggedUser.displayName}</p>
                  </div>
                  <img
                    onClick={handleMyProfile}
                    className="w-10 my-1 rounded-full hover:cursor-pointer"
                    src={loggedUser?.photoURL}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <FaUser
                className="w-10 rounded-full hover:cursor-pointer hover:text-gray-500"
                onClick={handleProfileIcon}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
