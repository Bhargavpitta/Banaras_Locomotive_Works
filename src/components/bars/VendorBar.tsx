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
          <li><Link to="#">{t("vendor.draftSpec")}</Link></li>
          <li><Link to="#">{t("vendor.login")}</Link></li>
          <li><Link to="#">{t("vendor.billingStatus")}</Link></li>
          <li><Link to="#">{t("vendor.billsFormat")}</Link></li>
          <li><Link to="#">{t("vendor.detailsBills")}</Link></li>

          {/* Vendor Directory */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("vendorDirectory")}>
              {t("vendor.vendorDirectory.title")}
              <span>{isOpenMenu("vendorDirectory") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("vendorDirectory") && (
              <ul className="submenu">
                <li><Link to="#">{t("vendor.vendorDirectory.currentDirectory")}</Link></li>
                <li><Link to="#">{t("vendor.vendorDirectory.previousDirectories")}</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="#">{t("vendor.newRegistration")}</Link></li>
          <li><Link to="#">{t("vendor.guidelines")}</Link></li>
          <li><Link to="#">{t("vendor.rejectionPolicy")}</Link></li>
          <li><Link to="#">{t("vendor.approvalSystem")}</Link></li>
          <li><Link to="#">{t("vendor.eftMandate")}</Link></li>
          <li><Link to="#">{t("vendor.particulars")}</Link></li>
          <li><Link to="#">{t("vendor.gst")}</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default VendorBar;