import React, { useContext} from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    const { isAuthorized } = useContext(Context);
    return (
      <footer className={isAuthorized ? "footerShow" : "footerHide"}>
        <div>&copy; All Rights Reserved By Jeejula Gyan Kirran.</div>
        <div>
          <Link to={"https://www.facebook.com/pavan.rockzz29"} target="_blank">
            <FaFacebookF />
          </Link>
          <Link to={"https://www.youtube.com/feed/you"} target="_blank">
            <FaYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/jeejula-gyankirran-8592a9213/"} target="_blank">
            <FaLinkedin/>
          </Link>
          <Link to={"https://www.instagram.com/gyankiran_/"} target="_blank">
            <RiInstagramFill />
          </Link>
        </div>
      </footer>
    );
  };
  
  export default Footer;