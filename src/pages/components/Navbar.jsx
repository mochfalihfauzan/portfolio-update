import { useState } from "react";
import "../../style/Navbar.css";
import { GrClose } from "react-icons/gr";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
  const [statusTampil, setStatusTampil] = useState("");
  function tampilMenu() {
    statusTampil == "" ? setStatusTampil("tampil") : setStatusTampil("");
  }

  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">Fauzan</Link>
          </div>
          <button onClick={tampilMenu}>
            {statusTampil == "" ? <RiBarChartHorizontalLine /> : <GrClose />}
          </button>
          <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
            <ul>
              <li>
                <HashLink to="/#portfolio">Portfolio</HashLink>
              </li>
              <li>
                <HashLink to="/#about">About</HashLink>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
