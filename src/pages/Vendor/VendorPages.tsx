import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./VendorPages.css";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PageData {
  title?: string;
  source?: string;
  link?: string;
  linkUrl?: string;
  isLogin?: boolean;
  isBillingStatus?: boolean;
  isDetailsBills?: boolean;
  isVendorDirectory?: boolean;
  isCurrentVD?: boolean;
  isPreviousVD?: boolean;
  isApprovalSystem?: boolean;
  isRejectionPolicy?: boolean;
  isGST?: boolean;
}

// ─── Shared Base Component ────────────────────────────────────────────────────
const VendorPage = ({ translationKey }: { translationKey: string }) => {
  const { t } = useTranslation();
  const data = t(translationKey, { returnObjects: true }) as PageData;

  const isLogin           = data?.isLogin === true;
  const isBillingStatus   = data?.isBillingStatus === true;
  const isDetailsBills    = data?.isDetailsBills === true;
  const isVendorDirectory = data?.isVendorDirectory === true;
  const isCurrentVD       = data?.isCurrentVD === true;
  const isPreviousVD      = data?.isPreviousVD === true;
  const isApprovalSystem  = data?.isApprovalSystem === true;
  const isRejectionPolicy = data?.isRejectionPolicy === true;
  const isGST             = data?.isGST === true;
  const isStandard        = !isLogin && !isBillingStatus && !isDetailsBills &&
                            !isVendorDirectory && !isCurrentVD && !isPreviousVD &&
                            !isApprovalSystem && !isRejectionPolicy && !isGST && !!data?.link;

  return (
    <div className="vendor-container">

      {/* ── Top action bar ── */}
      <div className="vendor-top">
        <div className="vendor-buttons">
          <button className="vendor-btn">
            <Bookmark size={20} />
            <span>{t("vendor.bookmark")}</span>
          </button>
          <button className="vendor-btn">
            <Mail size={20} />
            <span>{t("vendor.mailPage")}</span>
          </button>
          <button className="vendor-btn" onClick={() => window.print()}>
            <Printer size={20} />
            <span>{t("vendor.printPage")}</span>
          </button>
        </div>
        <div className="vendor-quick">
          <span className="vendor-quick-label">{t("vendor.quickLinks")}</span>
          <select className="vendor-quick-select">
            <option>{t("vendor.select")}</option>
          </select>
        </div>
      </div>

      {/* ── Page Title ── */}
      <h2 className="vendor-title">{data?.title}</h2>

      {/* ══════════════════════════════════════════════
          STANDARD — title repeated + single blue link
          Draft Spec, Bills Format, New Registration,
          Guidelines, EFT Mandate, Vendor Particulars
      ══════════════════════════════════════════════ */}
      {isStandard && (
        <div className="vendor-standard-wrap">
          <p className="vendor-subtitle">{data?.title}</p>
          <a
            href={data?.linkUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="vendor-link-blue"
          >
            {data?.link}
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 3 — Vendor Login
      ══════════════════════════════════════════════ */}
      {isLogin && (
        <div className="vendor-login-wrap">
          <p className="vendor-login-note">
            <strong>Note:</strong> Please delete the browser history in case of getting
            error while doing registration or login through Google Chrome otherwise you
            can use Internet/Mozila Firefox browser.
          </p>
          <div className="vendor-login-center">
            <table className="vendor-login-table">
              <thead>
                <tr><th colSpan={2}>Vendor Login</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>User name</td>
                  <td><input type="text" className="vendor-login-input" /></td>
                </tr>
                <tr>
                  <td>User Password</td>
                  <td><input type="password" className="vendor-login-input" /></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="vendor-login-btns">
                    <button className="vendor-btn-go">Go</button>
                    <button className="vendor-btn-reset">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="vendor-login-reg">
                    <a href="#">New User Registration</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 4 — Vendors Billing Status (Fifteen Days)
      ══════════════════════════════════════════════ */}
      {isBillingStatus && (
        <div className="vendor-billing-wrap">
          <p>
            <a href="#" className="vendor-link-blue">Stores_Bills</a>
            {" "}<strong>(Stock)</strong>
          </p>
          <p>
            <a href="#" className="vendor-link-blue">Stores_Bills</a>
            {" "}<strong>(Non Stock)</strong>
          </p>
          <p>
            <a href="#" className="vendor-link-blue">Other than Stores Bills</a>
          </p>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 7 — Details of Bills Registered in Last Fifteen Days
      ══════════════════════════════════════════════ */}
      {isDetailsBills && (
        <ol className="vendor-details-list">
          <li>
            <a href="#" className="vendor-link-blue">
              Registered Bills in Stores Bill (Stock) Section
            </a>
          </li>
          <li>
            <a href="#" className="vendor-link-blue">
              Registered Bills in Stores Bill (Non Stock) Section
            </a>
          </li>
          <li>
            <a href="#" className="vendor-link-blue vendor-link-bold">
              Registered Bills in Expenditure Section.
            </a>
          </li>
        </ol>
      )}

      {/* ══════════════════════════════════════════════
          IMG 8 — Vendor Directory (VD) index page, empty body
      ══════════════════════════════════════════════ */}
      {isVendorDirectory && (
        <div className="vendor-empty" />
      )}

      {/* ══════════════════════════════════════════════
          IMG 9 — Current Vendor Directory
      ══════════════════════════════════════════════ */}
      {isCurrentVD && (
        <div className="vendor-currentvd-wrap">
          <h3 className="vendor-currentvd-heading">
            <a href="#" className="vendor-link-blue">Current Vendor Directory</a>
          </h3>
          <div className="vendor-uvam-box">
            <p className="vendor-uvam-label">Approval of Vendors</p>
            <p className="vendor-uvam-brand">U-VAM</p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 10/11 — Previous Vendor Directories
      ══════════════════════════════════════════════ */}
      {isPreviousVD && (
        <div className="vendor-prevvd-wrap">
          <h3 className="vendor-prevvd-heading">
            <a href="#" className="vendor-link-blue">Previous Vendor Directories</a>
          </h3>
          <div className="vendor-table-scroll">
            <table className="vendor-prevvd-table">
              <thead>
                <tr>
                  <th rowSpan={2}>SN.</th>
                  <th rowSpan={2}>VD</th>
                  <th colSpan={2}>Valid</th>
                </tr>
                <tr>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sn:  1, vd: "VD-2020 Sep 2020 Rev.4 (01.03.2021)",   from: "01.03.2021", to: "------------" },
                  { sn:  2, vd: "VD-2020 Sep 2020 Rev.3 (10.12.2020)",   from: "10.12.2020", to: "28.02.2021"  },
                  { sn:  3, vd: "VD-2020 Sep 2020 Rev.2 (02.11.2020)",   from: "02.11.2020", to: "09.12.2020"  },
                  { sn:  4, vd: "VD-2020 Sep 2020 Rev.1 (01.10.2020)",   from: "01.10.2020", to: "01.11.2020"  },
                  { sn:  5, vd: "VD-2019 July Rev.8 (04.08.2020)",       from: "04.08.2020", to: "09.09.2020"  },
                  { sn:  6, vd: "VD-2019 July Rev.7 (01.06.2020)",       from: "01.06.2020", to: "03.08.2020"  },
                  { sn:  7, vd: "VD-2019 July Rev.6 (01.03.2020)",       from: "01.03.2020", to: "31.05.2020"  },
                  { sn:  8, vd: "VD-2019 July Rev.5 (01.01.2020)",       from: "01.01.2020", to: "29.02.2020"  },
                  { sn:  9, vd: "VD-2019 July Rev.4 (01.11.2019)",       from: "01.11.2019", to: "31.12.2019"  },
                  { sn: 10, vd: "VD-2019 July Rev.3 (01.10.2019)",       from: "01.10.2019", to: "31.10.2019"  },
                  { sn: 11, vd: "VD-2019 July Rev.2 (01.09.2019)",       from: "01.09.2019", to: "30.09.2019"  },
                  { sn: 12, vd: "VD-2019 July Rev.1 (01.08.2019)",       from: "01.08.2019", to: "31.08.2019"  },
                  { sn: 13, vd: "VD-2019 July Revision Nil",             from: "02.07.2019", to: "31.07.2019"  },
                  { sn: 14, vd: "VD-2018 JULY Revision 5",               from: "01.01.2019", to: "01.07.2019"  },
                  { sn: 15, vd: "VD-2018 JULY Revision 4",               from: "01.12.2018", to: "31.12.2018"  },
                  { sn: 16, vd: "VD-2018 JULY Revision 3 (Nov 2018)",    from: "01.11.2018", to: "30.11.2018"  },
                  { sn: 17, vd: "VD-2018 JULY Revision 3",               from: "01.10.2018", to: "31.10.2018"  },
                  { sn: 18, vd: "VD-2018 JULY Revision 2",               from: "01.09.2018", to: "30.09.2018"  },
                  { sn: 19, vd: "VD-2018 JULY Revision 1",               from: "01.08.2018", to: "31.08.2018"  },
                  { sn: 20, vd: "VD-2018 July Revision Nil",             from: "02.07.2018", to: "31.07.2018"  },
                  { sn: 21, vd: "VD-2017 Revision-7",                    from: "31.05.2018", to: "30.06.2018"  },
                  { sn: 22, vd: "VD-2017 Revision 5",                    from: "05.03.2018", to: "31.03.2018"  },
                  { sn: 23, vd: "VD-2017 Revision 4",                    from: "01.02.2018", to: "04.03.2018"  },
                  { sn: 24, vd: "VD- 2017 Revision 3",                   from: "01.12.2017", to: "31.12.2017"  },
                  { sn: 25, vd: "VD- 2017 Revision 1",                   from: "01.11.2017", to: "30.11.2017"  },
                  { sn: 26, vd: "VD- 2017 Revision Nil",                 from: "04.10.2017", to: "31.10.2017"  },
                  { sn: 27, vd: "VD-2016 (With Amendment 01 to 13)",     from: "08.07.2016", to: "03.10.2017"  },
                  { sn: 28, vd: "VD-2015 (With Amendment 01 to 11)",     from: "01.07.2015", to: "07.07.2016"  },
                ].map((row) => (
                  <tr key={row.sn}>
                    <td className="vendor-prevvd-sn">{row.sn}.</td>
                    <td><a href="#" className="vendor-link-blue">{row.vd}</a></td>
                    <td>{row.from}</td>
                    <td>{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 16/17 — Vendor Approval System
      ══════════════════════════════════════════════ */}
      {isApprovalSystem && (
        <div className="vendor-approval-wrap">
          {[
            { label: "Quality Assurance Plan (QAP) format for Diesel Loco",     bold: true  },
            { label: "QSP Vendor Control For Diesel Loco",                       bold: true  },
            { label: "QSP Vendor Control version 17.0",                          bold: true  },
            { label: "QSP Vendor Control For Electric Loco Items (Version-3)",   bold: true  },
            { label: "QSP Vendor Control For Electric Loco Items (Version-4.0)", bold: false },
            { label: "QSP Vendor Control For Electric Loco Items (Version-5.0)", bold: false },
            { label: "QSP Vendor Control For Electric Loco Items (Version-6.0)", bold: false },
            { label: "List of E-Loco Items requiring Development of Additional Sources",             bold: false },
            { label: "Guidelines for E-Loco vendors wants to switch their Approval / Registration from CLW to BLW", bold: false },
            { label: "Technical eligibility criteria for ordering against developmental tenders for BLW controlled items", bold: false },
            { label: "Amendment -1 of QSP vendor control for Electric loco items (6.0)",            bold: false },
            { label: "Amendment -2 of QSP vendor control for Electric loco items (6.0)",            bold: false },
            { label: "Amendment -3 of QSP vendor control for Electric loco items (6.0)",            bold: false },
            { label: "Amendment -4 of QSP vendor control for Electric loco items (6.0)",            bold: false },
            { label: "Amendment 5 of QSP Vendor Control For Electric Loco Items (Version-6.0)+",   bold: false },
            { label: "QSP Vendor Control For Electric Loco Items (Version-7.0)",                    bold: false },
            { label: "Amendment 1 of QSP - Vendor control of Electric Loco Items (7.0)",           bold: true  },
            { label: "Technical Eligibility Criteria of Non-VD BLW Controlled Diesel Loco Items (Revised & Updated on 31.10.2025)", bold: false },
          ].map((item, i) => (
            <p key={i} className="vendor-approval-item">
              <a href="#" className={`vendor-link-blue ${item.bold ? "vendor-link-bold" : ""}`}>
                {item.label}
              </a>
            </p>
          ))}
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 14/15 — Policy for Rejection and Ground Rent
      ══════════════════════════════════════════════ */}
      {isRejectionPolicy && (
        <div className="vendor-rejection-wrap">
          <p className="vendor-rejection-noticetitle">
            <strong>
              Notice Regarding policy for Rejection &amp; Ground Rent on Rejected Supplies by BLW / Varanasi
            </strong>
          </p>
          <p className="vendor-rejection-intro">
            The Ground Rent charge on all rejected supplies lying in BLW premises at revised rate as under :-
          </p>
          <table className="vendor-rejection-table">
            <tbody>
              <tr>
                <td className="vendor-rejection-td-label">
                  For Rejection raised upto dated 17.01.2022
                </td>
                <td>
                  All vendors are hereby informed that w.e.f. 01.08.2012; BLW shall charge Ground Rent on all
                  rejected supplies lying in BLW premises at revised rate ½% (only Half Percent) per day of the
                  value of rejected material or Rs.10/-,whichever is higher.
                </td>
              </tr>
              <tr>
                <td className="vendor-rejection-td-label">
                  For Rejection raised after dated 18.01.2022
                </td>
                <td>
                  0.3 % per day for consignment weighting less than 250 Kgs in weight and 0.2% per day for
                  heavier consignment.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="vendor-rejection-para">
            &nbsp;&nbsp;&nbsp;&nbsp;All vendors are therefore advised to lift rejected materials lying in BLW
            premises by paying the Dues &amp; Ground Rent immediately after rejection. Please note:-
          </p>
          <p className="vendor-rejection-point">
            1.&nbsp;&nbsp;Rejected material is lying in BLW premises at your Risk &amp; Cost; revised rate of
            Ground Rent will be applicable.
          </p>
          <p className="vendor-rejection-point">
            2.&nbsp;&nbsp;In all cases BLW is authorized to scrap all rejected material lying at BLW at the
            risk &amp; cost of supplier beyond applicable free time.
          </p>
          <p className="vendor-rejection-point">
            3.&nbsp;&nbsp;The allowed free time to lift the rejected material is <strong>21</strong> days and{" "}
            <strong>60</strong> days for initial and warranty rejection respectively. For further details,
            you may contact following Officials:
          </p>
          <table className="vendor-officials-table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name of Official</th>
                <th>Designation</th>
                <th>Mobile No.</th>
                <th>Phone No.</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Sh. Shivam Verma</td><td>SMM/Depot</td><td>9794861722</td><td>0542-2644188</td></tr>
              <tr><td>2</td><td>Sh. R.P. Yadav</td><td>CDMS/Rejection</td><td>9794864243</td><td>0542-2644361</td></tr>
              <tr><td>3</td><td>Sh. Harendra Kumar Singh</td><td>CDMS/Warranty</td><td>9794864270</td><td>0542-2644361</td></tr>
            </tbody>
          </table>
          <div className="vendor-rejection-auth">
            <p>4. (a) Authority; Office Order No. 184/2012 dt 04.07.2012 issued by PCMM/BLW/Varanasi from File No. BLW-S/95/2 dt.28.06.2012</p>
            <p>&nbsp;&nbsp;&nbsp;(b) Authority: Office Order No. 006/2022 dt 17.01.2022 issued by office of PCMM/BLW, Varanasi from File No. BLW- BSB0GSD(REJ)/1/2021, Dated 17.01.2022</p>
            <p>&nbsp;&nbsp;&nbsp;(c) Authority: Office Order No. 2022/RS(G)/779/7(3390005) dt 17.10.2022 issued by Ministry of Railways/Rly. Board.</p>
          </div>
          <div className="vendor-rejection-signoff">
            <p>(Ankur Chandra)</p>
            <p>Dy.CMM/Depot</p>
            <p>BLW/Varanasi</p>
            <p>Mob.9794861709</p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          IMG 20 — BLW GST
      ══════════════════════════════════════════════ */}
      {isGST && (
        <div className="vendor-gst-wrap">
          <p className="vendor-gst-gstin">
            <strong>
              GSTIN for State of Uttar Pradesh in the name of Ministry of Railways is:{" "}
              09AAAGM0289C1ZH
            </strong>
          </p>
          <a href="#" className="vendor-link-blue vendor-gst-link">GST &amp; IMPORTS</a>
          <a href="#" className="vendor-link-blue vendor-gst-link">FAQ ON RAILWAYS</a>
          <a href="#" className="vendor-link-blue vendor-gst-link">GST OVERVIEW</a>
        </div>
      )}

      {/* ── Source footer ── */}
      <div className="vendor-source">
        <strong>{t("vendor.source")} :</strong>&nbsp;
        Welcome to BLW Official Website CMS Team&nbsp;Last Reviewed on: {data?.source}
      </div>

    </div>
  );
};

// ─── Named Exports ────────────────────────────────────────────────────────────
export const VendorInformation   = () => <VendorPage translationKey="vendor.pages.vendorInformation" />;
export const DraftSpecification  = () => <VendorPage translationKey="vendor.pages.draftSpec" />;
export const VendorLogin         = () => <VendorPage translationKey="vendor.pages.login" />;
export const BillingStatus       = () => <VendorPage translationKey="vendor.pages.billingStatus" />;
export const BillsFormat         = () => <VendorPage translationKey="vendor.pages.billsFormat" />;
export const DetailsBills        = () => <VendorPage translationKey="vendor.pages.detailsBills" />;
export const VendorDirectoryPage = () => <VendorPage translationKey="vendor.pages.vendorDirectory" />;
export const CurrentVendorDir    = () => <VendorPage translationKey="vendor.pages.currentVendorDir" />;
export const PreviousVendorDirs  = () => <VendorPage translationKey="vendor.pages.previousVendorDirs" />;
export const NewRegistration     = () => <VendorPage translationKey="vendor.pages.newRegistration" />;
export const Guidelines          = () => <VendorPage translationKey="vendor.pages.guidelines" />;
export const RejectionPolicy     = () => <VendorPage translationKey="vendor.pages.rejectionPolicy" />;
export const ApprovalSystem      = () => <VendorPage translationKey="vendor.pages.approvalSystem" />;
export const EftMandate          = () => <VendorPage translationKey="vendor.pages.eftMandate" />;
export const VendorParticulars   = () => <VendorPage translationKey="vendor.pages.particulars" />;
export const BlwGST              = () => <VendorPage translationKey="vendor.pages.gst" />;