import React from "react";
import { useTranslation } from "react-i18next";
import "./Roller.css";

const Roller = () => {
  const { t } = useTranslation();

  const quickLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ql-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      name: t("roller.complaints"),
      link: "https://railmadad.indianrailways.gov.in",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ql-icon">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
        </svg>
      ),
      name: t("roller.gstRailways"),
      link: "https://www.indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,1,304,366,533",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ql-icon">
          <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
        </svg>
      ),
      name: t("roller.publicGrievances"),
      link: "https://pgportal.gov.in",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ql-icon">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      name: t("roller.eoi"),
      link: "https://www.blw.indianrailways.gov.in",
    },
  ];

  const newsItems = [
    { text: t("roller.news1"), link: "/images/AA.pdf" },
    { text: t("roller.news2"), link: "/images/BB.pdf" },
  ];

  return (
    <div className="roller-container">

      {/* ===== ABOUT BLW ===== */}
      <section className="about-blw-section">
        <h2 className="section-title">{t("roller.aboutBLW.title")}</h2>
        <div className="about-blw-card">
          <p className="about-blw-text">{t("roller.aboutBLW.description")}</p>
          <a href="#">
            {t("roller.aboutBLW.readMore")}
          </a>
        </div>
      </section>

      {/* ===== NEWS + TENDERS ===== */}
      <section className="news-tenders-section">
        <div className="news-tenders-grid">

          {/* News & Announcements */}
          <div className="nt-widget">
            <div className="nt-widget__header nt-widget__header--news">
              <svg viewBox="0 0 24 24" fill="currentColor" className="nt-icon">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
              <span>{t("roller.newsTitle")}</span>
            </div>
            <div className="nt-widget__body">
              {newsItems.map((item, i) => (
                <div key={i} className="nt-widget__item">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nt-widget__link"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Active Tenders */}
          <div className="nt-widget">
            <div className="nt-widget__header nt-widget__header--tenders">
              <svg viewBox="0 0 24 24" fill="currentColor" className="nt-icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <span>{t("roller.tendersTitle")}</span>
            </div>
            <div className="nt-widget__body nt-widget__body--empty">
              <p>{t("roller.noTenders")}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="quick-links-section">
        <h2 className="section-title">{t("roller.quickLinks")}</h2>
        <div className="quick-links-grid">
          {quickLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="quick-link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ql-icon-wrap">{item.icon}</span>
              <span className="ql-label">{item.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== GOVERNMENT & MEDIA ===== */}
      <section className="gov-media-section">
        <h2 className="section-title">{t("roller.governmentMedia.title")}</h2>
        <div className="gov-grid">

          {/* Corporate Film Card */}
          <div className="gov-card gov-card--film">
            <h3 className="gov-card__title">{t("roller.corporateFilm.title")}</h3>
            <p className="gov-card__desc">{t("roller.corporateFilm.desc")}</p>
            <a
              href="https://blw.indianrailways.gov.in/view_section.jsp?lang=1&id=0,294,481"
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              {t("roller.corporateFilm.watchNow")}
            </a>
          </div>

          {/* India Portal Card */}
          <div className="gov-card gov-card--portal">
            <img
              src="/images/india.gov.in.png"
              alt="india.gov.in"
              className="gov-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent && !parent.querySelector(".gov-logo-fallback")) {
                  const fallback = document.createElement("div");
                  fallback.className = "gov-logo-fallback";
                  fallback.innerHTML = `<span class="gov-logo-text">india.<span style="color:#e07b00">gov</span>.in</span>`;
                  parent.insertBefore(fallback, e.target as HTMLImageElement);
                }
              }}
            />
            <p className="gov-card__desc">{t("roller.governmentMedia.indiaPortalDesc")}</p>
            <a
              href="https://www.india.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              {t("roller.governmentMedia.visitPortal")} →
            </a>
          </div>

        </div>
      </section>

      {/* ===== META INFO ===== */}
      <div className="roller-meta">
        <p className="roller-meta__text">{t("roller.lastUpdated")}</p>
        <p className="roller-meta__text">{t("roller.visitors")}</p>
      </div>

    </div>
  );
};

export default Roller;