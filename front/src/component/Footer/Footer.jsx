import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Abhishek Singh. I am a Full-Stack Developer and a
          tutorial on Youtube channel called <b> 6 Pack Programmer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/KumarLaL1T" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/00.lal1t_k/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/lalitkumar4227" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
