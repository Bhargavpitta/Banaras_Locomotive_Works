import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const Achievements = () => {
  const { t } = useTranslation();

  const achievementsList = [
    { key: "2023-24", file: "/uploads/files/Achievements_BLW_2023-24.pdf" },
    { key: "2022-23", file: "/uploads/files/Achievements_BLW_2022-23.pdf" },
    { key: "2021-22", file: "/uploads/files/Achievements_BLW_2021-22.pdf" },
  ];

  return (
    <div className="news-page-container">

      {/* Top action bar */}
      <div className="news-page-top">
        <div className="news-page-buttons">
          <button>
            <Bookmark className="w-4 h-4" />
            {t("news.bookmark")}
          </button>
          <button>
            <Mail className="w-4 h-4" />
            {t("news.mailPage")}
          </button>
          <button onClick={() => window.print()}>
            <Printer className="w-4 h-4" />
            {t("news.printPage")}
          </button>
        </div>
        <div className="news-page-quick">
          <span>{t("news.quickLinks")}</span>
          <select>
            <option>{t("news.select")}</option>
          </select>
        </div>
      </div>

      {/* Page title */}
      <h2 className="news-page-title">{t("news.achievements")}</h2>

      {/* Achievements links list */}
      <ul className="news-report-list">
        {achievementsList.map((item) => (
          <li key={item.key}>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="news-report-link"
            >
              {t(`news.achievementsList.${item.key}`)}
            </a>
          </li>
        ))}
      </ul>

      {/* Source footer */}
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: 13-02-2025
      </div>

    </div>
  );
};

export default Achievements;