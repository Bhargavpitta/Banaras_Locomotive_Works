import { useTranslation } from "react-i18next";
import { Bookmark, Mail, Printer } from "lucide-react";
import "./AbPage.css";

interface AbPageProps {
  translationKey: string;
}

const AbPage = ({ translationKey }: AbPageProps) => {
  const { t } = useTranslation();
  const data = t(translationKey, { returnObjects: true }) as any;

  const items = Array.isArray(data?.items) ? data.items : [];

  // Layout detection
  const isTimeline = Array.isArray(data) && data[0]?.date;
  const isHeritage = data?.description && Array.isArray(data.description) && data.description[0]?.heading;
  const isMilestones = data?.pohTable !== undefined;
  const isGallery = data?.images !== undefined;
  const isPhotoGallery = data?.galleries !== undefined;
  const isEnvironmental = data?.sections !== undefined;
  const isSwachh = data?.achievements !== undefined;
  const isContactForm = data?.toEmail !== undefined;
  const isDesign = data?.pdfLink !== undefined;
  const isPreviousProduct = data?.locomotive !== undefined;
  const isPortal = data?.contactUs !== undefined;
  const isOrgStrength = data?.points !== undefined && data?.description === undefined && data?.objectives === undefined;
  const isQuality = data?.objectivesTitle !== undefined;
  const isQualityPolicy = data?.commitmentTitle !== undefined;
  const isDepartment = data?.description && typeof data.description === "string" && !data?.points;

  const TopButtons = () => (
    <div className="ab-top">
      <div className="ab-buttons">
        <button className="ab-blue-button"><Bookmark size={16} />{t("about.bookmark")}</button>
        <button className="ab-blue-button"><Mail size={16} />{t("about.mailPage")}</button>
        <button className="ab-blue-button" onClick={() => window.print()}><Printer size={16} />{t("about.printPage")}</button>
      </div>
      <div className="ab-quick">
        <span>{t("about.quickLinks")}</span>
        <select><option>Select</option></select>
      </div>
    </div>
  );

  // TIMELINE
  if (isTimeline) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{t("about.briefHistoryTitle")}</h2>
          <table className="ab-table">
            <thead>
              <tr><th>Date</th><th>Year</th><th>Event</th></tr>
            </thead>
            <tbody>
              {data.map((item: any, i: number) => (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.year}</td>
                  <td>{item.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  }

  // HERITAGE
  if (isHeritage) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.heritagePageTitle}</h2>
          <p className="ab-subtitle">{data?.heritagePageSubtitle}</p>
          {data.description.map((loco: any) => (
            <div key={loco.id} className="ab-heritage-item">
              <h3 className="ab-heritage-heading">{loco.heading}</h3>
              {loco.image && loco.image !== "#" && (
                <img src={loco.image} alt={loco.imageAlt} className="ab-heritage-img" />
              )}
              <h4 className="ab-heritage-type">{loco.typeHeading}</h4>
              <p className="ab-para">{loco.para1}</p>
              <p className="ab-para">{loco.para2}</p>
              <p className="ab-para">{loco.para3}</p>
            </div>
          ))}
        </main>
      </div>
    );
  }

  // MILESTONES
  if (isMilestones) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <h3 className="ab-section-title">{data?.recentMilestonesTitle}</h3>
          {data?.recentMilestones?.map((m: string, i: number) => <p key={i} className="ab-para">{m}</p>)}
          <h3 className="ab-section-title">{data?.certificationsTitle}</h3>
          <ul className="ab-list">
            {data?.certifications?.map((c: string, i: number) => <li key={i}>{c}</li>)}
          </ul>
          <h3 className="ab-section-title">{data?.locomotiveProductionLast10Years}</h3>
          {data?.locomotiveProductionDescription?.map((d: string, i: number) => <p key={i} className="ab-para">{d}</p>)}
          <h3 className="ab-section-title">{data?.productionPlan2025Title}</h3>
          {data?.productionPlan2025?.map((d: string, i: number) => <p key={i} className="ab-para">{d}</p>)}
          <h3 className="ab-section-title">{data?.futurePlan2026Title}</h3>
          {data?.futurePlan2026?.map((d: string, i: number) => <p key={i} className="ab-para">{d}</p>)}
          <h3 className="ab-section-title">{data?.pohPlanTitle}</h3>
          <table className="ab-table">
            <thead>
              <tr>{data?.pohTable?.headers?.map((h: string, i: number) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {data?.pohTable?.rows?.map((row: any, i: number) => (
                <tr key={i}>
                  <td>{row.description}</td>
                  {row.data.map((d: string, j: number) => <td key={j}>{d}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  }

  // IMAGE GALLERY
  if (isGallery) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <div className="ab-gallery">
            {data.images.map((img: any) => (
              <div key={img.id} className="ab-gallery-item">
                <img src={img.src} alt={img.caption} className="ab-gallery-img" />
                <p className="ab-gallery-caption">{img.caption}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // PHOTO GALLERY
if (isPhotoGallery) {
  return (
    <div className="ab-container">
      <main className="ab-main">
        <TopButtons />
        <h2 className="ab-title">{data?.title}</h2>
        <div className="ab-photo-gallery">
          {data.galleries.map((g: any) => (
            <div key={g.id} className="ab-photo-row">
              <div className="ab-photo-left">
                {g.thumbnail && g.thumbnail !== "#" ? (
                  <img src={g.thumbnail} alt={g.caption} className="ab-photo-img" />
                ) : (
                  <div className="ab-photo-placeholder">📷</div>
                )}
                <a href="#" className="ab-photo-slideshow">( View Slide Show )</a>
              </div>
              <div className="ab-photo-right">
                <p className="ab-photo-caption">{g.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

  // ENVIRONMENTAL
  if (isEnvironmental) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          {data.sections.map((section: any) => (
            <div key={section.id} className="ab-env-section">
              <h3 className="ab-section-title">{section.heading}</h3>
              {section.image && section.image !== "#" && (
                <img src={section.image} alt={section.imageAlt} className="ab-env-img" />
              )}
              {section.paragraphs?.map((p: string, i: number) => <p key={i} className="ab-para">{p}</p>)}
              {section.subHeading && <h4 className="ab-sub-heading">{section.subHeading}</h4>}
              {section.points?.length > 0 && (
                <ul className="ab-list">
                  {section.points.map((pt: string, i: number) => <li key={i}>{pt}</li>)}
                </ul>
              )}
            </div>
          ))}
        </main>
      </div>
    );
  }

  // SWACHH BHARAT
  if (isSwachh) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <ol className="ab-pdf-list">
            {data.achievements.map((item: any) => (
              <li key={item.id}>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="ab-link">{item.label}</a>
              </li>
            ))}
          </ol>
          <h3 className="ab-section-title">{data?.photographsTitle}</h3>
          <ol className="ab-pdf-list">
            {data.photographs.map((item: any) => (
              <li key={item.id}>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="ab-link">{item.label}</a>
              </li>
            ))}
          </ol>
        </main>
      </div>
    );
  }

  // CONTACT FORM
if (isContactForm) {
  return (
    <div className="ab-container">
      <main className="ab-main">
        <TopButtons />
        <h2 className="ab-title">{data?.title}</h2>
        <a href="#" className="ab-link" style={{ display: "block", marginBottom: "1rem" }}>
          {data?.linkLabel}
        </a>
        <table className="ab-contact-table">
          <tbody>
            <tr>
              <td className="ab-contact-header" colSpan={2}>{data?.from}</td>
            </tr>
            <tr>
              <td className="ab-contact-label">{data?.emailLabel}</td>
              <td><input type="email" className="ab-contact-input" /></td>
            </tr>
            <tr>
              <td colSpan={2} className="ab-contact-error">{data?.emailError}</td>
            </tr>
            <tr>
              <td className="ab-contact-header" colSpan={2}>{data?.to}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <a href={`mailto:${data?.toEmail}`} className="ab-link">{data?.toEmail}</a>
              </td>
            </tr>
            <tr>
              <td className="ab-contact-header" colSpan={2}>{data?.subject}</td>
            </tr>
            <tr>
              <td colSpan={2}><input type="text" className="ab-contact-input" /></td>
            </tr>
            <tr>
              <td className="ab-contact-header" colSpan={2}>{data?.message}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <textarea className="ab-contact-textarea" rows={6} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="ab-contact-buttons">
                <button className="ab-contact-btn">{data?.submitBtn}</button>
                <button className="ab-contact-btn">{data?.resetBtn}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

  // DESIGN PDF
  if (isDesign) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <a href={data?.pdfLink} target="_blank" rel="noopener noreferrer" className="ab-link">
            {data?.description}
          </a>
        </main>
      </div>
    );
  }

  // PREVIOUS PRODUCT
  if (isPreviousProduct) {
    const loco = data.locomotive;
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <h3 className="ab-section-title">{loco?.name} — {loco?.subtitle}</h3>
          {loco?.description?.map((d: string, i: number) => <p key={i} className="ab-para">{d}</p>)}
          <div className="ab-specs-grid">
            {Object.values(loco?.specs || {}).map((spec: any, i: number) => (
              <div key={i} className="ab-spec-box">
                <h4 className="ab-spec-title">{spec.title}</h4>
                <ul className="ab-list">
                  {spec.points?.map((pt: string, j: number) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="ab-section-title">{loco?.generalCharacteristic?.title}</h3>
          <table className="ab-table">
            <tbody>
              {loco?.generalCharacteristic?.specs?.map((s: any, i: number) => (
                <tr key={i}>
                  <td><strong>{s.label}</strong></td>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ol className="ab-pdf-list" style={{ marginTop: "1rem" }}>
            {loco?.bottomLinks?.map((item: any) => (
              <li key={item.id}>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="ab-link">{item.label}</a>
              </li>
            ))}
          </ol>
          {data?.contact && (
            <div className="ab-contact-box">
              <h4 className="ab-sub-heading">{data.contact.title}</h4>
              <p className="ab-para">{data.contact.name}</p>
              <p className="ab-para">{data.contact.organization}</p>
              <p className="ab-para">{data.contact.address}</p>
              <p className="ab-para">{data.contact.tel}</p>
              <p className="ab-para">{data.contact.fax}</p>
              <p className="ab-para">
                <a href={`mailto:${data.contact.email}`} className="ab-link">{data.contact.email}</a>
              </p>
              <p className="ab-para">
                <a href={data.contact.website} target="_blank" rel="noopener noreferrer" className="ab-link">{data.contact.website}</a>
              </p>
            </div>
          )}
        </main>
      </div>
    );
  }

  // PORTAL POLICIES
  if (isPortal) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <p className="ab-para">{data?.introduction}</p>
          <h3 className="ab-section-title">{data?.contactUs?.title}</h3>
          <p className="ab-para">{data?.contactUs?.description}</p>
          <ul className="ab-list">
            {data?.contactUs?.details?.map((d: string, i: number) => <li key={i}>{d}</li>)}
          </ul>
          <h3 className="ab-section-title">{data?.nationalPortal?.title}</h3>
          <p className="ab-para">{data?.nationalPortal?.description}</p>
          <h3 className="ab-section-title">{data?.secondaryContent?.title}</h3>
          <p className="ab-para">{data?.secondaryContent?.description}</p>
          <h3 className="ab-section-title">{data?.eventsAnnouncements?.title}</h3>
          <p className="ab-para">{data?.eventsAnnouncements?.description}</p>
          <ul className="ab-list">
            {data?.eventsAnnouncements?.examples?.map((e: string, i: number) => <li key={i}>{e}</li>)}
          </ul>
          <ul className="ab-list" style={{ marginTop: "0.5rem" }}>
            {data?.eventsAnnouncements?.guidelines?.map((g: string, i: number) => <li key={i}>{g}</li>)}
          </ul>
          <h3 className="ab-section-title">{data?.relatedLinks?.title}</h3>
          <p className="ab-para">{data?.relatedLinks?.description}</p>
          <ul className="ab-list">
            {data?.relatedLinks?.guidelines?.map((g: string, i: number) => <li key={i}>{g}</li>)}
          </ul>
        </main>
      </div>
    );
  }

  // ORG STRENGTH
  if (isOrgStrength) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <ul className="ab-list">
            {data.points.map((pt: string, i: number) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }

  // QUALITY ASSURANCE
  if (isQuality) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          {data?.subtitle && <p className="ab-subtitle">{data?.subtitle}</p>}
          {data.description.map((d: string, i: number) => (
            <p key={i} className="ab-para">{d}</p>
          ))}
          {data?.objectivesTitle && <h4 className="ab-sub-heading">{data.objectivesTitle}</h4>}
          <ul className="ab-list">
            {data.objectives.map((o: string, i: number) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }

  // QUALITY POLICY
  if (isQualityPolicy) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          {data?.subtitle && <h3 className="ab-subtitle">{data?.subtitle}</h3>}
          {data?.description && <p className="ab-para">{data.description}</p>}
          {data?.commitmentTitle && <h4 className="ab-sub-heading">{data.commitmentTitle}</h4>}
          <ul className="ab-list">
            {data.points.map((pt: string, i: number) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }

  // DEPARTMENT
  if (isDepartment) {
    return (
      <div className="ab-container">
        <main className="ab-main">
          <TopButtons />
          <h2 className="ab-title">{data?.title}</h2>
          <p className="ab-para">{data?.description}</p>
        </main>
      </div>
    );
  }

  // SIMPLE LIST
  return (
    <div className="ab-container">
      <main className="ab-main">
        <TopButtons />
        <h2 className="ab-title">{data?.title}</h2>
        {data?.subtitle && <p className="ab-subtitle">{data?.subtitle}</p>}
        <ol className="ab-pdf-list">
          {items.map((item: any) => (
            <li key={item.id}>
              <a href={item.pdf || item.url} target="_blank" rel="noopener noreferrer" className="ab-link">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
};

export default AbPage;