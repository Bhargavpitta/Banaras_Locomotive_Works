import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutBar.css";

const AboutBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          background: "#2563eb",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 60,
        }}
      >
        ☰ Menu
      </button>

      <aside className={`aboutbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          <li>
            <Link to="/about/brief-history">{t("about.briefHistory")}</Link>
          </li>
          <li>{t("about.organization")}</li>
          <li>
                <Link to="/about/blw-heritage">{t("about.heritage")}</Link>
            </li>
          <li>
            <Link to="/about/organization-strength">{t("about.orgStrength")}</Link>
          </li>
         
         
           <li>
  <Link to="/about/quality">{t("about.qualityAssurance")}</Link>
</li>
           
          <li>
  <Link to="/about/Department">{t("about.department")}</Link>

</li>
          <li>
             <Link to="/about/milestones">{t("about.milestones")}</Link>
             </li>

          <li>{t("about.productForSale")}</li>
          <li>
  <Link to="/about/design">{t("about.design.title")}</Link>
</li>
           <li>
             <Link to="/about/quality">{t("about.qualityPolicy")}</Link>
             </li>
          <li>
          <Link to="/about/portal">{t("about.portalPolicies")}</Link>
        </li>
        </ul>
      </aside>
    </>
  );
};

export default AboutBar;