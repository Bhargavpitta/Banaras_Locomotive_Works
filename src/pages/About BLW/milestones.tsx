import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./milestones.css";

const Milestones = () => {
  const { t } = useTranslation();

  const data = t("about.milestonesFuturePlans", { returnObjects: true }) as {
    title: string;
    recentMilestonesTitle: string;
    recentMilestones: string[];
    certificationsTitle: string;
    certifications: string[];
    locomotiveProductionTitle: string;
    locomotiveProductionDescription: string[];
    productionPlan2025Title: string;
    productionPlan2025: string[];
    futurePlan2026Title: string;
    futurePlan2026: string[];
    pohPlanTitle: string;
    pohTable: {
      headers: string[];
      rows: { description: string; data: string[] }[];
    };
    electricProductionLast10Years: string;
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="milestones-container">
      <main className="milestones-main">

        {/* Top Buttons */}
        <div className="milestones-top">
          <div className="milestones-buttons">
            <button className="blue-button">
              <Bookmark size={16} />
              {t("about.bookmark")}
            </button>
            <button className="blue-button">
              <Mail size={16} />
              {t("about.mailPage")}
            </button>
            <button
              className="blue-button"
              onClick={() => window.print()}
            >
              <Printer size={16} />
              {t("about.printPage")}
            </button>
          </div>

          <div className="milestones-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="milestones-title">{data.title}</h2>

        {/* Recent Milestones */}
        <h3>{data.recentMilestonesTitle}</h3>
        {data.recentMilestones.map((item, i) => (
          <p key={i}>{item}</p>
        ))}

        {/* Certifications */}
        <h3>{data.certificationsTitle}</h3>
        <ul>
          {data.certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>

        {/* Locomotive Production */}
        <h3>{data.locomotiveProductionTitle}</h3>
        {data.locomotiveProductionDescription.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {/* Production Plan 2025 */}
        <h3>{data.productionPlan2025Title}</h3>
        <ul>
          {data.productionPlan2025.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>

        {/* Future Plan 2026 */}
        <h3>{data.futurePlan2026Title}</h3>
        <ul>
          {data.futurePlan2026.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>

        {/* POH Plan Table */}
        <h3>{data.pohPlanTitle}</h3>
        <table className="milestones-table">
          <thead>
            <tr>
              {data.pohTable.headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.pohTable.rows.map((row, i) => (
              <tr key={i}>
                <td>{row.description}</td>
                {row.data.map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Electric Production Last 10 Years */}
        <h3>{data.electricProductionLast10Years}</h3>

      </main>
    </div>
  );
};

export default Milestones;