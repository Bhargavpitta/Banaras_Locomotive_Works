import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewsBar from "../components/bars/NewsBar";
import Header from "../components/Header";
import "./NewsLayout.css";

const NewsLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mobile-back">
        <Link to="/" className="back-button">← Back</Link>
      </div>
      <div className="layout-content">
        <NewsBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default NewsLayout;