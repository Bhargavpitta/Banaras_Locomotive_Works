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
          <li>{t("about.heritage")}</li>
          <li>
            <Link to="/about/organization-strength">{t("about.orgStrength")}</Link>
          </li>
          <li>{t("about.qualityAssurance")}</li>
          <li>{t("about.department")}</li>
          <li>{t("about.milestones")}</li>
          <li>{t("about.productForSale")}</li>
          <li>{t("about.designCapabilities")}</li>
          <li>{t("about.qualityPolicy")}</li>
          <li>{t("about.portalPolicies")}</li>
        </ul>
      </aside>
    </>
  );
};

export default AboutBar;