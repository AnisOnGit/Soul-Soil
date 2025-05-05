import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto max-w-screen-xl ">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav className="">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className=" justify-items-center">
          <h6 className="footer-title">Socials</h6>
          <a href="https://www.linkedin.com/in/anisur-rahman-2ab806213">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AnisOnGit">
            <FaGithub />
          </a>
          <a href="mailto:anisur.ctg0917@gmail.com">
            <MdEmail />
          </a>
          <a href="https://wa.me/8801889208888">
            <IoLogoWhatsapp />
          </a>
        </nav>
        <form className="">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
