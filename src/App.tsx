import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// About BLW pages
import AbPage from "./pages/About BLW/AbPage";

// LOCOPORTAL
import LocoPage from "./pages/LOCOPORTAL/LocoPage";

// DEPARTMENTS
import DepPage from "./pages/DEPARTMENTS/DepPage";


//NEWS
import Achievements      from "./pages/NEWS/Achievements";
import CivilDefence      from "./pages/NEWS/CivilDefence";
import CurrentNews       from "./pages/NEWS/CurrentNews";
import GMAnnualReport    from "./pages/NEWS/GMAnnualReport";
import GmArticle         from "./pages/NEWS/GmArticle";
import NewsAnnouncements from "./pages/NEWS/NewsAnnouncements";
import PressReleases     from "./pages/NEWS/PressReleases";
import ProcedureChecking from "./pages/NEWS/ProcedureChecking";
import Samwad            from "./pages/NEWS/Samwad";
import ShortVideo        from "./pages/NEWS/ShortVideo";
import VaranasiTourism   from "./pages/NEWS/VaranasiTourism";
import VideoAssembly     from "./pages/NEWS/VideoAssembly";
//Tender
import {
  TenderInformation,
  MaterialManagement,
  TenderNotice,
  DownloadDrawings,
  LiveTender,                   // ← parent page for Live Tender dropdown
  LiveTenderElectrical,
  AwardedContracts,             // ← parent page for Awarded Contracts dropdown
  AwardedContractsMechanical,
  AwardedContractsEngineering,
  BlwItemsGTE,
  BlwHHPItems,
  List48HHP,
  ProcurementLash,
  ProcurementGTE2530,
  Tenders,
  AuctionInformations,
  CppTenders,
  ProcurementGTE2425,
  GteAdditional,
  ProcurementGTE2732,
} from "./pages/Tender Information/TenderPage";

//Vendors
import {
  VendorInformation,
  DraftSpecification,
  VendorLogin,
  BillingStatus,
  BillsFormat,
  DetailsBills,
  VendorDirectoryPage,
  CurrentVendorDir,
  PreviousVendorDirs,
  NewRegistration,
  Guidelines,
  RejectionPolicy,
  ApprovalSystem,
  EftMandate,
  VendorParticulars,
  BlwGST,
} from "./pages/Vendor/VendorPages";

// Layout
import AboutLayout from "./layouts/AboutLayout";
import DepartmentLayout from "./layouts/Departmentlayout";
import LocoPortalLayout from "./layouts/LocoPortalLayout";

