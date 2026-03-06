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

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Toggle dropdown
  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // All nav items with full dropdowns
  const navItems: NavItem[] = [
    {
      label: t("nav.aboutBLW"),
      dropdown: [
        { label: t("about.briefHistory"), href: "/about/brief-history" },
        { label: t("about.organization") },
        { label: t("about.heritage") },
        { label: t("about.orgStrength"), href: "/about/organization-strength" },
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
        { label: t("locoPortal.procur") },
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
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
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
                onClick={() => item.dropdown && toggleDropdown(index)}
              >
                {item.label}
                {item.dropdown && <span className="navbar__arrow">▾</span>}
              </button>

              {item.dropdown && activeDropdown === index && (
                <div className="navbar__dropdown">
                  {item.dropdown.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href || "#"}
                      className="navbar__dropdown-link"
                      onClick={closeAll}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;