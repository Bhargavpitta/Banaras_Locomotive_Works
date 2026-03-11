import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import "./loco.css";

interface LocoPageProps {
  translationKey: string;
}

const LocoPage = ({ translationKey }: LocoPageProps) => {
  const { t } = useTranslation();
  const data = t(translationKey, { returnObjects: true }) as any;
  const items = Array.isArray(data?.items) ? data.items : [];

  // Check layouts
  const isTable = items.length > 0 && items[0]?.dbNo;
  const isNested = items.length > 0 && items.some((i: any) => i?.children || i?.extras);

  return (
    <div className="loco-container">
      <main className="loco-main">

        {/* Top Buttons */}
        <div className="loco-top">
          <div className="loco-buttons">
            <button className="blue-button">
              <Bookmark />
              {t("locoPortal.bookmark")}
            </button>
            <button className="blue-button">
              <Mail />
              {t("locoPortal.mailPage")}
            </button>
            <button className="blue-button" onClick={() => window.print()}>
              <Printer />
              {t("locoPortal.printPage")}
            </button>
          </div>
          <div className="loco-quick">
            <span>{t("locoPortal.quickLinks")}</span>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Page Title */}
        <h2 className="loco-title">{data?.title}</h2>

        {/* Subtitle */}
        {data?.subtitle && <h3 className="loco-subtitle">{data?.subtitle}</h3>}

        {/* Coming Soon */}
        {data?.comingSoon && (
          <p className="loco-coming-soon">Coming Soon</p>
        )}

        {/* Top Link if exists */}
        {data?.link && (
          <a href={data?.linkUrl} target="_blank" rel="noopener noreferrer" className="loco-link">
            {data?.link}
          </a>
        )}

        {/* TABLE LAYOUT */}
        {isTable ? (
          <table className="loco-table">
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
                    <a href={item.dbUrl} target="_blank" rel="noopener noreferrer" className="loco-link">
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
          <ol className="nrc-list">
            {items.map((item: any) => (
              <li key={item.id}>
                {item.url ? (
                  <Link to={item.url} className="loco-link">{item.label}</Link>
                ) : (
                  <span className="nrc-label">{item.label}</span>
                )}

                {/* Children */}
                {item.children && (
                  <ul className="nrc-sublist">
                    {item.children.map((child: any) => (
                      <li key={child.id}>
                        <Link to={child.url} className="loco-link">{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Extras */}
                {item.extras && (
                  <span className="nrc-extras">
                    {" "}
                    {item.extras.map((extra: any, i: number) => (
                      <span key={i}>
                        {i > 0 && " & "}
                        <Link to={extra.url} className="loco-link">{extra.label}</Link>
                      </span>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ol>

        ) : (
          /* SIMPLE LIST LAYOUT */
          <ol className="loco-list">
            {items.map((item: any) => (
              <li key={item.id}>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="loco-link">
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

export default LocoPage;