import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import VendorBar from "../components/bars/VendorBar";
import Header from "../components/Header";
import "./VendorLayout.css";

const VendorLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mobile-back">
        <Link to="/" className="back-button">← Back</Link>
      </div>
      <div className="layout-content">
        <VendorBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default VendorLayout;