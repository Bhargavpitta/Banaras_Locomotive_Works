import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const annualReportKeys = [
  { key: "2024-25", file: "/uploads/files/Annual%20Report%202024-25.pdf" },
  { key: "2023-24", file: "/uploads/files/Annual%20Report%202023-24.pdf" },
  { key: "2022-23", file: "/uploads/files/Annual%20Report%202022-23.pdf" },
  { key: "2021-22", file: "/uploads/files/Annual%20Report%202021-22.pdf" },
  { key: "2020-21", file: "/uploads/files/Annual%20Report%202020-21.pdf" },
  { key: "2019-20", file: "/uploads/files/Annual%20Report%202019-20.pdf" },
  { key: "2018-19", file: "/uploads/files/Annual%20Report%202018-19.pdf" },
  { key: "2017-18", file: "/uploads/files/Annual%20Report%202017-18.pdf" },
  { key: "2016-17", file: "/uploads/files/Annual%20Report%202016-17.pdf" },
  { key: "2015-16", file: "/uploads/files/Annual%20Report%202015-16.pdf" },
];

const GMAnnualReport = () => {
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
      <h2 className="news-page-title">{t("news.annualReport")}</h2>

      {/* Report links list */}
      <ul className="news-report-list">
        {annualReportKeys.map((report) => (
          <li key={report.key}>
            <a
              href={report.file}
              target="_blank"
              rel="noopener noreferrer"
              className="news-report-link"
            >
              {t(`news.annualReports.${report.key}`)}
            </a>
          </li>
        ))}
      </ul>

      {/* Source footer */}
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: 08-10-2025
      </div>

    </div>
  );
};

export default GMAnnualReport;