import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./BlwHeritage.css";

const BlwHeritage = () => {
  const { t } = useTranslation();

  const heritageData = t("about.heritageLocomotives", {
    returnObjects: true,
  }) as {
    heritagePageTitle: string;
    heritagePageSubtitle: string;
    description: {
      id: number;
      heading: string;
      image: string;
      imageAlt: string;
      typeHeading: string;
      para1: string;
      para2?: string;
      para3?: string;
      para4?: string;
    }[];
  };

  // Safety check to avoid blank page if translation not loaded
  if (!heritageData || !heritageData.description) {
    return <div>Loading...</div>;
  }

  return (
    <div className="heritage-container">
      <main className="heritage-main">

        {/* Top Buttons */}
        <div className="heritage-top">
          <div className="heritage-buttons">

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

          <div className="heritage-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="heritage-title">
          {heritageData.heritagePageTitle}
        </h2>

        <p className="heritage-subtitle">
          {heritageData.heritagePageSubtitle}
        </p>

        {/* Heritage Locomotives List */}
        <div className="heritage-list">

          {heritageData.description.map((item) => (
            <div key={item.id} className="heritage-item">

              <h3>{item.heading}</h3>

              {item.image !== "#" && (
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="heritage-image"
                />
              )}

              <h4>{item.typeHeading}</h4>

              <p>{item.para1}</p>

              {item.para2 && <p>{item.para2}</p>}
              {item.para3 && <p>{item.para3}</p>}
              {item.para4 && <p>{item.para4}</p>}

            </div>
          ))}

        </div>

      </main>
    </div>
  );
};

export default BlwHeritage;