import React from "react";
import { useTranslation } from "react-i18next";
import "./Roller.css";

const Roller = () => {
  const { t } = useTranslation();

  const quickLinks = [
  {
    name: t("sidebar.complaints"),
    link: "#",
  },
  {
    name: t("sidebar.gstRailways"),
    link: "#",
  },
  {
    name: t("sidebar.publicGrievances"),
    link: "#",
  },
  {
    name: t("sidebar.eoi"),
    link: "#",
  },
];

  return (
    <div className="roller-container">

      {/* QUICK LINKS */}
      <div className="quick-links-section">
        <h2 className="section-title">{t("sidebar.quickLinks")}</h2>

        <div className="quick-links-grid">
          {quickLinks.map((item, index) => (
            <a key={index} href={item.link} className="quick-link-card">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* GOVERNMENT & MEDIA */}
      <div className="gov-media-section">
        <h2 className="section-title">{t("governmentMedia")}</h2>

        <div className="gov-grid">

          <div className="gov-card">
            <h3>{t("indiaPortal")}</h3>
            <p>{t("indiaPortalDesc")}</p>

            <a
              href="https://www.india.gov.in"
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              {t("visitPortal")}
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Roller;