import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./PortalPolicies.css";

const PortalPolicies = () => {
  const { t } = useTranslation();

  // Get portal data from i18n JSON
  const portalData = t("about.Portal", { returnObjects: true }) as {
    title: string;
    introduction: string;
    contactUs: {
      title: string;
      description: string;
      details: string[];
    };
    nationalPortal: {
      title: string;
      description: string;
    };
    secondaryContent: {
      title: string;
      description: string;
    };
    eventsAnnouncements: {
      title: string;
      description: string;
      examples: string[];
      guidelines: string[];
    };
    relatedLinks: {
      title: string;
      description: string;
      guidelines: string[];
    };
  };

  return (
    <div className="portal-container">
      <main className="portal-main">

        {/* Top buttons */}
        <div className="portal-top">
          <div className="portal-buttons">
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

          <div className="portal-quick">
            <span>{t("about.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="portal-title">{portalData.title}</h2>

        {/* Introduction */}
        <p>{portalData.introduction}</p>

        {/* Contact Us Section */}
        <h3>{portalData.contactUs.title}</h3>
        <p>{portalData.contactUs.description}</p>
        <ul>
          {portalData.contactUs.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* National Portal */}
        <h3>{portalData.nationalPortal.title}</h3>
        <p>{portalData.nationalPortal.description}</p>

        {/* Secondary Content */}
        <h3>{portalData.secondaryContent.title}</h3>
        <p>{portalData.secondaryContent.description}</p>

        {/* Events & Announcements */}
        <h3>{portalData.eventsAnnouncements.title}</h3>
        <p>{portalData.eventsAnnouncements.description}</p>
        <ul>
          {portalData.eventsAnnouncements.examples.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h4>Guidelines:</h4>
        <ul>
          {portalData.eventsAnnouncements.guidelines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Related Links */}
        <h3>{portalData.relatedLinks.title}</h3>
        <p>{portalData.relatedLinks.description}</p>
        <ul>
          {portalData.relatedLinks.guidelines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </main>
    </div>
  );
};

export default PortalPolicies;