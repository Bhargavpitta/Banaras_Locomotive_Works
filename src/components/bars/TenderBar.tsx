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
              {t("tender.materialMgmt.title")}
              <span>{isOpenMenu("materialMgmt") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("materialMgmt") && (
              <ul className="submenu">
                <li><Link to="#">{t("tender.materialMgmt.tenderNotice")}</Link></li>
                <li><Link to="#">{t("tender.materialMgmt.downloadDrawings")}</Link></li>
              </ul>
            )}
          </li>

          {/* Live Tender */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("liveTender")}>
              {t("tender.liveTender.title")}
              <span>{isOpenMenu("liveTender") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("liveTender") && (
              <ul className="submenu">
                <li><Link to="#">{t("tender.liveTender.electrical")}</Link></li>
              </ul>
            )}
          </li>

          {/* Awarded Contracts */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("awardedContracts")}>
              {t("tender.awardedContracts.title")}
              <span>{isOpenMenu("awardedContracts") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("awardedContracts") && (
              <ul className="submenu">
                <li><Link to="#">{t("tender.awardedContracts.mechanical")}</Link></li>
                <li><Link to="#">{t("tender.awardedContracts.engineering")}</Link></li>
              </ul>
            )}
          </li>

          {/* Plain items */}
          <li><Link to="#">{t("tender.blwItemsGTE")}</Link></li>
          <li><Link to="#">{t("tender.blwHHPItems")}</Link></li>
          <li><Link to="#">{t("tender.list48HHP")}</Link></li>
          <li><Link to="#">{t("tender.procurementLash")}</Link></li>
          <li><Link to="#">{t("tender.procurementGTE2530")}</Link></li>
          <li><Link to="#">{t("tender.tenders")}</Link></li>
          <li><Link to="#">{t("tender.auctionInfo")}</Link></li>
          <li><Link to="#">{t("tender.cppTenders")}</Link></li>
          <li><Link to="#">{t("tender.procurementGTE2425")}</Link></li>
          <li><Link to="#">{t("tender.gteAdditional")}</Link></li>
          <li><Link to="#">{t("tender.procurementGTE2732")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default TenderBar;