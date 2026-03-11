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

        {/* Top Link if exists */}
        {data?.link && (
          <a href={data?.linkUrl} target="_blank" rel="noopener noreferrer" className="dep-link">
            {data?.link}
          </a>
        )}

        {/* TABLE WITH LIST LAYOUT */}
        {isTableWithList ? (
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