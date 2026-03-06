import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./OrganizationStrength.css";

const OrganizationStrength = () => {
  const { t } = useTranslation();

  // Get title and points from i18n JSON
  const orgData = t("about.orgStrengthData", { returnObjects: true }) as {
    title: string;
    points: string[];
  };

  return (
    <div className="org-strength-container">
      <main className="org-strength-main">

        {/* Top buttons */}
        <div className="org-strength-top">
          <div className="org-strength-buttons">
            <button className="blue-button">
              <Bookmark />
              {t("about.bookmark")}
            </button>

            <button className="blue-button">
              <Mail />
              {t("about.mailPage")}
            </button>

            <button className="blue-button" onClick={() => window.print()}>
              <Printer />
              {t("about.printPage")}
            </button>
          </div>

          <div className="org-strength-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="org-strength-title">{orgData.title}</h2>

        {/* Strength Points List */}
        <ul className="org-strength-list">
          {orgData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

      </main>
    </div>
  );
};

export default OrganizationStrength;