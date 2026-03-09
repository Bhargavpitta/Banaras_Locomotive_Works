import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ContactBar.css";

const ContactBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const isOpenMenu = (key: string) => openSubMenus.has(key);

  return (
    <>
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰ Menu
      </button>

      <aside className={`contactbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          <li><Link to="#">{t("contactUs.seniorOfficers")}</Link></li>
          <li><Link to="#">{t("contactUs.railNetMail")}</Link></li>
          <li><Link to="#">{t("contactUs.mailGov")}</Link></li>

          {/* RTI */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("rti")}>
              {t("contactUs.rti.title")}
              <span>{isOpenMenu("rti") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("rti") && (
              <ul className="submenu">
                <li><Link to="#">{t("contactUs.rti.rtiAct")}</Link></li>
                <li><Link to="#">{t("contactUs.rti.rtiCell")}</Link></li>
                <li><Link to="#">{t("contactUs.rti.feeStructure")}</Link></li>
                <li><Link to="#">{t("contactUs.rti.applicationFormat")}</Link></li>
                <li><Link to="#">{t("contactUs.rti.information4")}</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="#">{t("contactUs.feedback")}</Link></li>
          <li><Link to="#">{t("contactUs.importantLinks")}</Link></li>
          <li><Link to="#">{t("contactUs.yourSuggestion")}</Link></li>
          <li><Link to="#">{t("contactUs.privacyPolicy")}</Link></li>
          <li><Link to="#">{t("contactUs.termsConditions")}</Link></li>
          <li><Link to="#">{t("contactUs.help")}</Link></li>
          <li><Link to="#">{t("contactUs.disclaimer")}</Link></li>
          <li><Link to="#">{t("contactUs.sitemap")}</Link></li>
          <li><Link to="#">{t("contactUs.faq")}</Link></li>
          <li><Link to="#">{t("contactUs.otherRailwaySites")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default ContactBar;