import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./OrganizationStrength.css"; // reusing existing CSS

const Design = () => {
  const { t } = useTranslation();

  // Get title, description, and pdfLink from i18n JSON
  const designData = t("about.design", { returnObjects: true }) as {
    title: string;
    description: string;
    pdfLink: string;
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
        <h2 className="org-strength-title">{designData.title}</h2>

        {/* Description + PDF Link */}
       <p className="design-description">
  {designData.description}{" "}
  <a
    href={designData.pdfLink}
    target="_blank"
    rel="noopener noreferrer"
    className="design-pdf-link"
  >
    Click here
  </a>
</p>
      </main>
    </div>
  );
};

export default Design;