import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// About BLW pages
import BriefHistory from "./pages/About BLW/BriefHistory";
import OrganizationStrength from "./pages/About BLW/OrganizationStrength";
import BlwHeritage from "./pages/About BLW/BlwHeritage";
import Quality from "./pages/About BLW/Quality";
import Milestones from "./pages/About BLW/milestones";
import QualityPolicy from "./pages/About BLW/QualityPolicy";
import PortalPolicies from "./pages/About BLW/PortalPolicies";
import Department from "./pages/About BLW/Department";
import Design from "./pages/About BLW/design"; // small d in filename

// DEPARTMETS
import Bills from "./pages/DEPARTMENTS/bills"
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
import NewsLayout from "./layouts/NewsLayout";
import TenderLayout from "./layouts/TenderLayout";
import VendorLayout from "./layouts/VendorLayout";
const App = () => (
  <BrowserRouter>
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About BLW */}
      <Route path="/about" element={<AboutLayout />}>
        <Route path="brief-history" element={<BriefHistory />} />
        <Route path="organization-strength" element={<OrganizationStrength />} />
        <Route path="blw-heritage" element={<BlwHeritage />} />
        <Route path="quality" element={<Quality />} />
        <Route path="milestones" element={<Milestones />} />
        <Route path="quality" element={<QualityPolicy />} />
        <Route path="portal" element={<PortalPolicies />} />
        <Route path="Department" element={<Department />} />
        <Route path="design" element={<Design />} />
         

      </Route>
      {/* Departments */}
<Route path="/departments" element={< DepartmentLayout/>}>

  <Route path="accounts/bills-format" element={<Bills />} />
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