import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const gmArticleKeys = [
  { key: "2025",       file: "/uploads/files/GM_Article_2025.pdf" },
  { key: "2024",       file: "/uploads/files/GM_Article_2024.pdf" },
  { key: "envDay2021", file: "/uploads/files/GM_Article_Environment_Day_5th_June_2021.pdf" },
  { key: "envDay2020", file: "/uploads/files/GM_Article_Environment_Day_5th_June_2020.pdf" },
  { key: "april2020",  file: "/uploads/files/GM_Article_April_2020.pdf" },
];

const GmArticle = () => {
  const { t } = useTranslation();

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
      <h2 className="news-page-title">{t("news.gmArticle")}</h2>

      {/* Article links list */}
      <ul className="news-report-list">
        {gmArticleKeys.map((item) => (
          <li key={item.key}>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="news-report-link"
            >
              {t(`news.gmArticles.${item.key}`)}
            </a>
          </li>
        ))}
      </ul>

      {/* Source footer */}
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: 08-12-2025
      </div>

    </div>
  );
};

export default GmArticle;