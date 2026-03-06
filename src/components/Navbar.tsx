import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // ── Scroll: add shadow when page is scrolled ────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Lock body scroll when mobile drawer is open ─────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  // ── Nav items ───────────────────────────────────────────────────────────
  const navItems: NavItem[] = [
    {
      label: t("nav.aboutBLW"),
      dropdown: [
        { label: t("about.briefHistory") },
        { label: t("about.organization") },
        { label: t("about.heritage") },
        { label: t("about.orgStrength") },
        { label: t("about.qualityAssurance") },
        { label: t("about.department") },
        { label: t("about.milestones") },
        { label: t("about.productForSale") },
        { label: t("about.designCapabilities") },
        { label: t("about.qualityPolicy") },
        { label: t("about.portalPolicies") },
      ],
    },
    {
      label: t("nav.department"),
      dropdown: [
        { label: t("departments.accounts") },
        { label: t("departments.civilEng") },
        { label: t("departments.electricalEng") },
        { label: t("departments.mechEng") },
        { label: t("departments.marketing") },
        { label: t("departments.medical") },
        { label: t("departments.personnel") },
        { label: t("departments.stores") },
        { label: t("departments.techTraining") },
        { label: t("departments.vigilance") },
        { label: t("departments.design") },
        { label: t("departments.safety") },
      ],
    },
    {
      label: t("nav.locoPortal"),
      dropdown: [
        { label: t("locoPortal.hhpSpares") },
        { label: t("locoPortal.designBulletin") },
        { label: t("locoPortal.warrantyClaim") },
        { label: t("locoPortal.nonRailway") },
        { label: t("locoportal.procur") },
      ],
    },
    {
      label: t("nav.tenderInfo"),
      dropdown: [
        { label: t("tender.materialMgmt") },
        { label: t("tender.liveTender") },
        { label: t("tender.awardedContracts") },
        { label: t("tender.tenders") },
        { label: t("tender.auctionInfo") },
        { label: t("tender.cppTenders") },
      ],
    },
    {
      label: t("nav.vendorInfo"),
      dropdown: [
        { label: t("vendor.draftSpec") },
        { label: t("vendor.login") },
        { label: t("vendor.billingStatus") },
        { label: t("vendor.billsFormat") },
        { label: t("vendor.vendorDirectory") },
        { label: t("vendor.newRegistration") },
        { label: t("vendor.guidelines") },
        { label: t("vendor.rejectionPolicy") },
        { label: t("vendor.approvalSystem") },
        { label: t("vendor.eftMandate") },
        { label: t("vendor.particulars") },
        { label: t("vendor.gst") },
      ],
    },
    {
      label: t("nav.newsEvents"),
      dropdown: [
        { label: t("news.announcements") },
        { label: t("news.annualReport") },
        { label: t("news.pressReleases") },
        { label: t("news.currentNews") },
        { label: t("news.achievements") },
        { label: t("news.civilDefence") },
        { label: t("news.tourism") },
      ],
    },
    {
      label: t("nav.contactUs"),
    },
  ];

  return (
    <>
      {/* ── Dark backdrop: tap anywhere outside drawer to close ── */}
      <div
        className={`navbar__backdrop${isOpen ? " navbar__backdrop--visible" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__inner">

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => {
              setIsOpen((prev) => !prev);
              setActiveMenu(null);
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* ── DESKTOP + MOBILE MAIN LIST ── */}
          <ul className={`navbar__list${isOpen ? " navbar__list--open" : ""}`}>

            {/* Main items — hidden on mobile when a submenu is active */}
            {navItems.map((item, idx) => (
              <li
                className={`navbar__item${activeMenu === idx ? " navbar__item--active" : ""}`}
                key={idx}
              >
                <button
                  className="navbar__link"
                  onClick={() => {
                    if (item.dropdown) {
                      // Mobile: show submenu panel
                      if (window.innerWidth <= 768) {
                        setActiveMenu(idx);
                      }
                    } else {
                      closeAll();
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="navbar__arrow" aria-hidden="true">›</span>
                  )}
                </button>

                {/* Desktop dropdown (CSS hover) */}
                {item.dropdown && (
                  <div className="navbar__dropdown">
                    {item.dropdown.map((sub, i) => (
                      <a key={i} href={sub.href ?? "#"} className="navbar__dropdown-link">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}

          </ul>

          {/* ── MOBILE SUBMENU PANEL ── */}
          {activeMenu !== null && navItems[activeMenu]?.dropdown && (
            <div className="navbar__mobile-submenu navbar__mobile-submenu--open">
              {/* Header row */}
              <div className="navbar__submenu-header">
                <button
                  className="navbar__back"
                  onClick={() => setActiveMenu(null)}
                >
                  ← Back
                </button>
                <span className="navbar__submenu-title">
                  {navItems[activeMenu].label}
                </span>
              </div>

              {/* Scrollable link list */}
              <div className="navbar__submenu-scroll">
                {navItems[activeMenu].dropdown!.map((sub, i) => (
                  <a
                    key={i}
                    href={sub.href ?? "#"}
                    className="navbar__dropdown-link"
                    onClick={closeAll}
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
