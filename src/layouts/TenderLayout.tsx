import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TenderBar from "../components/bars/TenderBar";
import Header from "../components/Header";
import "./TenderLayout.css";

const TenderLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mobile-back">
        <Link to="/" className="back-button">← Back</Link>
      </div>
      <div className="layout-content">
        <TenderBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TenderLayout;