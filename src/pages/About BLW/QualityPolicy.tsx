import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./QualityPolicy.css";

const QualityPolicy = () => {
  const { t } = useTranslation();

  // Get data from i18n JSON
  const policyData = t("about.QualityPolicy", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    description: string;
    commitmentTitle: string;
    points: string[];
  };

  return (
    <div className="quality-policy-container">
      <main className="quality-policy-main">

        {/* Top buttons */}
        <div className="quality-policy-top">
          <div className="quality-policy-buttons">
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

          <div className="quality-policy-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="quality-policy-title">{policyData.title}</h2>
        <h3 className="quality-policy-subtitle">{policyData.subtitle}</h3>

        {/* Description */}
        <p>{policyData.description}</p>

        {/* Commitment Heading */}
        <h4>{policyData.commitmentTitle}</h4>

        {/* Points List */}
        <ul>
          {policyData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

      </main>
    </div>
  );
};

export default QualityPolicy;