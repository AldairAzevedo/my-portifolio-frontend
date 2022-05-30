import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { TiSocialGithub } from "react-icons/ti";

export const Footer = () => {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        isso é tudo{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - rolar para cima -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/byaldair.s/">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.linkedin.com/in/aldair-azevedo/">
          {" "}
          <AiFillLinkedin className="social" />
        </a>
        <a href="https://github.com/AldairAzevedo">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
