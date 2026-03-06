import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutBar from "../components/bars/AboutBar";
import Header from "../components/Header";
import "./AboutLayout.css";

const AboutLayout = () => {
  return (
    <>
      <Header />
      <Navbar />

      {/* Back button for mobile */}
      <div className="mobile-back">
        <Link to="/" className="back-button">
          ← Back
        </Link>
      </div> 

      <div className="layout-content">
        <AboutBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AboutLayout;