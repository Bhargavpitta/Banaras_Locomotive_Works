import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LocoPortalBar.css";

const LocoPortalBar = () => {
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

      <aside className={`locoportalbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          {/* HHP BIM Spares */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("hhpSpares")}>
              {t("locoPortal.hhpSpares.title")}
              <span>{isOpenMenu("hhpSpares") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("hhpSpares") && (
              <ul className="submenu">
                <li><Link to="/loco-portal/hhp-bim-spares/minutes-of-bim">{t("locoPortal.hhpSpares.minutesBIM2122")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/minutes-of-meeting">{t("locoPortal.hhpSpares.minutesMeeting")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/agenda-hhp-1920">{t("locoPortal.hhpSpares.agendaHHP1920")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/drawings-hhp">{t("locoPortal.hhpSpares.drawingsHHP")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/minutes-bim-1920">{t("locoPortal.hhpSpares.minutesBIM1920")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/minutes-bim-1718">{t("locoPortal.hhpSpares.minutesBIM1718")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/agenda-hhp-1718">{t("locoPortal.hhpSpares.agendaHHP1718")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/minutes-bim-1617">{t("locoPortal.hhpSpares.minutesBIM1617")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/railway-board-rsp">{t("locoPortal.hhpSpares.railwayBoardRSP")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/zonal-railway-rsp">{t("locoPortal.hhpSpares.zonalRailwayRSP")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/supply-balance">{t("locoPortal.hhpSpares.supplyBalance")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/forwarding-letter">{t("locoPortal.hhpSpares.forwardingLetter")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/additional-technical">{t("locoPortal.hhpSpares.additionalTechnical")}</Link></li>

                {/* Tooling Items - level 3 */}
                <li>
                  <div className="submenu-toggle" onClick={() => toggleSubMenu("toolingItems")}>
                    {t("locoPortal.hhpSpares.toolingItems.title")}
                    <span>{isOpenMenu("toolingItems") ? "▲" : "▼"}</span>
                  </div>
                  {isOpenMenu("toolingItems") && (
                    <ul className="submenu">
                      <li><Link to="/loco-portal/hhp-bim-spares/maintenance-tools">{t("locoPortal.hhpSpares.toolingItems.maintenanceTools")}</Link></li>
                      <li><Link to="/loco-portal/hhp-bim-spares/railway-board-letter">{t("locoPortal.hhpSpares.toolingItems.railwayBoardLetter")}</Link></li>
                      <li><Link to="/loco-portal/hhp-bim-spares/vendor-list">{t("locoPortal.hhpSpares.toolingItems.vendorList")}</Link></li>
                      <li><Link to="/loco-portal/hhp-bim-spares/covering-letter">{t("locoPortal.hhpSpares.toolingItems.coveringLetter")}</Link></li>
                      <li><Link to="/loco-portal/hhp-bim-spares/drawings-maintenance">{t("locoPortal.hhpSpares.toolingItems.drawingsMaintenance")}</Link></li>
                    </ul>
                  )}
                </li>

                <li><Link to="/loco-portal/hhp-bim-spares/vetted-indents">{t("locoPortal.hhpSpares.vettedIndents")}</Link></li>
                <li><Link to="/loco-portal/hhp-bim-spares/po-copy">{t("locoPortal.hhpSpares.poCopy")}</Link></li>
              </ul>
            )}
          </li>

          {/* Design Bulletin */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("designBulletin")}>
              {t("locoPortal.designBulletin.title")}
              <span>{isOpenMenu("designBulletin") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("designBulletin") && (
              <ul className="submenu">
                <li><Link to="/loco-portal/design-bulletin/vehicle">{t("locoPortal.designBulletin.vehicle")}</Link></li>
                <li><Link to="/loco-portal/design-bulletin/engine">{t("locoPortal.designBulletin.engine")}</Link></li>
                <li><Link to="/loco-portal/design-bulletin/electrical">{t("locoPortal.designBulletin.electrical")}</Link></li>
              </ul>
            )}
          </li>

          {/* Warranty Claim */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("warrantyClaim")}>
              {t("locoPortal.warrantyClaim.title")}
              <span>{isOpenMenu("warrantyClaim") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("warrantyClaim") && (
              <ul className="submenu">
                <li><Link to="#">{t("locoPortal.warrantyClaim.electricLoco")}</Link></li>
                <li><Link to="https://blw.indianrailways.gov.in/works/webadmin/index.jsp">{t("locoPortal.warrantyClaim.dieselLoco")}</Link></li>
                <li><Link to="/loco-portal/warranty-claim/vendor-login">{t("locoPortal.warrantyClaim.vendorLogin")}</Link></li>
              </ul>
            )}
          </li>

          {/* Non Railway */}
          <li>
            <Link to="/loco-portal/non-railway-customer">{t("locoPortal.nonRailway")}</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default LocoPortalBar;