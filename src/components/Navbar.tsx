import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

interface SubSubDropdownItem {
  label: string;
  href?: string;
}

interface SubDropdownItem {
  label: string;
  href?: string;
  subDropdown?: SubSubDropdownItem[];
}

interface DropdownItem {
  label: string;
  href?: string;
  subDropdown?: SubDropdownItem[];
}

interface NavItem {
  label: string;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navBottom, setNavBottom] = useState(60);
  const navRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubDropdown(null);
    setActiveSubSubDropdown(null);
  };

  const toggleSubDropdown = (key: string) => {
    setActiveSubDropdown(activeSubDropdown === key ? null : key);
    setActiveSubSubDropdown(null);
  };

  const toggleSubSubDropdown = (key: string) => {
    setActiveSubSubDropdown(activeSubSubDropdown === key ? null : key);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setActiveSubSubDropdown(null);
  };

  const navItems: NavItem[] = [
    /*---------------------------------------------ABOUT SECTION----------------------------------------------*/ 

    {
      label: t("nav.aboutBLW"),
      dropdown: [
        { label: t("about.briefHistory"), href: "/about/brief-history" },
        { label: t("about.organization") },
        { label: t("about.heritage"), href: "/about/blw-heritage" },
        { label: t("about.orgStrength"), href: "/about/organization-strength" },
        { label: t("about.qualityAssurance"), href: "/about/quality" },
        { label: t("about.department"), href: "/about/Department" },
        { label: t("about.milestones"), href: "/about/milestones" },
        {
          label: t("about.productForSale.title"),
          href: "/about/product-for-sale",
          subDropdown: [
            { label: t("about.productForSale.dieselLocomotive"), href: "/about/product-for-sale/diesel-locomotive" },
            { label: t("about.productForSale.dgSets"), href: "/about/product-for-sale/dg-sets" },
            { label: t("about.productForSale.contactDetails"), href: "/about/product-for-sale/contact-details" },
            { label: t("about.productForSale.previousProduct"), href: "/about/product-for-sale/previous-product" },
            {
              label: t("about.productForSale.productPhotograph.title"),
              href: "/about/product-for-sale/photographs",
              subDropdown: [
                { label: t("about.productForSale.productPhotograph.blwProduct"), href: "/about/product-for-sale/photographs/blw-product" },
                { label: t("about.productForSale.productPhotograph.exportLocomotives"), href: "/about/product-for-sale/photographs/export-locomotives" },
              ],
            },
          ],
        },
        {label:t("about.photoGallery"), href:"/about/photo-gallery"},
        { label: t("about.designCapabilities"), href: "/about/design" },
        { label: t("about.qualityPolicy"), href: "/about/quality-policy" },
        { label: t("about.portalPolicies"), href: "/about/portal" },
        {
         label: t("about.sop.title"),
         subDropdown: [
         { label: t("about.sop.modelSop"), href: "/about/sop/model-sop" },
         { label: t("about.sop.oldSop"), href: "/about/sop/old-sop" },
         ],
       },
      {
      label: t("about.immovablePropertyReturn.title"),
      subDropdown: [
        { label: t("about.immovablePropertyReturn.administration"), href: "/about/immovable-property/administration" },
        { label: t("about.immovablePropertyReturn.stores"), href: "/about/immovable-property/stores" },
        { label: t("about.immovablePropertyReturn.electrical"), href: "/about/immovable-property/electrical" },
        { label: t("about.immovablePropertyReturn.mechanical"), href: "/about/immovable-property/mechanical" },
        { label: t("about.immovablePropertyReturn.medical"), href: "/about/immovable-property/medical" },
        { label: t("about.immovablePropertyReturn.accounts"), href: "/about/immovable-property/accounts" },
      ],
    },
    {
  label: t("about.visitors.title"),
  subDropdown: [
    { label: t("about.visitors.visitoregatepass"), href: "/about/visitors/egatepass" },
  ],
},
    { label: t("about.environmentalSocialOrientation"), href: "/about/environmental-social-orientation" },
    { label: t("about.blwCalendar2026"), href: "/about/blw-calendar-2026" },
    { label: t("about.swachhBharatMission"), href: "/about/swachh-bharat-mission" }


     ]
    },

    /*-------------------------------------DEPARTMENT SECTION--------------------------------------------*/

    {
  label: t("nav.department"),
  dropdown: [
    {
      label: t("departments.accounts.title"),
      subDropdown: [
        { label: t("departments.accounts.billsFormat"), href: "/departments/accounts/bills-format" },
        { label: t("departments.accounts.codesManuals"), href: "/departments/accounts/codes-manuals" },
        { label: t("departments.accounts.eftMandate"), href: "/departments/accounts/eft-mandate" },
        { label: t("departments.accounts.declarationNonApplicability"), href: "/departments/accounts/declaration" },
        { label: t("departments.accounts.amendmentTurnover"), href: "/departments/accounts/amendment-turnover" },
        { label: t("departments.accounts.assetRegister"), href: "/departments/accounts/asset-register" },
        { label: t("departments.accounts.selectionNotice"), href: "/departments/accounts/selection-notice" },
      ],
    },
    {
      label: t("departments.civilEng.title"),
      subDropdown: [
        { label: t("departments.civilEng.eliminationManualScavenging"), href: "/departments/civil-engineering/manual-scavenging" },
      ],
    },
    { label: t("departments.electricalEng"), href:"/departments/electrical-engineering" },
    {
      label: t("departments.mechEng.title"),
      subDropdown: [
        { label: t("departments.mechEng.manufacturingProcess"), href: "/departments/mechanical/manufacturing-process" },
        { label: t("departments.mechEng.orgStructure"), href: "/departments/mechanical/org-structure" },
        { label: t("departments.mechEng.nonMovingItems"), href: "/departments/mechanical/non-moving-items" },
      ],
    },
    {
      label: t("departments.marketing.title"),
      subDropdown: [
        { label: t("departments.marketing.marketingDivision"), href: "/departments/marketing/division" },
      ],
    },
    {
      label: t("departments.medical.title"),
      subDropdown: [
        { label: t("departments.medical.registrationFirm"), href: "/departments/medical/registration-firm" },
      ],
    },
    {
  label: t("departments.personnel.title"),
  subDropdown: [
    { label: t("departments.personnel.railwayServices"), href: "#" },
    { label: t("departments.personnel.gazettedTransferOrders"), href: "#" },
    { label: t("departments.personnel.cadrePosition"), href: "#" },
    { label: t("departments.personnel.recruitmentSection"), href: "#" },
    { label: t("departments.personnel.staffWelfare"), href: "#" },
    { label: t("departments.personnel.importantLetterNotice"), href: "#" },
    { label: t("departments.personnel.selectionNotice"), href: "#" },
    { label: t("departments.personnel.importantFormEmployee"), href: "#" },
    { label: t("departments.personnel.gazettedSection"), href: "#" },
    { label: t("departments.personnel.seniorityList"), href: "#" },
    { label: t("departments.personnel.publicGrievances"), href: "#" },
    {
      label: t("departments.personnel.establishmentCircular.title"),
      subDropdown: [
        { label: t("departments.personnel.establishmentCircular.allCirculars"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.passRule"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.recruitment"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.promotion"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.miscellaneous"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.allowances"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.advances"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.settlement"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.leaveRule"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.welfare"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.reservation"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.conductRules"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.irem"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.medicalRule"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.masterCircular"), href: "#" },
        { label: t("departments.personnel.establishmentCircular.irec"), href: "#" },
      ],
    },
    { label: t("departments.personnel.jpoCMP"), href: "#" },
    {
      label: t("departments.personnel.recruitmentRoster.title"),
      subDropdown: [
        { label: t("departments.personnel.recruitmentRoster.accountsDept"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.personnelDept"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.civilEng"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.electricalEng"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.mechEng"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.storesDept"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.generalAdmin"), href: "#" },
        { label: t("departments.personnel.recruitmentRoster.medicalDept"), href: "#" },
      ],
    },
    { label: t("departments.personnel.settlementSec"), href: "#" },
    { label: t("departments.personnel.revisedRules"), href: "#" },
    { label: t("departments.personnel.sexualHarassment"), href: "#" },
    { label: t("departments.personnel.staffCouncil"), href: "#" },
  ],
},
    {
      label: t("departments.rajbhasha.title"),
      subDropdown: [
        { label: t("departments.rajbhasha.barekaDarpan31"), href: "#" },
        { label: t("departments.rajbhasha.barekaDarpan32"), href: "#" },
        { label: t("departments.rajbhasha.barekaDarpan33"), href: "#" },
        { label: t("departments.rajbhasha.barekaDarpan34"), href: "#" },
        { label: t("departments.rajbhasha.barekaDarpan35"), href: "#" },
        { label: t("departments.rajbhasha.barekaDarpan36"), href: "#" },
        { label: t("departments.rajbhasha.listOfBooks"), href: "#" },
        { label: t("departments.rajbhasha.gmMessage2023"), href: "#" },
        { label: t("departments.rajbhasha.questionBank"), href: "#" },
        { label: t("departments.rajbhasha.narakas"), href: "#" },
        { label: t("departments.rajbhasha.gmMessage2024"), href: "#" },
        { label: t("departments.rajbhasha.rajbhashaPakhwada"), href: "#" },
        { label: t("departments.rajbhasha.gmMessage2025"), href: "#" },
      ],
    },
    {
      label: t("departments.stores.title"),
      subDropdown: [
        { label: t("departments.stores.suspendedFirms"), href: "#" },
        { label: t("departments.stores.tenderDocuments"), href: "#" },
        { label: t("departments.stores.postContractMatter"), href: "#" },
        { label: t("departments.stores.plUnification"), href: "#" },
        { label: t("departments.stores.checklistBills"), href: "#" },
        { label: t("departments.stores.inactiveSurplus"), href: "#" },
        { label: t("departments.stores.nonMovingHighValue"), href: "#" },
        { label: t("departments.stores.gstChange"), href: "#" },
        { label: t("departments.stores.estimatedTender"), href: "#" },
        { label: t("departments.stores.excessHighValue"), href: "#" },
        { label: t("departments.stores.rejectionPolicy"), href: "#" },
        { label: t("departments.stores.videoAssembly"), href: "#" },
        { label: t("departments.stores.tentativeRequirement"), href: "#" },
        { label: t("departments.stores.irsConditions"), href: "#" },
      ],
    },
    {
      label: t("departments.techTraining.title"),
      subDropdown: [
        { label: t("departments.techTraining.ttcBrochure"), href: "#" },
        { label: t("departments.techTraining.weldorNomination"), href: "#" },
        { label: t("departments.techTraining.questionBank"), href: "#" },
        { label: t("departments.techTraining.trainingCalender"), href: "#" },
        { label: t("departments.techTraining.internshipTraining"), href: "#" },
      ],
    },
    {
      label: t("departments.vigilance.title"),
      subDropdown: [
        { label: t("departments.vigilance.awarenessWeek"), href: "#" },
        { label: t("departments.vigilance.organization"), href: "#" },
        { label: t("departments.vigilance.systemImprovements"), href: "#" },
        { label: t("departments.vigilance.bulletin"), href: "#" },
        { label: t("departments.vigilance.complaintPolicy"), href: "#" },
        { label: t("departments.vigilance.selections"), href: "#" },
        { label: t("departments.vigilance.rtiInfo"), href: "#" },
      ],
    },
    {
      label: t("departments.design.title"),
      subDropdown: [
        { label: t("departments.design.videoMounting"), href: "#" },
        { label: t("departments.design.eoiConversion"), href: "#" },
        { label: t("departments.design.eoiUpgradation"), href: "#" },
      ],
    },
    { label: t("departments.safety") },
  ],
},

/*------------------------------------- LOCOPORTAL SECTION----------------------------------------------*/ 


    {
  label: t("nav.locoPortal"),
  dropdown: [
    {
      label: t("locoPortal.hhpSpares.title"),
      subDropdown: [
        { label: t("locoPortal.hhpSpares.minutesBIM2122"), href: "/loco-portal/hhp-bim-spares/minutes-of-bim" },
        { label: t("locoPortal.hhpSpares.minutesMeeting"), href: "/loco-portal/hhp-bim-spares/minutes-of-meeting" },
        { label: t("locoPortal.hhpSpares.agendaHHP1920"), href: "/loco-portal/hhp-bim-spares/agenda-hhp-1920" },
        { label: t("locoPortal.hhpSpares.drawingsHHP"), href: "/loco-portal/hhp-bim-spares/drawings-hhp" },
        { label: t("locoPortal.hhpSpares.minutesBIM1920"), href: "/loco-portal/hhp-bim-spares/minutes-bim-1920" },
        { label: t("locoPortal.hhpSpares.minutesBIM1718"), href: "/loco-portal/hhp-bim-spares/minutes-bim-1718" },
        { label: t("locoPortal.hhpSpares.agendaHHP1718"), href: "/loco-portal/hhp-bim-spares/agenda-hhp-1718" },
        { label: t("locoPortal.hhpSpares.minutesBIM1617"), href: "/loco-portal/hhp-bim-spares/minutes-bim-1617" },
        { label: t("locoPortal.hhpSpares.railwayBoardRSP"), href: "/loco-portal/hhp-bim-spares/railway-board-rsp" },
        { label: t("locoPortal.hhpSpares.zonalRailwayRSP"), href: "/loco-portal/hhp-bim-spares/zonal-railway-rsp" },
        { label: t("locoPortal.hhpSpares.supplyBalance"), href: "/loco-portal/hhp-bim-spares/supply-balance" },
        { label: t("locoPortal.hhpSpares.forwardingLetter"), href: "/loco-portal/hhp-bim-spares/forwarding-letter" },
        { label: t("locoPortal.hhpSpares.additionalTechnical"), href: "/loco-portal/hhp-bim-spares/additional-technical" },
        {
          label: t("locoPortal.hhpSpares.toolingItems.title"),
          subDropdown: [
            { label: t("locoPortal.hhpSpares.toolingItems.maintenanceTools"), href: "/loco-portal/hhp-bim-spares/maintenance-tools" },
            { label: t("locoPortal.hhpSpares.toolingItems.railwayBoardLetter"), href: "/loco-portal/hhp-bim-spares/railway-board-letter" },
            { label: t("locoPortal.hhpSpares.toolingItems.vendorList"), href: "/loco-portal/hhp-bim-spares/vendor-list" },
            { label: t("locoPortal.hhpSpares.toolingItems.coveringLetter"), href: "/loco-portal/hhp-bim-spares/covering-letter" },
            { label: t("locoPortal.hhpSpares.toolingItems.drawingsMaintenance"), href: "/loco-portal/hhp-bim-spares/drawings-maintenance" },
          ],
        },
        { label: t("locoPortal.hhpSpares.vettedIndents"), href: "/loco-portal/hhp-bim-spares/vetted-indents" },
        { label: t("locoPortal.hhpSpares.poCopy"), href: "/loco-portal/hhp-bim-spares/po-copy" },
      ],
    },
    {
      label: t("locoPortal.designBulletin.title"),
      subDropdown: [
        { label: t("locoPortal.designBulletin.vehicle"), href: "/loco-portal/design-bulletin/vehicle" },
        { label: t("locoPortal.designBulletin.engine"), href: "/loco-portal/design-bulletin/engine" },
        { label: t("locoPortal.designBulletin.electrical"), href: "/loco-portal/design-bulletin/electrical" },
      ],
    },
    {
      label: t("locoPortal.warrantyClaim.title"),
      subDropdown: [
        { label: t("locoPortal.warrantyClaim.electricLoco"), href: "#" },
        { label: t("locoPortal.warrantyClaim.dieselLoco"), href: "https://blw.indianrailways.gov.in/works/webadmin/index.jsp" },
        { label: t("locoPortal.warrantyClaim.vendorLogin"), href: "/loco-portal/warranty-claim/vendor-login" },
      ],
    },
    { label: t("locoPortal.nonRailway"), href: "/loco-portal/non-railway-customer" },
  ],
},

/*------------------------------------------------------------ TENDER SECTION -------------------------------*/ 

    {
  label: t("nav.tenderInfo"),
  dropdown: [
    {
       label: t("tender.materialMgmt.title"), 
       href: "/tender/material-management",
      subDropdown: [
        { label: t("tender.materialMgmt.tenderNotice"), href: "/tender/material-management/tender-notice" },
        { label: t("tender.materialMgmt.downloadDrawings"), href: "/tender/material-management/download-drawings" },
      ],
    },
    {
      label: t("tender.liveTender.title"),
      href: "/tender/live-tender",
      subDropdown: [
        { label: t("tender.liveTender.electrical"), href: "/tender/live-tender/electrical" },
      ],
    },
    {
      label: t("tender.awardedContracts.title"),
      href: "/tender/awarded-contracts", 
      subDropdown: [
        { label: t("tender.awardedContracts.mechanical"), href: "/tender/awarded-contracts/mechanical" },
        { label: t("tender.awardedContracts.engineering"), href: "/tender/awarded-contracts/engineering" },
      ],
    },
    { label: t("tender.blwItemsGTE"), href: "/tender/blw-items-gte" },
    { label: t("tender.blwHHPItems"), href: "/tender/blw-hhp-items" },
    { label: t("tender.list48HHP"), href: "/tender/list-48-hhp" },
    { label: t("tender.procurementLash"), href: "/tender/procurement-lash" },
    { label: t("tender.procurementGTE2530"), href: "/tender/procurement-gte-2530" },
    { label: t("tender.tenders"), href: "/tender/tenders" },
    { label: t("tender.auctionInfo"), href: "/tender/auction-informations" },
    { label: t("tender.cppTenders"), href: "/tender/cpp-tenders" },
    { label: t("tender.procurementGTE2425"), href: "/tender/procurement-gte-2425" },
    { label: t("tender.gteAdditional"), href: "/tender/gte-additional" },
    { label: t("tender.procurementGTE2732"), href: "/tender/procurement-gte-2732" },
  ],
},
/*-------------------------------------------- VENDOR SECTION -----------------------------*/ 

    {
  label: t("nav.vendorInfo"),
  dropdown: [
    { label: t("vendor.draftSpec"), href: "/vendor/draft-specification" },
    { label: t("vendor.login"), href: "/vendor/login" },
    { label: t("vendor.billingStatus"), href: "/vendor/billing-status" },
    { label: t("vendor.billsFormat"), href: "/vendor/bills-format" },
    { label: t("vendor.detailsBills"), href: "/vendor/details-bills" },
    {
      label: t("vendor.vendorDirectory.title"),
      subDropdown: [
        { label: t("vendor.vendorDirectory.currentDirectory"), href: "/vendor/vendor-directory/current" },
        { label: t("vendor.vendorDirectory.previousDirectories"), href: "/vendor/vendor-directory/previous" },
      ],
    },
    { label: t("vendor.newRegistration"), href: "/vendor/new-registration" },
    { label: t("vendor.guidelines"), href: "/vendor/guidelines" },
    { label: t("vendor.rejectionPolicy"), href: "/vendor/rejection-policy" },
    { label: t("vendor.approvalSystem"), href: "/vendor/approval-system" },
    { label: t("vendor.eftMandate"), href: "/vendor/eft-mandate" },
    { label: t("vendor.particulars"), href: "/vendor/particulars" },
    { label: t("vendor.gst"), href: "/vendor/gst" },
  ],
},

/* -----------------------------------------------NEWSEVENTS SECTION --------------------------------*/ 
  {
  label: t("nav.newsEvents"),
  dropdown: [
    { label: t("news.announcements"), href: "/news/announcements" },
    { label: t("news.annualReport"), href: "/news/annual-report" },
    { label: t("news.pressReleases"), href: "/news/press-releases" },
    { label: t("news.shortVideo"), href: "/news/short-video" },
    { label: t("news.currentNews"), href: "/news/current-news" },
    { label: t("news.samwad"), href: "/news/samwad" },
    { label: t("news.gmArticle"), href: "/news/gm-article" },
    { label: t("news.videoAssembly"), href: "/news/video-assembly" },
    { label: t("news.tourism"), href: "/news/tourism" },
    { label: t("news.achievements"), href: "/news/achievements" },
    { label: t("news.civilDefence"), href: "/news/civil-defence" },
    { label: t("news.procedureChecking"), href: "/news/procedure-checking" },
  ],
},

/* ----------------------------------------------- CONTACT SETION --------------------------*/ 

   {
  label: t("nav.contactUs"),
  dropdown: [
    { label: t("contactUs.seniorOfficers"), href: "#" },
    { label: t("contactUs.railNetMail"), href: "#" },
    { label: t("contactUs.mailGov"), href: "#" },
    {
      label: t("contactUs.rti.title"),
      subDropdown: [
        { label: t("contactUs.rti.rtiAct"), href: "#" },
        { label: t("contactUs.rti.rtiCell"), href: "#" },
        { label: t("contactUs.rti.feeStructure"), href: "#" },
        { label: t("contactUs.rti.applicationFormat"), href: "#" },
        { label: t("contactUs.rti.information4"), href: "#" },
      ],
    },
    { label: t("contactUs.feedback"), href: "#" },
    { label: t("contactUs.importantLinks"), href: "#" },
    { label: t("contactUs.yourSuggestion"), href: "#" },
    { label: t("contactUs.privacyPolicy"), href: "#" },
    { label: t("contactUs.termsConditions"), href: "#" },
    { label: t("contactUs.help"), href: "#" },
    { label: t("contactUs.disclaimer"), href: "#" },
    { label: t("contactUs.sitemap"), href: "#" },
    { label: t("contactUs.faq"), href: "#" },
    { label: t("contactUs.otherRailwaySites"), href: "#" },
  ],
},
  ];

  const drawerStyle: React.CSSProperties = {
    top: navBottom,
    height: `calc(100vh - ${navBottom}px)`,
  };

  const overlayStyle: React.CSSProperties = {
    top: navBottom,
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {menuOpen && (
        <div
          className="navbar__overlay"
          style={overlayStyle}
          onClick={closeAll}
          aria-hidden="true"
        />
      )}

      <div className="navbar__inner">

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
                {item.dropdown && <span className="navbar__arrow">▾</span>}
              </button>

              {/* LEVEL 1 DROPDOWN */}
              {item.dropdown && (
                <div className={`navbar__dropdown ${activeDropdown === index ? "navbar__dropdown--open" : ""}`}>
                  {item.dropdown.map((sub, subIndex) => {
                    const subKey = `${index}-${subIndex}`;
                    return (
                      <div key={subIndex} className="navbar__dropdown-item">
                        {sub.subDropdown ? (
                          <>
                            {/* Has sub-dropdown: render as button */}
                            <button
                              className="navbar__dropdown-link navbar__dropdown-link--has-sub"
                              onClick={() => toggleSubDropdown(subKey)}
                            >
                              {sub.label}
                              <span className="navbar__arrow">▾</span>
                            </button>

                            {/* LEVEL 2 SUB-DROPDOWN */}
                            {activeSubDropdown === subKey && (
                              <div className="navbar__subdropdown">
                                {sub.subDropdown.map((subSub, subSubIndex) => {
                                  const subSubKey = `${subKey}-${subSubIndex}`;
                                  return (
                                    <div key={subSubIndex} className="navbar__subdropdown-item">
                                      {subSub.subDropdown ? (
                                        <>
                                          {/* Has sub-sub-dropdown: render as button */}
                                          <button
                                            className="navbar__subdropdown-link navbar__dropdown-link--has-sub"
                                            onClick={() => toggleSubSubDropdown(subSubKey)}
                                          >
                                            {subSub.label}
                                            <span className="navbar__arrow">▾</span>
                                          </button>

                                          {/* LEVEL 3 SUB-SUB-DROPDOWN */}
                                          {activeSubSubDropdown === subSubKey && (
                                            <div className="navbar__subsubdropdown">
                                              {subSub.subDropdown.map((subSubSub, i) => (
                                                <a
                                                  key={i}
                                                  href={subSubSub.href || "#"}
                                                  className="navbar__subsubdropdown-link"
                                                  onClick={closeAll}
                                                >
                                                  {subSubSub.label}
                                                </a>
                                              ))}
                                            </div>
                                          )}
                                        </>
                                      ) : (
                                        // Regular sub-dropdown item
                                        <a
                                          href={subSub.href || "#"}
                                          className="navbar__subdropdown-link"
                                          onClick={closeAll}
                                        >
                                          {subSub.label}
                                        </a>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </>
                        ) : (
                          // Regular dropdown item
                          <a
                            href={sub.href || "#"}
                            className="navbar__dropdown-link"
                            onClick={closeAll}
                          >
                            {sub.label}
                          </a>
                        )}
                      </div>
                    );
                  })}
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