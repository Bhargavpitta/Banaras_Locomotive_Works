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
         {/* News & Announcements */}
          <li><Link to="/news/announcements">{t("news.announcements")}</Link></li>
         {/* GM's Annual Report */}
          <li><Link to="/news/annual-report">{t("news.annualReport")}</Link></li>
         {/* Press Releases */}
          <li><Link to="/news/press-releases">{t("news.pressReleases")}</Link></li>
         {/* Short Video */}
          <li><Link to="/news/short-video">{t("news.shortVideo")}</Link></li>
         {/* Current News */}
          <li><Link to="/news/current-news">{t("news.currentNews")}</Link></li>
         {/* Samwad */}
          <li><Link to="/news/samwad">{t("news.samwad")}</Link></li>
         {/* GM's Article */}
          <li><Link to="/news/gm-article">{t("news.gmArticle")}</Link></li>
         {/* Video Assembly */}
          <li><Link to="/news/video-assembly">{t("news.videoAssembly")}</Link></li>
         {/* Varanasi Tourism */}
          <li><Link to="/news/tourism">{t("news.tourism")}</Link></li>
         {/* Achievements of BLW */}
          <li><Link to="/news/achievements">{t("news.achievements")}</Link></li>
          {/* Civil Defence BLW */}
          <li><Link to="/news/civil-defence">{t("news.civilDefence")}</Link></li>
         {/* Procedure Checking */}
          <li><Link to="/news/procedure-checking">{t("news.procedureChecking")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default NewsBar;