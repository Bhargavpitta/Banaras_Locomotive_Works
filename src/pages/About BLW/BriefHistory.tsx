import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./BriefHistory.css";

const BriefHistory = () => {
  const { t } = useTranslation();

  const historyData = t("about.historyData", { returnObjects: true }) as {
    date: string;
    year: string;
    event: string;
  }[];

  return (
    <div className="brief-history-container">
      <main className="brief-history-main">

        {/* Top buttons */}
        <div className="brief-history-top">

          <div className="brief-history-buttons">
            <button>
              <Bookmark className="w-4 h-4" />
              {t("about.bookmark")}
            </button>

            <button>
              <Mail className="w-4 h-4" />
              {t("about.mailPage")}
            </button>

            <button onClick={() => window.print()}>
              <Printer className="w-4 h-4" />
              {t("about.printPage")}
            </button>
          </div>

          <div className="brief-history-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>

        </div>

        {/* Page Title */}
        <h2 className="brief-history-title">
          {t("about.briefHistoryTitle")}
        </h2>

        {/* History Table */}
        <table className="brief-history-table">
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.year}</td>
                <td>{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>
    </div>
  );
};

export default BriefHistory;