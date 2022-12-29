import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";

export const Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contate-me</h1>
      <div className="contact-links">
        <a
          href="mailto:aldairazevedo@hotmail.com.br"
          className="contact email"
          target={"blank"}
        >
          <AiOutlineMail  className="icon" />
          <h2>
            e-mail <span>Outlook</span>
          </h2>
        </a>
        <a
          href="https://wa.me/5592986040377"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 92 98604 0377</span>
          </h2>
        </a>
        <a href="https://www.linkedin.com/in/aldair-azevedo/" 
           className="contact linkedin"
           target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            linkedin <span>Conecta lá</span>
          </h2>
        </a>
      </div>
    </div>
  );
}
