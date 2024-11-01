import profilePicture from "../../assets/profile-picture.jpg";
import "../../style/Header.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} alt="" />
        <h3>Moch Falih Fauzan</h3>
        <p>Web Developer</p>
        <p>Programmer</p>
        <p>Fullstack Developer</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/falihfauzan_/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/moch-falih-fauzan/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mochfalihfauzan/" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
