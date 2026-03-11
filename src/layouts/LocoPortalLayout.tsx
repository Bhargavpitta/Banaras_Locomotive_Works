import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LocoPortalBar from "../components/bars/LocoPortalBar";
import Header from "../components/Header";
import "./LocoPortalLayout.css";

const LocoPortalLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mobile-back">
        <Link to="/" className="back-button">← Back</Link>
      </div>
      <div className="layout-content">
        <LocoPortalBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LocoPortalLayout;