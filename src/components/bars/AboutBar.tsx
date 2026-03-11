import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutBar.css";

const AboutBar = () => {
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

  const isOpen2 = (key: string) => openSubMenus.has(key);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          background: "#2563eb",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 60,
        }}
      >
        ☰ Menu
      </button>

      <aside className={`aboutbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          {/* Brief History */}
          <li>
            <Link to="/about/brief-history">{t("about.briefHistory")}</Link>
          </li>

          {/* Organization */}
          <li>{t("about.organization")}</li>

          {/* BLW Heritage */}
          <li>
            <Link to="/about/blw-heritage">{t("about.heritage")}</Link>
          </li>

          {/* Organizational Strength */}
          <li>
            <Link to="/about/organization-strength">{t("about.orgStrength")}</Link>
          </li>

          {/* Quality Assurance */}
          <li>
            <Link to="/about/quality">{t("about.qualityAssurance")}</Link>
          </li>

          {/* Department */}
          <li>
            <Link to="/about/Department">{t("about.department")}</Link>
          </li>

          {/* Milestones */}
          <li>
            <Link to="/about/milestones">{t("about.milestones")}</Link>
          </li>

          {/* Product for Sale - with submenu */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("productForSale")}>
              {t("about.productForSale.title")}
              <span>{isOpen2("productForSale") ? "▲" : "▼"}</span>
            </div>
            {isOpen2("productForSale") && (
              <ul className="submenu">
                <li>
                  <Link to="/about/product-for-sale/diesel-locomotive">{t("about.productForSale.dieselLocomotive")}</Link>
                </li>
                <li>
                  <Link to="/about/product-for-sale/dg-sets">{t("about.productForSale.dgSets")}</Link>
                </li>
                <li>
                  <Link to="/about/product-for-sale/contact-details">{t("about.productForSale.contactDetails")}</Link>
                </li>
                <li>
                  <Link to="/about/product-for-sale/previous-product">{t("about.productForSale.previousProduct")}</Link>
                </li>

                {/* Product Photograph - nested submenu */}
                <li>
                  <div className="submenu-toggle" onClick={() => toggleSubMenu("productPhotograph")}>
                    {t("about.productForSale.productPhotograph.title")}
                    <span>{isOpen2("productPhotograph") ? "▲" : "▼"}</span>
                  </div>
                  {isOpen2("productPhotograph") && (
                    <ul className="submenu">
                      <li>
                        <Link to="/about/product-for-sale/photographs/blw-product">{t("about.productForSale.productPhotograph.blwProduct")}</Link>
                      </li>
                      <li>
                        <Link to="/about/product-for-sale/photographs/export-locomotives">{t("about.productForSale.productPhotograph.exportLocomotives")}</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Photo Gallery */}
          <li>
            <Link to="/about/photo-gallery">{t("about.photoGallery")}</Link>
          </li>

          {/* Design & Development Capabilities */}
          <li>
            <Link to="/about/design">{t("about.designCapabilities")}</Link>
          </li>

          {/* Quality Policy */}
          <li>
            <Link to="/about/quality-policy">{t("about.qualityPolicy")}</Link>
          </li>

          {/* Portal Policies */}
          <li>
            <Link to="/about/portal">{t("about.portalPolicies")}</Link>
          </li>

          {/* SOP - with submenu */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("sop")}>
              {t("about.sop.title")}
              <span>{isOpen2("sop") ? "▲" : "▼"}</span>
            </div>
            {isOpen2("sop") && (
              <ul className="submenu">
                <li>
                  <Link to="/about/sop/model-sop">{t("about.sop.modelSop")}</Link>
                </li>
                <li>
                  <Link to="/about/sop/old-sop">{t("about.sop.oldSop")}</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Immovable Property Return - with submenu */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("immovableProperty")}>
              {t("about.immovablePropertyReturn.title")}
              <span>{isOpen2("immovableProperty") ? "▲" : "▼"}</span>
            </div>
            {isOpen2("immovableProperty") && (
              <ul className="submenu">
                <li>
                  <Link to="/about/immovable-property/administration">{t("about.immovablePropertyReturn.administration")}</Link>
                </li>
                <li>
                  <Link to="/about/immovable-property/stores">{t("about.immovablePropertyReturn.stores")}</Link>
                </li>
                <li>
                  <Link to="/about/immovable-property/electrical">{t("about.immovablePropertyReturn.electrical")}</Link>
                </li>
                <li>
                  <Link to="/about/immovable-property/mechanical">{t("about.immovablePropertyReturn.mechanical")}</Link>
                </li>
                <li>
                  <Link to="/about/immovable-property/medical">{t("about.immovablePropertyReturn.medical")}</Link>
                </li>
                <li>
                  <Link to="/about/immovable-property/accounts">{t("about.immovablePropertyReturn.accounts")}</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Visitors - with submenu */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("visitors")}>
              {t("about.visitors.title")}
              <span>{isOpen2("visitors") ? "▲" : "▼"}</span>
            </div>
            {isOpen2("visitors") && (
              <ul className="submenu">
                <li>
                  <Link to="/about/visitors/egatepass">{t("about.visitors.visitoregatepass")}</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Environmental / Social Orientation */}
          <li>
            <Link to="/about/environmental-social-orientation">{t("about.environmentalSocialOrientation")}</Link>
          </li>

          {/* BLW Calendar 2026 */}
          <li>
            <Link to="/about/blw-calendar-2026">{t("about.blwCalendar2026")}</Link>
          </li>

          {/* Swachh Bharat Mission */}
          <li>
            <Link to="/about/swachh-bharat-mission">{t("about.swachhBharatMission")}</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default AboutBar;