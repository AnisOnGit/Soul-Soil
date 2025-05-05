import { Link } from "react-router-dom";
import { useEffect } from "react";
const Error = () => {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <div className="w-full text-center absolute top-1/2">
      <h1 className="text-5xl">404! Error Occured - Page Not Found</h1>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
