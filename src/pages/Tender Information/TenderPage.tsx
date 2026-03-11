import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./TenderPage.css";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PageData {
  title?: string;
  link?: string;
  linkUrl?: string;
  source?: string;
  body?: string;            // plain text body (Coming soon / Description in English)
  isTenderSearch?: boolean; // Tenders + CPP Tenders pages
  isAuction?: boolean;      // Auction Informations page
  isRedLink?: boolean;      // Material Management — red italic centered link
  isCenterLink?: boolean;   // Tender Notice — bold blue centered link
}

// ─── Shared Base Component ────────────────────────────────────────────────────
const TenderPage = ({ translationKey }: { translationKey: string }) => {
  const { t } = useTranslation();
  const data = t(translationKey, { returnObjects: true }) as PageData;

  const isTenderSearch = data?.isTenderSearch === true;
  const isAuction      = data?.isAuction === true;
  const isRedLink      = data?.isRedLink === true;    // Material Management style
  const isCenterLink   = data?.isCenterLink === true; // Tender Notice style
  const hasBody        = !!data?.body;                // Live Tender / Awarded Contracts
  const isStandard     = !isTenderSearch && !isAuction && !isRedLink && !isCenterLink && !hasBody && !!data?.link;

  return (
    <div className="tender-container">

      {/* ── Top action bar ── */}
      <div className="tender-top">
        <div className="tender-buttons">
          <button className="tender-btn">
            <Bookmark size={20} />
            <span>{t("tender.bookmark")}</span>
          </button>
          <button className="tender-btn">
            <Mail size={20} />
            <span>{t("tender.mailPage")}</span>
          </button>
          <button className="tender-btn" onClick={() => window.print()}>
            <Printer size={20} />
            <span>{t("tender.printPage")}</span>
          </button>
        </div>
        <div className="tender-quick">
          <span className="tender-quick-label">{t("tender.quickLinks")}</span>
          <select className="tender-quick-select">
            <option>{t("tender.select")}</option>
          </select>
        </div>
      </div>

      {/* ── Page Title ── */}
      <h2 className="tender-title">{data?.title}</h2>

      {/* ══════════════════════════════════════════════
          LAYOUT A — Red italic centered link
          Used by: MaterialManagement (Image 1/2/5)
          "Material Management Tender Notice" — red, italic, centered
      ══════════════════════════════════════════════ */}
      {isRedLink && data?.link && (
        <div className="tender-link-center">
          <a
            href={data.linkUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="tender-link-red"
          >
            {data.link}
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          LAYOUT B — Bold blue centered link
          Used by: TenderNotice (Image 4)
          "IREPS Tenders" — bold, blue, centered
      ══════════════════════════════════════════════ */}
      {isCenterLink && data?.link && (
        <div className="tender-link-center">
          <a
            href={data.linkUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="tender-link-bold-blue"
          >
            {data.link}
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          LAYOUT C — Plain body text
          LiveTender (Image 2) → "Coming soon"
          AwardedContracts (Image 3) → "Description in English"
      ══════════════════════════════════════════════ */}
      {hasBody && (
        <p className="tender-body-text">{data.body}</p>
      )}

      {/* ══════════════════════════════════════════════
          LAYOUT D — Standard blue link (left aligned)
          Used by: DownloadDrawings, BlwItemsGTE,
          BlwHHPItems, List48HHP, ProcurementLash,
          ProcurementGTE2530, GteAdditional,
          ProcurementGTE2425, ProcurementGTE2732,
          LiveTenderElectrical, AwardedContractsMechanical,
          AwardedContractsEngineering (Image 3)
      ══════════════════════════════════════════════ */}
      {isStandard && (
        <a
          href={data.linkUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="tender-link-standard"
        >
          {data.link}
        </a>
      )}

      {/* ══════════════════════════════════════════════
          LAYOUT D — Tenders / CPP Tenders search form
          (Screenshots 5 & 7 from previous images)
      ══════════════════════════════════════════════ */}
      {isTenderSearch && (
        <div className="tender-search-wrapper">
          <a
            href="https://eprocure.gov.in/cppp"
            target="_blank"
            rel="noopener noreferrer"
            className="tender-active-link"
          >
            Click here to show all active Tenders
          </a>

          {/* Box 1 — Keyword */}
          <div className="tender-search-box">
            <p className="tender-search-heading">Search Tenders by Keyword</p>
            <div className="tender-search-row">
              <label>Please enter search keyword :</label>
              <input type="text" className="tender-input-text" />
              <button className="tender-search-btn">Search</button>
            </div>
          </div>

          {/* Box 2 — Opening Date */}
          <div className="tender-search-box">
            <p className="tender-search-heading">Search Tenders by Tender Opening Date</p>
            <div className="tender-search-row">
              <label>Tender Opening Date : From :</label>
              <input type="date" className="tender-input-date" />
              <label>To :</label>
              <input type="date" className="tender-input-date" />
              <button className="tender-search-btn">Search</button>
            </div>
          </div>

          {/* Box 3 — Type / Division / Dept */}
          <div className="tender-search-box">
            <p className="tender-search-heading">
              Search Tenders by Tender type, Division and Departments
            </p>
            <div className="tender-filter-table">
              <div className="tender-filter-row">
                <span className="tender-filter-label">Search Filter</span>
                <div className="tender-radio-group">
                  <label><input type="radio" name="sf" value="all" /> Show All</label>
                  <label><input type="radio" name="sf" value="active" defaultChecked /> Active</label>
                  <label><input type="radio" name="sf" value="archive" /> Archive</label>
                </div>
              </div>
              <div className="tender-filter-row">
                <span className="tender-filter-label">Tender Type</span>
                <select className="tender-filter-select">
                  <option>--Select Tender Type--</option>
                </select>
              </div>
              <div className="tender-filter-row">
                <span className="tender-filter-label">Division</span>
                <select className="tender-filter-select">
                  <option>--Select Division--</option>
                </select>
              </div>
              <div className="tender-filter-row">
                <span className="tender-filter-label">Department</span>
                <select className="tender-filter-select tender-filter-select--sm">
                  <option>--</option>
                </select>
              </div>
              <div className="tender-filter-row">
                <span className="tender-filter-label"></span>
                <button className="tender-show-btn">Show</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          LAYOUT E — Auction Informations table
          (Screenshot 6 / Image 2 from previous images)
      ══════════════════════════════════════════════ */}
      {isAuction && (
        <div className="tender-auction-wrapper">
          <p className="tender-auction-dept">
            <strong>Material Management Department, BLW/Varanasi</strong>
          </p>
          <p className="tender-auction-notice">
            AUCTION PROGRAMME NOTICE NO.GSD/BLW/SCRAP/04/2025-26
          </p>
          <p className="tender-auction-intro">
            Following is the schedule of e-auction to be held in the month of{" "}
            <strong>'January, February &amp; March' 2026</strong> every Wednesday for sale
            of scrap under the jurisdictions of GSD/BLW, Varanasi.
          </p>
          <div className="tender-auction-scroll">
            <table className="tender-auction-table">
              <thead>
                <tr>
                  <th rowSpan={2}>Types of Auction</th>
                  <th rowSpan={2}>Depot</th>
                  <th colSpan={5}>e-auction Date of<br />January – 2026 (Wednesday)</th>
                  <th colSpan={5}>e-auction Date of<br />February – 2026 (Wednesday)</th>
                  <th colSpan={4}>e-auction Date of<br />March – 2026 (Wednesday)</th>
                </tr>
                <tr>
                  <th>7<sup>th</sup></th><th>14<sup>th</sup></th>
                  <th>21<sup>st</sup></th><th>28<sup>th</sup></th><th>-</th>
                  <th>4<sup>th</sup></th><th>11<sup>th</sup></th>
                  <th>18<sup>th</sup></th><th>25<sup>th</sup></th><th>-</th>
                  <th>-</th><th>11<sup>th</sup></th>
                  <th>18<sup>th</sup></th><th>25<sup>th</sup></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>e-auction from<br />(10:30 Hrs.)</td>
                  <td>GSD/BLW/<br />Varanasi</td>
                  <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>-</td>
                  <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>-</td>
                  <td>-</td><td>✓</td><td>✓</td><td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tender-auction-footer">
            You are requested to actively participate in the above scheduled e-auction.
            For details please visit <strong>IREPS</strong> website at{" "}
            <a href="https://www.ireps.gov.in" target="_blank" rel="noopener noreferrer">
              www.ireps.gov.in
            </a>.
          </p>
          <p className="tender-auction-sign">
            Dy.CMM/Depot<br />BLW, Varanasi
          </p>
        </div>
      )}

      {/* ── Source footer ── */}
      <div className="tender-source">
        <span>{t("tender.source")} :</span>&nbsp;Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: {data?.source}
      </div>

    </div>
  );
};

// ─── All 18 Named Exports ─────────────────────────────────────────────────────

// ── Dropdown 1: Material Management & sub-pages ──
export const MaterialManagement          = () => <TenderPage translationKey="tender.pages.materialManagement" />;
export const TenderNotice                = () => <TenderPage translationKey="tender.pages.tenderNotice" />;
export const DownloadDrawings            = () => <TenderPage translationKey="tender.pages.downloadDrawings" />;

// ── Dropdown 2: Live Tender parent + sub-page ──
export const LiveTender                  = () => <TenderPage translationKey="tender.pages.liveTender" />;
export const LiveTenderElectrical        = () => <TenderPage translationKey="tender.pages.liveTenderElectrical" />;

// ── Dropdown 3: Awarded Contracts parent + sub-pages ──
export const AwardedContracts            = () => <TenderPage translationKey="tender.pages.awardedContracts" />;
export const AwardedContractsMechanical  = () => <TenderPage translationKey="tender.pages.awardedContractsMechanical" />;
export const AwardedContractsEngineering = () => <TenderPage translationKey="tender.pages.awardedContractsEngineering" />;

// ── Index ──
export const TenderInformation           = () => <TenderPage translationKey="tender.pages.tenderInformation" />;

// ── Plain items ──
export const BlwItemsGTE                 = () => <TenderPage translationKey="tender.pages.blwItemsGTE" />;
export const BlwHHPItems                 = () => <TenderPage translationKey="tender.pages.blwHHPItems" />;
export const List48HHP                   = () => <TenderPage translationKey="tender.pages.list48HHP" />;
export const ProcurementLash             = () => <TenderPage translationKey="tender.pages.procurementLash" />;
export const ProcurementGTE2530          = () => <TenderPage translationKey="tender.pages.procurementGTE2530" />;
export const Tenders                     = () => <TenderPage translationKey="tender.pages.tenders" />;
export const AuctionInformations         = () => <TenderPage translationKey="tender.pages.auctionInfo" />;
export const CppTenders                  = () => <TenderPage translationKey="tender.pages.cppTenders" />;
export const ProcurementGTE2425          = () => <TenderPage translationKey="tender.pages.procurementGTE2425" />;
export const GteAdditional               = () => <TenderPage translationKey="tender.pages.gteAdditional" />;
export const ProcurementGTE2732          = () => <TenderPage translationKey="tender.pages.procurementGTE2732" />;