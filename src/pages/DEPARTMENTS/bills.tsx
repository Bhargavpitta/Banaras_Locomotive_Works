import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./Bills.css";

const Bills = () => {
  const { t } = useTranslation();

  const billsData = t("departments.accounts", { returnObjects: true }) as {
    title: string;
    billsFormat: string;
  };

  return (
    <div className="bills-container">
      <main className="bills-main">

        {/* Top buttons */}
        <div className="bills-top">
          <div className="bills-buttons">
            <button className="blue-button">
              <Bookmark />
              {t("bookmark")}
            </button>
            <button className="blue-button">
              <Mail />
              {t("mailPage")}
            </button>
            <button className="blue-button" onClick={() => window.print()}>
              <Printer />
              {t("printPage")}
            </button>
          </div>

          <div className="bills-quick">
            <span>{t("quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="bills-title">{billsData.title}</h2>

        {/* Bills List */}
        <ul>
          <li>
            <a href="#">{billsData.billsFormat}</a>
          </li>
        </ul>

      </main>
    </div>
  );
};

export default Bills;