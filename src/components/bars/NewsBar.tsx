import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NewsBar.css";

const NewsBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰ Menu
      </button>

      <aside className={`newsbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          <li><Link to="#">{t("news.announcements")}</Link></li>
          <li><Link to="#">{t("news.annualReport")}</Link></li>
          <li><Link to="#">{t("news.pressReleases")}</Link></li>
          <li><Link to="#">{t("news.shortVideo")}</Link></li>
          <li><Link to="#">{t("news.currentNews")}</Link></li>
          <li><Link to="#">{t("news.samwad")}</Link></li>
          <li><Link to="#">{t("news.gmArticle")}</Link></li>
          <li><Link to="#">{t("news.videoAssembly")}</Link></li>
          <li><Link to="#">{t("news.tourism")}</Link></li>
          <li><Link to="#">{t("news.achievements")}</Link></li>
          <li><Link to="#">{t("news.civilDefence")}</Link></li>
          <li><Link to="#">{t("news.procedureChecking")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default NewsBar;