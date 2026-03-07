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

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navBottom, setNavBottom] = useState(60); // tracks real bottom of navbar
  const navRef = useRef<HTMLElement>(null);

  // Track navbar's bottom position so drawer always starts right below it
  useEffect(() => {
    const updateNavBottom = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavBottom(rect.bottom);
      }
    };
    updateNavBottom();
    window.addEventListener("resize", updateNavBottom);
    window.addEventListener("scroll", updateNavBottom, { passive: true });
    return () => {
      window.removeEventListener("resize", updateNavBottom);
      window.removeEventListener("scroll", updateNavBottom);
    };
  }, []);

  // Detect scroll for style change
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

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems: NavItem[] = [
    {
      label: t("nav.aboutBLW"),
      dropdown: [
        { label: t("about.briefHistory"), href: "/about/brief-history" },
        { label: t("about.organization") },
        { label: t("about.heritage"), href:"/about/blw-heritage"},
        { label: t("about.orgStrength"), href: "/about/organization-strength" },
        { label: t("about.qualityAssurance"), href:"/about/quality" },
        { label: t("about.department"), href:"/about/Department" },
        { label: t("about.milestones"),href:"/about/milestones" },
        { label: t("about.productForSale") },
        { label: t("about.designCapabilities"), href:"/about/design" },
        { label: t("about.qualityPolicy"), href:"/about/quality" },
        { label: t("about.portalPolicies"), href:"/about/portal"},
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

  // Inline styles for drawer & overlay — driven by real navbar bottom position
  const drawerStyle: React.CSSProperties = {
    top: navBottom,
    height: `calc(100vh - ${navBottom}px)`,
  };

  const overlayStyle: React.CSSProperties = {
    top: navBottom,
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {/* Overlay rendered only when menu is open */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          style={overlayStyle}
          onClick={closeAll}
          aria-hidden="true"
        />
      )}

      <div className="navbar__inner">

        {/* Hamburger / Close Button */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          )}
        </button>

        <ul
          className={`navbar__list ${menuOpen ? "navbar__list--open" : ""}`}
          style={menuOpen ? drawerStyle : undefined}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`navbar__item ${activeDropdown === index ? "navbar__item--open" : ""}`}
            >
              <button
                className="navbar__link"
                onClick={() => item.dropdown ? toggleDropdown(index) : closeAll()}
              >
                {item.label}
                {item.dropdown && (
                  <span className="navbar__arrow">▾</span>
                )}
              </button>

              {item.dropdown && (
                <div
                  className={`navbar__dropdown ${activeDropdown === index ? "navbar__dropdown--open" : ""}`}
                >
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