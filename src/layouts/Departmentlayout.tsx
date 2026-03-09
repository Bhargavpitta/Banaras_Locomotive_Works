import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import DepartmentBar from "../components/bars/DepartmentBar";
import Header from "../components/Header";
import "./Departmentlayout.css";

const DepartmentLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mobile-back">
        <Link to="/" className="back-button">← Back</Link>
      </div>
      <div className="layout-content">
        <DepartmentBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DepartmentLayout;