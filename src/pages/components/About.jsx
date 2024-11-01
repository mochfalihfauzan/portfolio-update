import "../../style/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaGit,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Hello! I am Moch Falih Fauzan, a student at the University Bina Sarana
          Informatika with main interest in Technology Information and web
          development. I believe that Technology has the extraordinary ability
          to change the world, and I very excited to be part of that change.
        </p>
        <h4>Programming Languages & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaPhp />
          <FaReact />
          <FaLaravel />
          <SiMysql />
          <FaBootstrap />
          <SiTailwindcss />
          <FaGit />
        </div>
      </div>
    </section>
  );
}
