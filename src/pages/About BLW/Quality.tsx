import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./Quality.css";

type QualityData = {
  title: string;
  subtitle: string;
  description: string[];
  objectivesTitle: string;
  objectives: string[];
};

const Quality = () => {
  const { t } = useTranslation();

  const qualityData = t("about.quality", {
    returnObjects: true,
  }) as QualityData;

  if (!qualityData || !qualityData.description) return null;

  return (
    <div className="quality-container">
      <main className="quality-main">

        <div className="quality-top">
          <div className="quality-buttons">

            <button className="blue-button">
              <Bookmark />
              {t("about.bookmark")}
            </button>

            <button className="blue-button">
              <Mail />
              {t("about.mailPage")}
            </button>

            <button
              className="blue-button"
              onClick={() => window.print()}
            >
              <Printer />
              {t("about.printPage")}
            </button>

          </div>

          <div className="quality-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        <h2 className="quality-title">{qualityData.title}</h2>

        <p className="quality-subtitle">{qualityData.subtitle}</p>

        <div className="quality-description">
          {qualityData.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <h3 className="quality-objectives-title">
          {qualityData.objectivesTitle}
        </h3>

        <ul className="quality-objectives-list">
          {qualityData.objectives.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>

      </main>
    </div>
  );
};

export default Quality;