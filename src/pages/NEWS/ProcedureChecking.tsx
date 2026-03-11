import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const ProcedureChecking = () => {
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
      <h2 className="news-page-title">
        {t("news.procedureChecking")}
      </h2>

      {/* PDF link */}
      <div className="news-video-link">
        <a
          href="/uploads/files/Procedure_Checking_Clearances_Power_Asm_HHP_Locomotive.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("news.procedureCheckingLink")}
        </a>
      </div>

      {/* Source footer */}
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: 20-11-2025
      </div>

    </div>
  );
};

export default ProcedureChecking;