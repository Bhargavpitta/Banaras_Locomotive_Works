import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./VendorBar.css";

const VendorBar = () => {
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

      <aside className={`vendorbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          <li><Link to="/vendor/draft-specification">{t("vendor.draftSpec")}</Link></li>
          <li><Link to="/vendor/login">{t("vendor.login")}</Link></li>
          <li><Link to="/vendor/billing-status">{t("vendor.billingStatus")}</Link></li>
          <li><Link to="/vendor/bills-format">{t("vendor.billsFormat")}</Link></li>
          <li><Link to="/vendor/details-bills">{t("vendor.detailsBills")}</Link></li>

          {/* Vendor Directory */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("vendorDirectory")}>
              {t("vendor.vendorDirectory.title")}
              <span>{isOpenMenu("vendorDirectory") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("vendorDirectory") && (
              <ul className="submenu">
                <li><Link to="/vendor/vendor-directory/current">{t("vendor.vendorDirectory.currentDirectory")}</Link></li>
                <li><Link to="/vendor/vendor-directory/previous">{t("vendor.vendorDirectory.previousDirectories")}</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/vendor/new-registration">{t("vendor.newRegistration")}</Link></li>
          <li><Link to="/vendor/guidelines">{t("vendor.guidelines")}</Link></li>
          <li><Link to="/vendor/rejection-policy">{t("vendor.rejectionPolicy")}</Link></li>
          <li><Link to="/vendor/approval-system">{t("vendor.approvalSystem")}</Link></li>
          <li><Link to="/vendor/eft-mandate">{t("vendor.eftMandate")}</Link></li>
          <li><Link to="/vendor/particulars">{t("vendor.particulars")}</Link></li>
          <li><Link to="/vendor/gst">{t("vendor.gst")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default VendorBar;