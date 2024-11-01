import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaravel } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { HiMiniBuildingOffice } from "react-icons/hi2";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              Programmer IT Developer (Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              FYP Media <HiMiniBuildingOffice />
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - November 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Full Stack (Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Soko Financial <HiMiniBuildingOffice />
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2024 - June 2024 "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              Program Studi Independen Bersertifikat (SIB) Kampus Merdeka
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              PT Educa Sisfomedia Indonesia (Gamelab) <HiMiniBuildingOffice />
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2019 - June 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Staff (Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              PT LUA Kreatif Teknologi <HiMiniBuildingOffice />
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
