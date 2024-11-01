import { Link } from "react-router-dom";
import "../../style/ToExperience.css";

function ToExperience() {
  return (
    <div className="wrapper">
      <Link to="/experience" className="button-experience">
        EXPERIENCE
      </Link>
    </div>
  );
}

export default ToExperience;
