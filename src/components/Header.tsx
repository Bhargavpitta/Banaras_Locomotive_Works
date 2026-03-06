import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN → hide header
        setHidden(true);
      } else {
        // Scrolling UP → show header
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${hidden ? " header--hidden" : ""}`} role="banner">
      <div className="header__inner">
        {/* LOGO */}
        <img
          src="/images/main_logo.jpg"
          alt="Indian Railways Logo"
          className="header__logo"
        />

        {/* TEXT SECTION */}
        <div className="header__info">
          <h1 className="header__title">{t("header.title")}</h1>
          <p className="header__subtitle">{t("header.subtitle")}</p>
          <p className="header__address">{t("header.address")}</p>
          <p className="header__contact">
            {t("header.phone")}, {t("header.fax")}
          </p>
        </div>

        {/* SEARCH */}
        <div className="header__search" role="search">
          <svg
            className="header__search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="header__search-text">{t("header.search")}</span>
        </div>

        {/* LANGUAGE BUTTON */}
        <button className="header__lang-btn" onClick={toggleLanguage}>
          {t("header.langToggle")}
        </button>

        {/* EMBLEM */}
        <img
          src="/images/em.jpg"
          alt="Government of India Emblem"
          className="header__emblem"
        />
      </div>
    </header>
  );
};

export default Header;
