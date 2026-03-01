import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: t('nav.aboutBLW'),
      dropdown: [
        { label: t('about.briefHistory') },
        { label: t('about.organization') },
        { label: t('about.heritage') },
        { label: t('about.orgStrength') },
        { label: t('about.qualityAssurance') },
        { label: t('about.department') },
        { label: t('about.milestones') },
        { label: t('about.productForSale') },
        { label: t('about.designCapabilities') },
        { label: t('about.qualityPolicy') },
        { label: t('about.portalPolicies') },
        { label: t('about.photoGallery') },
      ],
    },
    {
      label: t('nav.department'),
      dropdown: [
        { label: t('departments.accounts') },
        { label: t('departments.civilEng') },
        { label: t('departments.electricalEng') },
        { label: t('departments.mechEng') },
        { label: t('departments.marketing') },
        { label: t('departments.medical') },
        { label: t('departments.personnel') },
        { label: t('departments.stores') },
        { label: t('departments.techTraining') },
        { label: t('departments.vigilance') },
        { label: t('departments.design') },
        { label: t('departments.safety') },
      ],
    },
    {
      label: t('nav.locoPortal'),
      dropdown: [
        { label: t('locoPortal.hhpSpares') },
        { label: t('locoPortal.designBulletin') },
        { label: t('locoPortal.warrantyClaim') },
        { label: t('locoPortal.nonRailway') },
      ],
    },
    {
      label: t('nav.tenderInfo'),
      dropdown: [
        { label: t('tender.materialMgmt') },
        { label: t('tender.liveTender') },
        { label: t('tender.awardedContracts') },
        { label: t('tender.tenders') },
        { label: t('tender.auctionInfo') },
        { label: t('tender.cppTenders') },
      ],
    },
    {
      label: t('nav.vendorInfo'),
      dropdown: [
        { label: t('vendor.draftSpec') },
        { label: t('vendor.login') },
        { label: t('vendor.billingStatus') },
        { label: t('vendor.billsFormat') },
        { label: t('vendor.vendorDirectory') },
        { label: t('vendor.newRegistration') },
        { label: t('vendor.guidelines') },
        { label: t('vendor.rejectionPolicy') },
        { label: t('vendor.approvalSystem') },
        { label: t('vendor.eftMandate') },
        { label: t('vendor.particulars') },
        { label: t('vendor.gst') },
      ],
    },
    {
      label: t('nav.newsEvents'),
      dropdown: [
        { label: t('news.announcements') },
        { label: t('news.annualReport') },
        { label: t('news.pressReleases') },
        { label: t('news.currentNews') },
        { label: t('news.achievements') },
        { label: t('news.civilDefence') },
        { label: t('news.tourism') },
      ],
    },
    {
      label: t('nav.contactUs'),
    },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="navbar__hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
        <ul className={`navbar__list${isOpen ? ' navbar__list--open' : ''}`}>
          {navItems.map((item, idx) => (
            <li className="navbar__item" key={idx}>
              <button className="navbar__link" tabIndex={0}>
                {item.label}
                {item.dropdown && (
                  <svg className="navbar__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </button>
              {item.dropdown && (
                <div className="navbar__dropdown" role="menu">
                  {item.dropdown.map((sub, subIdx) => (
                    <a
                      key={subIdx}
                      href={sub.href || '#'}
                      className="navbar__dropdown-link"
                      role="menuitem"
                      tabIndex={0}
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
