import { useState, useEffect } from "react";
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
<<<<<<< HEAD

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
=======
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
>>>>>>> c562898f74bd0e1c2a8937a3e5c445d7fe9dc445

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleDropdown = (index: number) => {
    if (!isMobile) return; // Desktop dropdown is hover
    setActiveDropdown(prev => (prev === index ? null : index));
  };

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
        /*{ label: t("about.SOP")},
        {label: t("about.Immovable property return by officer as on 01.01.2022")},
        {label: t("about.Visitors")},
        {label: t("about.Environmental/Social Orientation ")},
        {label: t("about.Photo Gallary")},
        {label: t("about.B.L.W Calendar")},
        {label: t("about.Swatchh Bharat Mission")} */
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
        {label: t("locoportal.procur")}
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
<<<<<<< HEAD
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Hamburger / Close Button */}
        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__close" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          )}
        </button>

        <ul className={`navbar__list ${menuOpen ? "navbar__list--open" : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`navbar__item ${activeDropdown === index ? "navbar__item--open" : ""}`}
            >
              <button
                className="navbar__link"
                onClick={() => toggleDropdown(index)}
              >
                {item.label}
                {item.dropdown && <span className="navbar__arrow">▾</span>}
              </button>

              {item.dropdown && (
                <div className="navbar__dropdown">
                  {item.dropdown.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href || "#"}
                      className="navbar__dropdown-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
=======
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveMenu(null);
          }}
        >
          ☰
        </button>

        {/* MAIN MENU */}
        <ul className={`navbar__list ${isOpen ? 'navbar__list--open' : ''}`}>

          {activeMenu === null &&
            navItems.map((item, idx) => (
              <li className="navbar__item" key={idx}>
                <button
                  className="navbar__link"
                  onClick={() => {
                    if (item.dropdown) {
                      setActiveMenu(idx);
                    }
                  }}
                >
                  {item.label}
                </button>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="navbar__dropdown">
                    {item.dropdown.map((sub, i) => (
                      <a key={i} href="#" className="navbar__dropdown-link">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}

          {/* MOBILE SUBMENU */}
          {activeMenu !== null && (
            <div className="navbar__mobile-submenu">

              <button
                className="navbar__back"
                onClick={() => setActiveMenu(null)}
              >
                ← Back
              </button>

              {navItems[activeMenu].dropdown?.map((sub, i) => (
                <a
                  key={i}
                  href="#"
                  className="navbar__dropdown-link"
                  onClick={() => {
                    setActiveMenu(null);
                    setIsOpen(false);
                  }}
                >
                  {sub.label}
                </a>
              ))}

            </div>
          )}

>>>>>>> c562898f74bd0e1c2a8937a3e5c445d7fe9dc445
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;