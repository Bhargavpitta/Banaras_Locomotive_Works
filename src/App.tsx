import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// About BLW pages
import AbPage from "./pages/About BLW/AbPage";

// LOCOPORTAL
import LocoPage from "./pages/LOCOPORTAL/LocoPage";

// DEPARTMENTS
import DepPage from "./pages/DEPARTMENTS/DepPage";

// Layout
import AboutLayout from "./layouts/AboutLayout";
import DepartmentLayout from "./layouts/Departmentlayout";
import LocoPortalLayout from "./layouts/LocoPortalLayout";

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
       
       <Route path="medical/registration-firm" element={<DepPage translationKey="departments.registrationFirm" />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

export default App;