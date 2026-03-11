import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./TenderBar.css";

const TenderBar = () => {
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

      <aside className={`tenderbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          {/* Material Management */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("materialMgmt")}>
              <Link to="/tender/material-management"></Link>{t("tender.materialMgmt.title")}
              <span>{isOpenMenu("materialMgmt") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("materialMgmt") && (
              <ul className="submenu">
                <li><Link to="/tender/material-management/tender-notice">{t("tender.materialMgmt.tenderNotice")}</Link></li>
                <li><Link to="/tender/material-management/download-drawings">{t("tender.materialMgmt.downloadDrawings")}</Link></li>
              </ul>
            )}
          </li>

          {/* Live Tender */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("liveTender")}>
               <Link to="/tender/live-tender"></Link>{t("tender.liveTender.title")}
              <span>{isOpenMenu("liveTender") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("liveTender") && (
              <ul className="submenu">
                <li><Link to="/tender/live-tender/electrical">{t("tender.liveTender.electrical")}</Link></li>
              </ul>
            )}
          </li>

          {/* Awarded Contracts */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("awardedContracts")}>
               <Link to="/tender/awarded-contracts"></Link>{t("tender.awardedContracts.title")}
              <span>{isOpenMenu("awardedContracts") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("awardedContracts") && (
              <ul className="submenu">
                <li><Link to="/tender/awarded-contracts/mechanical">{t("tender.awardedContracts.mechanical")}</Link></li>
                <li><Link to="/tender/awarded-contracts/engineering">{t("tender.awardedContracts.engineering")}</Link></li>
              </ul>
            )}
          </li>

          {/* Plain items */}
          <li><Link to="/tender/blw-items-gte">{t("tender.blwItemsGTE")}</Link></li>
          <li><Link to="/tender/blw-hhp-items">{t("tender.blwHHPItems")}</Link></li>
          <li><Link to="/tender/list-48-hhp">{t("tender.list48HHP")}</Link></li>
          <li><Link to="/tender/procurement-lash">{t("tender.procurementLash")}</Link></li>
          <li><Link to="/tender/procurement-gte-2530">{t("tender.procurementGTE2530")}</Link></li>
          <li><Link to="/tender/tenders">{t("tender.tenders")}</Link></li>
          <li><Link to="/tender/auction-informations">{t("tender.auctionInfo")}</Link></li>
          <li><Link to="/tender/cpp-tenders">{t("tender.cppTenders")}</Link></li>
          <li><Link to="/tender/procurement-gte-2425">{t("tender.procurementGTE2425")}</Link></li>
          <li><Link to="/tender/gte-additional">{t("tender.gteAdditional")}</Link></li>
          <li><Link to="/tender/procurement-gte-2732">{t("tender.procurementGTE2732")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default TenderBar;