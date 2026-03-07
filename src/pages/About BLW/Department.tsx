import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./Department.css";

const Department = () => {
  const { t } = useTranslation();

  // Get title and description from i18n JSON
  // description is a string or array of strings
  const deptData = t("about.Department", { returnObjects: true }) as {
    title: string;
    description: string | string[];
  };

  // Normalize description to array for easy rendering
  const descriptionArray = Array.isArray(deptData.description)
    ? deptData.description
    : [deptData.description];

  return (
    <div className="department-container">
      <main className="department-main">

        {/* Top buttons */}
        <div className="department-top">
          <div className="department-buttons">
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

          <div className="department-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="department-title">{deptData.title}</h2>

        {/* Description */}
        {descriptionArray.map((para, index) => (
          <p key={index} className="department-description">
            {para}
          </p>
        ))}

      </main>
    </div>
  );
};

export default Department;