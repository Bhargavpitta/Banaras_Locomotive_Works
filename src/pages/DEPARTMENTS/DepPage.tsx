import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import "./dep.css";

interface DepPageProps {
  translationKey: string;
}

const DepPage = ({ translationKey }: DepPageProps) => {
  const { t } = useTranslation();
  const data = t(translationKey, { returnObjects: true }) as any;
  const items = Array.isArray(data?.items) ? data.items : [];

  // Check layouts
  const isSystemImprovements = data?.years !== undefined;
  const isVigilanceOrg = data?.intro !== undefined && data?.contactRows !== undefined;
  const isDescription = data?.description !== undefined && items.length === 0 && !data?.comingSoon;
  const isContactForm = data?.toEmail !== undefined;
  const isStaffWelfare = data?.sections !== undefined;
  const isDownloadTable = data?.isDownloadTable === true;
  const isEstablishmentTable = data?.tableHeaders !== undefined && data?.rows !== undefined && data.rows[0]?.rbLetterNo !== undefined;
  const isSelectionTable = data?.tableHeaders !== undefined && data?.rows !== undefined && data.rows[0]?.orderNo === "Download";
  const isCommitteeTable = data?.tableHeaders !== undefined && data?.rows !== undefined && data.tableHeaders.length === 4 && data.rows[0]?.sn === "1";
  const isGazettedTable = data?.tableHeaders !== undefined && data?.rows !== undefined;
  const isTableWithList = data?.table !== undefined && items.length > 0;
  const isTable = items.length > 0 && items[0]?.dbNo;
  const isNested = items.length > 0 && items.some((i: any) => i?.children || i?.extras);
  const isBills = data?.storesSupplied !== undefined;

  return (
    <div className="dep-container">
      <main className="dep-main">

        {/* Top Buttons */}
        <div className="dep-top">
          <div className="dep-buttons">
            <button className="dep-blue-button">
              <Bookmark />
              {t("departments.bookmark")}
            </button>
            <button className="dep-blue-button">
              <Mail />
              {t("departments.mailPage")}
            </button>
            <button className="dep-blue-button" onClick={() => window.print()}>
              <Printer />
              {t("departments.printPage")}
            </button>
          </div>
          <div className="dep-quick">
            <span>{t("departments.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="dep-title">{data?.title}</h2>

        {/* Subtitle */}
        {data?.subtitle && <h3 className="dep-subtitle">{data?.subtitle}</h3>}

        {/* Coming Soon */}
        {data?.comingSoon && (
          <p className="dep-coming-soon">Coming Soon</p>
        )}

        {/* SYSTEM IMPROVEMENTS LAYOUT */}
        {isSystemImprovements ? (
          <div>
            {data.years.map((yearBlock: any) => (
              <div key={yearBlock.year} style={{ marginBottom: "2rem" }}>
                <h3 className="dep-subtitle">{yearBlock.year}</h3>
                <table className="dep-table">
                  <thead>
                    <tr>
                      {yearBlock.headers.map((h: string, i: number) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {yearBlock.rows.map((row: any, i: number) => (
                      <tr key={i}>
                        <td style={{ width: "50px", textAlign: "center" }}>{row.sn}</td>
                        <td>
                          <a href={row.pdf || "#"} target="_blank" rel="noopener noreferrer" className="dep-link">
                            {row.description}
                          </a>
                        </td>
                        <td style={{ width: "120px", textAlign: "center" }}>{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

        ) : isVigilanceOrg ? (
          /* VIGILANCE ORGANIZATION LAYOUT */
          <div>
            <p className="dep-para">{data.intro}</p>
            <ol className="dep-list">
              {data.links.map((link: any) => (
                <li key={link.id}>
                  {link.pdf ? (
                    <a href={link.pdf} target="_blank" rel="noopener noreferrer" className="dep-link">{link.label}</a>
                  ) : (
                    <a href={link.url || "#"} target="_blank" rel="noopener noreferrer" className="dep-link">{link.label}</a>
                  )}
                </li>
              ))}
            </ol>
            <p className="dep-para">{data.appealText}</p>
            <p className="dep-para"><strong>{data.addressLabel}</strong></p>
            <p className="dep-para" style={{ whiteSpace: "pre-line" }}>{data.address}</p>
            <p className="dep-para"><strong>Contact Nos. of Vigilance Officers</strong></p>
            <table className="dep-table" style={{ maxWidth: "400px" }}>
              <thead>
                <tr>
                  {data.tableHeaders.map((h: string, i: number) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.contactRows.map((row: any, i: number) => (
                  <tr key={i}>
                    <td>{row.name}</td>
                    <td>{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="dep-para">{data.railMadad}</p>
            <p className="dep-para"><em>{data.rtiNote}</em></p>
          </div>

        ) : isDescription ? (
          /* DESCRIPTION LAYOUT */
          <div>
            {data.description.split('\n\n').map((para: string, i: number) => (
              <p key={i} className="dep-para" style={{ whiteSpace: 'pre-line' }}>{para}</p>
            ))}
            {data?.contactEmail && (
              <p className="dep-para">
                For more information send your queries to{" "}
                <a href={`mailto:${data.contactEmail}`} className="dep-link">{data.contactEmail}</a>
              </p>
            )}
          </div>

        ) : isContactForm ? (
          /* CONTACT FORM LAYOUT */
          <table className="dep-contact-table">
            <tbody>
              <tr><td className="dep-contact-header" colSpan={2}>{data?.from}</td></tr>
              <tr>
                <td className="dep-contact-label">{data?.emailLabel}</td>
                <td><input type="email" className="dep-contact-input" /></td>
              </tr>
              <tr><td colSpan={2} className="dep-contact-error">{data?.emailError}</td></tr>
              <tr><td className="dep-contact-header" colSpan={2}>{data?.to}</td></tr>
              <tr>
                <td colSpan={2} style={{ padding: "0.4rem 0.75rem" }}>
                  <a href={`mailto:${data?.toEmail}`} className="dep-link">{data?.toEmail}</a>
                </td>
              </tr>
              <tr><td className="dep-contact-header" colSpan={2}>{data?.subject}</td></tr>
              <tr>
                <td colSpan={2} style={{ padding: "0.3rem" }}>
                  <input type="text" className="dep-contact-input" />
                </td>
              </tr>
              <tr><td className="dep-contact-header" colSpan={2}>{data?.message}</td></tr>
              <tr>
                <td colSpan={2} style={{ padding: "0.3rem" }}>
                  <textarea className="dep-contact-textarea" rows={6} />
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="dep-contact-buttons">
                  <button className="dep-contact-btn">{data?.submitBtn}</button>
                  <button className="dep-contact-btn">{data?.resetBtn}</button>
                </td>
              </tr>
            </tbody>
          </table>

        ) : isStaffWelfare ? (
          /* STAFF WELFARE LAYOUT */
          <div>
            {data?.link && (
              <a href={data?.linkUrl || "#"} target="_blank" rel="noopener noreferrer" className="dep-link dep-link-bold">
                {data?.link}
              </a>
            )}
            <p className="dep-para">B.L.W., Varanasi undertakes a Variety of welfare activities, important among these are:-</p>
            {data.sections.map((section: any) => (
              <div key={section.id} className="dep-section">
                <strong className="dep-section-heading">{section.heading}</strong>
                <p className="dep-para">{section.para}</p>
              </div>
            ))}
          </div>

        ) : isDownloadTable ? (
          /* DOWNLOAD TABLE LAYOUT */
          <table className="dep-table">
            <tbody>
              {data.rows.map((row: any) => (
                <tr key={row.id}>
                  <td>{row.subject}</td>
                  <td style={{ width: "100px", textAlign: "center" }}>
                    <a href={row.pdf || "#"} target="_blank" rel="noopener noreferrer" className="dep-link">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : isEstablishmentTable ? (
          /* ESTABLISHMENT CIRCULARS TABLE LAYOUT */
          <table className="dep-table">
            <thead>
              <tr>
                {data.tableHeaders.map((h: string, i: number) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row: any, i: number) => (
                <tr key={i}>
                  <td style={{ textAlign: "center" }}>{row.sn}</td>
                  <td>{row.orderNo}</td>
                  <td>{row.date}</td>
                  <td>{row.rbLetterNo}</td>
                  <td>{row.rbDate}</td>
                  <td>{row.subject}</td>
                  <td style={{ textAlign: "center" }}>
                    <a href={row.pdf || "#"} target="_blank" rel="noopener noreferrer" className="dep-link">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : isSelectionTable ? (
          /* SELECTION NOTICE TABLE LAYOUT */
          <table className="dep-table">
            <thead>
              <tr>
                {data.tableHeaders.map((h: string, i: number) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row: any, i: number) => (
                <tr key={i}>
                  <td>{row.subject}</td>
                  <td style={{ textAlign: "center" }}>
                    <a href={row.pdf || "#"} target="_blank" rel="noopener noreferrer" className="dep-link">
                      {row.orderNo}
                    </a>
                  </td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : isCommitteeTable ? (
          /* COMMITTEE TABLE LAYOUT */
          <table className="dep-table">
            <thead>
              <tr>
                {data.tableHeaders.map((h: string, i: number) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row: any, i: number) => (
                <tr key={i}>
                  <td>{row.subject}</td>
                  <td>{row.orderNo}</td>
                  <td>{row.date}</td>
                  <td>{row.department}</td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : isGazettedTable ? (
          /* GAZETTED TABLE LAYOUT */
          <table className="dep-table">
            <thead>
              <tr>
                {data.tableHeaders.map((h: string, i: number) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row: any, i: number) => (
                <tr key={i}>
                  <td>{row.sn}</td>
                  <td>
                    <a href={row.pdf || "#"} target="_blank" rel="noopener noreferrer" className="dep-link">
                      {row.orderNo}
                    </a>
                  </td>
                  <td>{row.subject}</td>
                  <td>{row.date}</td>
                  <td>{row.department}</td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : isTableWithList ? (
          /* TABLE WITH LIST LAYOUT */
          <>
            <table className="dep-table">
              <thead>
                <tr>
                  {data.table.headers.map((h: string, i: number) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row: any, i: number) => (
                  <tr key={i}>
                    <td>{row.subject}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ol className="dep-list">
              {items.map((item: any) => (
                <li key={item.id}>
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="dep-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </>

        ) : isBills ? (
          /* BILLS LAYOUT */
          <>
            <hr className="dep-divider" />
            <a href={data?.pdf || "#"} target="_blank" rel="noopener noreferrer" className="dep-link dep-link-bold">
              {data?.storesSupplied}
            </a>
          </>

        ) : isTable ? (
          /* TABLE LAYOUT */
          <table className="dep-table">
            <thead>
              <tr>
                <th></th>
                <th>DB No.</th>
                <th>Year</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <a href={item.dbUrl} target="_blank" rel="noopener noreferrer" className="dep-link">
                      {item.dbNo}
                    </a>
                  </td>
                  <td>{item.year}</td>
                  <td>{item.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>

        ) : isNested ? (
          /* NESTED LIST LAYOUT */
          <ol className="dep-nrc-list">
            {items.map((item: any) => (
              <li key={item.id}>
                {item.url ? (
                  <Link to={item.url} className="dep-link">{item.label}</Link>
                ) : item.pdf ? (
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="dep-link">{item.label}</a>
                ) : (
                  <span className="dep-nrc-label">{item.label}</span>
                )}

                {/* Children */}
                {item.children && (
                  <ul className="dep-nrc-sublist">
                    {item.children.map((child: any) => (
                      <li key={child.id}>
                        <Link to={child.url} className="dep-link">{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Extras */}
                {item.extras && (
                  <span className="dep-nrc-extras">
                    {" "}
                    {item.extras.map((extra: any, i: number) => (
                      <span key={i}>
                        {i > 0 && " & "}
                        <Link to={extra.url} className="dep-link">{extra.label}</Link>
                      </span>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ol>

        ) : (
          /* SIMPLE LIST LAYOUT */
          <ol className="dep-list">
            {items.map((item: any) => (
              <li key={item.id}>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="dep-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        )}

      </main>
    </div>
  );
};

export default DepPage;