import NewsLayout from "./layouts/NewsLayout";
import TenderLayout from "./layouts/TenderLayout";
import VendorLayout from "./layouts/VendorLayout";
const App = () => (
  <BrowserRouter>
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

     
      <Route path="/about" element={<AboutLayout />}>
  <Route path="brief-history" element={<AbPage translationKey="about.historyData" />} />
  <Route path="organization-strength" element={<AbPage translationKey="about.orgStrengthData" />} />
  <Route path="blw-heritage" element={<AbPage translationKey="about.heritageLocomotives" />} />
  <Route path="quality" element={<AbPage translationKey="about.quality" />} />
  <Route path="milestones" element={<AbPage translationKey="about.milestonesFuturePlans" />} />
  <Route path="quality-policy" element={<AbPage translationKey="about.QualityPolicy" />} />
  <Route path="portal" element={<AbPage translationKey="about.Portal" />} />
  <Route path="Department" element={<AbPage translationKey="about.Department" />} />
  <Route path="design" element={<AbPage translationKey="about.design" />} />
  <Route path="product-for-sale/diesel-locomotive" element={<AbPage translationKey="about.dieselLocomotive" />} />
  <Route path="product-for-sale/dg-sets" element={<AbPage translationKey="about.dgSets" />} />
  <Route path="product-for-sale/previous-product" element={<AbPage translationKey="about.previousProduct" />} />
  <Route path="product-for-sale/photographs/blw-product" element={<AbPage translationKey="about.blwProduct" />} />
  <Route path="product-for-sale/photographs/export-locomotives" element={<AbPage translationKey="about.exportLocomotives" />} />
  <Route path="sop/model-sop" element={<AbPage translationKey="about.modelSop" />} />
  <Route path="sop/old-sop" element={<AbPage translationKey="about.oldSop" />} />
  <Route path="immovable-property/administration" element={<AbPage translationKey="about.administrationCivilRpf" />} />
  <Route path="immovable-property/stores" element={<AbPage translationKey="about.storesProperty" />} />
  <Route path="immovable-property/electrical" element={<AbPage translationKey="about.electricalProperty" />} />
  <Route path="immovable-property/mechanical" element={<AbPage translationKey="about.mechanicalProperty" />} />
  <Route path="immovable-property/medical" element={<AbPage translationKey="about.medicalProperty" />} />
  <Route path="immovable-property/accounts" element={<AbPage translationKey="about.accountsProperty" />} />
  <Route path="environmental-social-orientation" element={<AbPage translationKey="about.environmentalSocialOrientationData" />} />
  <Route path="blw-calendar-2026" element={<AbPage translationKey="about.blwCalendar2026Data" />} />
  <Route path="swachh-bharat-mission" element={<AbPage translationKey="about.swachhBharatMissionData" />} />
  <Route path="photo-gallery" element={<AbPage translationKey="about.photoGalleryData" />} />
  <Route path="product-for-sale/contact-details" element={<AbPage translationKey="about.contactDetailsForPurchase" />} />
  <Route path="visitors/egatepass" element={<AbPage translationKey="about.visitorEgatePass" />} />
</Route>

      {/* LOCOPORTAL */}
      <Route path="/loco-portal" element={<LocoPortalLayout />}>
        <Route path="hhp-bim-spares/minutes-of-bim" element={<LocoPage translationKey="locoPortal.hhpBimSpares.minutesOfBim" />} />
        <Route path="hhp-bim-spares/minutes-of-meeting" element={<LocoPage translationKey="locoPortal.minutesOfMeeting" />} />
        <Route path="hhp-bim-spares/agenda-hhp-1920" element={<LocoPage translationKey="locoPortal.agendaHHP1920" />} />
        <Route path="hhp-bim-spares/drawings-hhp" element={<LocoPage translationKey="locoPortal.drawingsHHPData" />} />
        <Route path="hhp-bim-spares/minutes-bim-1920" element={<LocoPage translationKey="locoPortal.minutesBIM1920" />} />
        <Route path="hhp-bim-spares/minutes-bim-1718" element={<LocoPage translationKey="locoPortal.minutesBIM1718" />} />
        <Route path="hhp-bim-spares/agenda-hhp-1718" element={<LocoPage translationKey="locoPortal.agendaHHP1718" />} />
        <Route path="hhp-bim-spares/minutes-bim-1617" element={<LocoPage translationKey="locoPortal.minutesBIM1617" />} />
        <Route path="hhp-bim-spares/railway-board-rsp" element={<LocoPage translationKey="locoPortal.railwayBoardRSP" />} />
        <Route path="hhp-bim-spares/zonal-railway-rsp" element={<LocoPage translationKey="locoPortal.zonalRailwayRSP" />} />
        <Route path="hhp-bim-spares/supply-balance" element={<LocoPage translationKey="locoPortal.supplyBalance" />} />
        <Route path="hhp-bim-spares/forwarding-letter" element={<LocoPage translationKey="locoPortal.forwardingLetter" />} />
        <Route path="hhp-bim-spares/additional-technical" element={<LocoPage translationKey="locoPortal.additionalTechnical" />} />
        <Route path="hhp-bim-spares/maintenance-tools" element={<LocoPage translationKey="locoPortal.maintenanceTools" />} />
        <Route path="hhp-bim-spares/railway-board-letter" element={<LocoPage translationKey="locoPortal.railwayBoardLetter" />} />
        <Route path="hhp-bim-spares/vendor-list" element={<LocoPage translationKey="locoPortal.vendorList" />} />
        <Route path="hhp-bim-spares/covering-letter" element={<LocoPage translationKey="locoPortal.coveringLetter" />} />
        <Route path="hhp-bim-spares/drawings-maintenance" element={<LocoPage translationKey="locoPortal.drawingsMaintenance" />} />
        <Route path="design-bulletin/vehicle" element={<LocoPage translationKey="locoPortal.vehicleDesignBulletin" />} />
        <Route path="design-bulletin/engine" element={<LocoPage translationKey="locoPortal.engineDesignBulletin" />} />
        <Route path="design-bulletin/electrical" element={<LocoPage translationKey="locoPortal.electricalDesignBulletin" />} />
        <Route path="hhp-bim-spares/vetted-indents" element={<LocoPage translationKey="locoPortal.vettedIndentsData" />} />
        <Route path="hhp-bim-spares/po-copy" element={<LocoPage translationKey="locoPortal.poCopyData" />} />
        <Route path="non-railway-customer" element={<LocoPage translationKey="locoPortal.nonRailwayData" />} />
        <Route path="warranty-claim/vendor-login" element={<LocoPage translationKey="locoPortal.vendorLoginData" />} />
        <Route path="warranty-claim/diesel-loco" element={<LocoPage translationKey="locoPortal.dieselLocoData" />} />
      </Route>

      {/* Departments */}
      <Route path="/departments" element={<DepartmentLayout />}>
        <Route path="accounts/bills-format" element={<DepPage translationKey="departments.bills" />} />
       < Route path="accounts/codes-manuals" element={<DepPage translationKey="departments.codesManuals" />} />
       <Route path="accounts/eft-mandate" element={<DepPage translationKey="departments.eftMandate" />} />
       <Route path="accounts/declaration" element={<DepPage translationKey="departments.declaration" />} />
       <Route path="accounts/amendment-turnover" element={<DepPage translationKey="departments.amendment" />} />
       <Route path="accounts/asset-register" element={<DepPage translationKey="departments.assetRegister" />} />
       <Route path="accounts/selection-notice" element={<DepPage translationKey="departments.notificationLDCE" />} />
       <Route path="civil-engineering/manual-scavenging" element={<DepPage translationKey="departments.manualScavenging" />} />
       <Route path="electrical-engineering" element={<DepPage translationKey="departments.electricalEngineering" />} />
       <Route path="mechanical/manufacturing-process" element={<DepPage translationKey="departments.manufacturingProcess" />} />
       <Route path="mechanical/org-structure" element={<DepPage translationKey="departments.mechanicalOrgStructure" />} />
       <Route path="mechanical/non-moving-items" element={<DepPage translationKey="departments.nonMovingItems" />} />
       <Route path="marketing/division" element={<DepPage translationKey="departments.marketingDivision" />} />
       <Route path="personnel/railway-services" element={<DepPage translationKey="departments.conductRules" />} />
       <Route path="medical/registration-firm" element={<DepPage translationKey="departments.registrationFirm" />} />
       <Route path="personnel/gazetted-transfer" element={<DepPage translationKey="departments.gazettedTransferOrders" />} />
       <Route path="personnel/cadre-position" element={<DepPage translationKey="departments.cadrePosition" />} />
       <Route path="personnel/recruitment" element={<DepPage translationKey="departments.recruitmentSection" />} />
       <Route path="personnel/staff-welfare" element={<DepPage translationKey="departments.staffWelfare" />} />
       <Route path="personnel/important-letter" element={<DepPage translationKey="departments.importantLetters" />} />
       <Route path="personnel/selection-notice" element={<DepPage translationKey="departments.selectionNotice" />} />
       <Route path="personnel/important-form" element={<DepPage translationKey="departments.importantForms" />} />
       <Route path="personnel/gazetted-section" element={<DepPage translationKey="departments.gazettedSection" />} />
       <Route path="personnel/seniority-list" element={<DepPage translationKey="departments.seniorityList" />} />
       <Route path="personnel/public-grievances" element={<DepPage translationKey="departments.publicGrievances" />} />
       <Route path="personnel/jpo-cmp" element={<DepPage translationKey="departments.jpoCmp" />} />
         <Route path="personnel/settlement" element={<DepPage translationKey="departments.settlementSec" />} />
         <Route path="personnel/revised-rules" element={<DepPage translationKey="departments.revisedRules" />} />
         <Route path="personnel/staff-council" element={<DepPage translationKey="departments.staffCouncil" />} />
         <Route path="personnel/sexual-harassment" element={<DepPage translationKey="departments.sexualHarassment" />} />
         <Route path="personnel/roster/accounts" element={<DepPage translationKey="departments.rosterAccounts" />} />
<Route path="personnel/roster/personnel" element={<DepPage translationKey="departments.rosterPersonnel" />} />
<Route path="personnel/roster/civil" element={<DepPage translationKey="departments.rosterCivil" />} />
<Route path="personnel/roster/electrical" element={<DepPage translationKey="departments.rosterElectrical" />} />
<Route path="personnel/roster/mechanical" element={<DepPage translationKey="departments.rosterMechanical" />} />
<Route path="personnel/roster/stores" element={<DepPage translationKey="departments.rosterStores" />} />
<Route path="personnel/roster/admin" element={<DepPage translationKey="departments.rosterAdmin" />} />
<Route path="personnel/roster/medical" element={<DepPage translationKey="departments.rosterMedical" />} />
<Route path="rajbhasha/bareka-darpan-31" element={<DepPage translationKey="departments.barekaDarpan31" />} />
<Route path="rajbhasha/bareka-darpan-32" element={<DepPage translationKey="departments.barekaDarpan32" />} />
<Route path="rajbhasha/bareka-darpan-33" element={<DepPage translationKey="departments.barekaDarpan33" />} />
<Route path="rajbhasha/bareka-darpan-34" element={<DepPage translationKey="departments.barekaDarpan34" />} />
<Route path="rajbhasha/bareka-darpan-35" element={<DepPage translationKey="departments.barekaDarpan35" />} />
<Route path="rajbhasha/bareka-darpan-36" element={<DepPage translationKey="departments.barekaDarpan36" />} />
<Route path="rajbhasha/list-of-books" element={<DepPage translationKey="departments.listOfBooks" />} />
<Route path="rajbhasha/gm-message-2023" element={<DepPage translationKey="departments.gmMessage2023" />} />
<Route path="rajbhasha/question-bank" element={<DepPage translationKey="departments.questionBank" />} />
<Route path="rajbhasha/narakas" element={<DepPage translationKey="departments.narakas" />} />
<Route path="rajbhasha/gm-message-2024" element={<DepPage translationKey="departments.gmMessage2024" />} />
<Route path="rajbhasha/rajbhasha-pakhwada" element={<DepPage translationKey="departments.rajbhashaPakhwada" />} />
<Route path="rajbhasha/gm-message-2025" element={<DepPage translationKey="departments.gmMessage2025" />} />
<Route path="stores/suspended-firms" element={<DepPage translationKey="departments.suspendedFirms" />} />
<Route path="stores/tender-documents" element={<DepPage translationKey="departments.tenderDocuments" />} />
<Route path="stores/post-contract-matter" element={<DepPage translationKey="departments.postContractMatter" />} />
<Route path="stores/pl-unification" element={<DepPage translationKey="departments.plUnification" />} />
<Route path="stores/checklist-bills" element={<DepPage translationKey="departments.checklistBills" />} />
<Route path="stores/inactive-surplus" element={<DepPage translationKey="departments.inactiveSurplus" />} />
<Route path="stores/non-moving-high-value" element={<DepPage translationKey="departments.nonMovingHighValue" />} />
<Route path="stores/gst-change" element={<DepPage translationKey="departments.gstChange" />} />
<Route path="stores/estimated-tender" element={<DepPage translationKey="departments.estimatedTender" />} />
<Route path="stores/excess-high-value" element={<DepPage translationKey="departments.excessHighValue" />} />
<Route path="stores/rejection-policy" element={<DepPage translationKey="departments.rejectionPolicy" />} />
<Route path="stores/video-assembly" element={<DepPage translationKey="departments.videoAssembly" />} />
<Route path="stores/tentative-requirement" element={<DepPage translationKey="departments.tentativeRequirement" />} />
<Route path="stores/irs-conditions" element={<DepPage translationKey="departments.irsConditions" />} />
<Route path="technical-training/ttc-brochure" element={<DepPage translationKey="departments.ttcBrochure" />} />
<Route path="technical-training/weldor-nomination" element={<DepPage translationKey="departments.weldorNomination" />} />
<Route path="technical-training/question-bank" element={<DepPage translationKey="departments.ttcQuestionBank" />} />
<Route path="technical-training/training-calender" element={<DepPage translationKey="departments.trainingCalender" />} />
<Route path="technical-training/internship-training" element={<DepPage translationKey="departments.internshipTraining" />} />
<Route path="vigilance/awareness-week" element={<DepPage translationKey="departments.vigilanceAwarenessWeek" />} />
<Route path="vigilance/bulletin" element={<DepPage translationKey="departments.vigilanceBulletin" />} />
<Route path="vigilance/complaint-policy" element={<DepPage translationKey="departments.complaintPolicy" />} />
<Route path="vigilance/selections" element={<DepPage translationKey="departments.vigilanceSelections" />} />
<Route path="vigilance/rti-info" element={<DepPage translationKey="departments.rtiInfo" />} />
<Route path="vigilance/organization" element={<DepPage translationKey="departments.vigilanceOrganization" />} />
<Route path="vigilance/system-improvements" element={<DepPage translationKey="departments.systemImprovements" />} />
<Route path="design/video-mounting" element={<DepPage translationKey="departments.videoMounting" />} />
<Route path="design/eoi-conversion" element={<DepPage translationKey="departments.eoiConversion" />} />
<Route path="design/eoi-upgradation" element={<DepPage translationKey="departments.eoiUpgradation" />} />
<Route path="safety" element={<DepPage translationKey="departments.safetyDepartment" />} />
<Route path="personnel/establishment/all" element={<DepPage translationKey="departments.allCirculars" />} />
<Route path="personnel/establishment/pass-rule" element={<DepPage translationKey="departments.passCirculars" />} />
<Route path="personnel/establishment/recruitment" element={<DepPage translationKey="departments.recruitmentCirculars" />} />
<Route path="personnel/establishment/promotion" element={<DepPage translationKey="departments.promotionCirculars" />} />
<Route path="personnel/establishment/misc" element={<DepPage translationKey="departments.miscCirculars" />} />
<Route path="personnel/establishment/allowances" element={<DepPage translationKey="departments.allowancesCirculars" />} />
<Route path="personnel/establishment/advances" element={<DepPage translationKey="departments.advancesCirculars" />} />
<Route path="personnel/establishment/settlement" element={<DepPage translationKey="departments.settlementCirculars" />} />
<Route path="personnel/establishment/leave-rule" element={<DepPage translationKey="departments.leaveRuleCirculars" />} />
<Route path="personnel/establishment/welfare" element={<DepPage translationKey="departments.welfareCirculars" />} />
<Route path="personnel/establishment/reservation" element={<DepPage translationKey="departments.reservationCirculars" />} />
<Route path="personnel/establishment/conduct-rules" element={<DepPage translationKey="departments.conductRulesCirculars" />} />
<Route path="personnel/establishment/irem" element={<DepPage translationKey="departments.iremCirculars" />} />
<Route path="personnel/establishment/medical-rule" element={<DepPage translationKey="departments.medicalRuleCirculars" />} />
<Route path="personnel/establishment/master-circular" element={<DepPage translationKey="departments.masterCirculars" />} />
<Route path="personnel/establishment/irec" element={<DepPage translationKey="departments.irecCirculars" />} />
      </Route>
      
      
 
     {/*NEWS*/}
    <Route path="/news" element={<NewsLayout />}>
  <Route index element={<NewsAnnouncements />} />
  <Route path="announcements"      element={<NewsAnnouncements />} />
  <Route path="annual-report"      element={<GMAnnualReport />} />
  <Route path="press-releases"     element={<PressReleases />} />
  <Route path="short-video"        element={<ShortVideo />} />
  <Route path="current-news"       element={<CurrentNews />} />
  <Route path="samwad"             element={<Samwad />} />
  <Route path="gm-article"         element={<GmArticle />} />
  <Route path="video-assembly"     element={<VideoAssembly />} />
  <Route path="tourism"            element={<VaranasiTourism />} />
  <Route path="achievements"       element={<Achievements />} />
  <Route path="civil-defence"      element={<CivilDefence />} />
  <Route path="procedure-checking" element={<ProcedureChecking />} />
</Route>

     { /* ── Tender Information ── */}
<Route path="/tender" element={<TenderLayout />}>

  {/* Index → /tender */}
  <Route index                                            element={<TenderInformation />} />

  {/* Dropdown 1: Material Management */}
  <Route path="material-management"                       element={<MaterialManagement />} />
  <Route path="material-management/tender-notice"         element={<TenderNotice />} />
  <Route path="material-management/download-drawings"     element={<DownloadDrawings />} />

  {/* Dropdown 2: Live Tender */}
  <Route path="live-tender"                               element={<LiveTender />} />
  <Route path="live-tender/electrical"                    element={<LiveTenderElectrical />} />

  {/* Dropdown 3: Awarded Contracts */}
  <Route path="awarded-contracts"                         element={<AwardedContracts />} />
  <Route path="awarded-contracts/mechanical"              element={<AwardedContractsMechanical />} />
  <Route path="awarded-contracts/engineering"             element={<AwardedContractsEngineering />} />

  {/* Plain items */}
  <Route path="blw-items-gte"                             element={<BlwItemsGTE />} />
  <Route path="blw-hhp-items"                             element={<BlwHHPItems />} />
  <Route path="list-48-hhp"                               element={<List48HHP />} />
  <Route path="procurement-lash"                          element={<ProcurementLash />} />
  <Route path="procurement-gte-2530"                      element={<ProcurementGTE2530 />} />
  <Route path="tenders"                                   element={<Tenders />} />
  <Route path="auction-informations"                      element={<AuctionInformations />} />
  <Route path="cpp-tenders"                               element={<CppTenders />} />
  <Route path="procurement-gte-2425"                      element={<ProcurementGTE2425 />} />
  <Route path="gte-additional"                            element={<GteAdditional />} />
  <Route path="procurement-gte-2732"                      element={<ProcurementGTE2732 />} />

</Route>
     {/* Vendor Information */}
    <Route path="/vendor" element={<VendorLayout />}>
     <Route index                              element={<VendorInformation />} />
     <Route path="draft-specification"         element={<DraftSpecification />} />
     <Route path="login"                       element={<VendorLogin />} />
     <Route path="billing-status"              element={<BillingStatus />} />
     <Route path="bills-format"                element={<BillsFormat />} />
     <Route path="details-bills"               element={<DetailsBills />} />
     <Route path="vendor-directory"            element={<VendorDirectoryPage />} />
     <Route path="vendor-directory/current"    element={<CurrentVendorDir />} />
     <Route path="vendor-directory/previous"   element={<PreviousVendorDirs />} />
     <Route path="new-registration"            element={<NewRegistration />} />
     <Route path="guidelines"                  element={<Guidelines />} />
     <Route path="rejection-policy"            element={<RejectionPolicy />} />
     <Route path="approval-system"             element={<ApprovalSystem />} />
     <Route path="eft-mandate"                 element={<EftMandate />} />
     <Route path="particulars"                 element={<VendorParticulars />} />
     <Route path="gst"                         element={<BlwGST />} />
    </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

export default App;