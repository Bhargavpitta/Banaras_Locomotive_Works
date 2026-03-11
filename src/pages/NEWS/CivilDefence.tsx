import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const pcdoLinks = [
  { label: "PCDO January 2017", file: "/uploads/files/PCDO_January_2017.pdf" },
  { label: "PCDO March 2017", file: "/uploads/files/PCDO_March_2017.pdf" },
  { label: "PCDO May 2017", file: "/uploads/files/PCDO_May_2017.pdf" },
  { label: "PCDO June 2017", file: "/uploads/files/PCDO_June_2017.pdf" },
  { label: "PCDO July 2017", file: "/uploads/files/PCDO_July_2017.pdf" },
  { label: "PCDO August 2017", file: "/uploads/files/PCDO_August_2017.pdf" },
  { label: "PCDO September 2017", file: "/uploads/files/PCDO_September_2017.pdf" },
  { label: "PCDO October 2017", file: "/uploads/files/PCDO_October_2017.pdf" },
  { label: "PCDO January2018", file: "/uploads/files/PCDO_January_2018.pdf" },
  { label: "PCDO February2018", file: "/uploads/files/PCDO_February_2018.pdf" },
  { label: "PCDO March2018", file: "/uploads/files/PCDO_March_2018.pdf" },
  { label: "PCDO April 2018", file: "/uploads/files/PCDO_April_2018.pdf" },
  { label: "PCDO May 2018", file: "/uploads/files/PCDO_May_2018.pdf" },
  { label: "PCDO June 2018", file: "/uploads/files/PCDO_June_2018.pdf" },
  { label: "PCDO July 2018", file: "/uploads/files/PCDO_July_2018.pdf" },
  { label: "PCDO August 2018", file: "/uploads/files/PCDO_August_2018.pdf" },
  { label: "PCDO September 2018", file: "/uploads/files/PCDO_September_2018.pdf" },
  { label: "PCDO October 2018", file: "/uploads/files/PCDO_October_2018.pdf" },
  { label: "PCDO November 2018", file: "/uploads/files/PCDO_November_2018.pdf" },
  { label: "PCDO December 2018", file: "/uploads/files/PCDO_December_2018.pdf" },
  { label: "PCDO January 2019", file: "/uploads/files/PCDO_January_2019.pdf" },
  { label: "PCDO February 2019", file: "/uploads/files/PCDO_February_2019.pdf" },
  { label: "PCDO March 2019", file: "/uploads/files/PCDO_March_2019.pdf" },
  { label: "PCDO April 2019", file: "/uploads/files/PCDO_April_2019.pdf" },
  { label: "PCDO May 2019", file: "/uploads/files/PCDO_May_2019.pdf" },
  { label: "PCDO June 2019", file: "/uploads/files/PCDO_June_2019.pdf" },
  { label: "PCDO July 2019", file: "/uploads/files/PCDO_July_2019.pdf" },
  { label: "PCDO August 2019", file: "/uploads/files/PCDO_August_2019.pdf" },
  { label: "PCDO September 2019", file: "/uploads/files/PCDO_September_2019.pdf" },
  { label: "PCDO October 2019", file: "/uploads/files/PCDO_October_2019.pdf" },
  { label: "PCDO November 2019", file: "/uploads/files/PCDO_November_2019.pdf" },
  { label: "PCDO December 2019", file: "/uploads/files/PCDO_December_2019.pdf" },
  { label: "PCDO January 2020", file: "/uploads/files/PCDO_January_2020.pdf" },
  { label: "PCDO February 2020", file: "/uploads/files/PCDO_February_2020.pdf" },
];

const photoGalleryLinks = [
  { label: "Civil Defence Activity", file: "/uploads/files/Gallery_Civil_Defence_Activity.pdf" },
  { label: "Training Program May 2017", file: "/uploads/files/Gallery_Training_May_2017.pdf" },
  { label: "Cleanliness Drive - May 2017", file: "/uploads/files/Gallery_Cleanliness_May_2017.pdf" },
  { label: "Ex controller Fairwell", file: "/uploads/files/Gallery_Ex_Controller_Fairwell.pdf" },
  { label: "New Controller visit", file: "/uploads/files/Gallery_New_Controller_Visit.pdf" },
  { label: "Training Program June 2017", file: "/uploads/files/Gallery_Training_June_2017.pdf" },
  { label: "International Yoga Day 2017", file: "/uploads/files/Gallery_Yoga_Day_2017.pdf" },
  { label: "Cleanliness Drive - July 2017", file: "/uploads/files/Gallery_Cleanliness_July_2017.pdf" },
  { label: "Training Program July 2017", file: "/uploads/files/Gallery_Training_July_2017.pdf" },
  { label: "Plantation Program - August 2017", file: "/uploads/files/Gallery_Plantation_August_2017.pdf" },
  { label: "Training Program August 2017", file: "/uploads/files/Gallery_Training_August_2017.pdf" },
  { label: "Annual Training Camp 2017", file: "/uploads/files/Gallery_Annual_Training_Camp_2017.pdf" },
  { label: "Training Program September 2017", file: "/uploads/files/Gallery_Training_September_2017.pdf" },
  { label: "Cleanliness Drive - October 2017", file: "/uploads/files/Gallery_Cleanliness_October_2017.pdf" },
  { label: "Cleaning Program October 2017", file: "/uploads/files/Gallery_Cleaning_October_2017.pdf" },
  { label: "National Unity Swearing Program October 2017", file: "/uploads/files/Gallery_National_Unity_October_2017.pdf" },
];

const CivilDefence = () => {
  const { t } = useTranslation();

  return (
    <div className="news-page-container">

      {/* Top action bar */}
      <div className="news-page-top">
        <div className="news-page-buttons">
          <button>
            <Bookmark className="w-4 h-4" />
            {t("news.bookmark")}
          </button>
          <button>
            <Mail className="w-4 h-4" />
            {t("news.mailPage")}
          </button>
          <button onClick={() => window.print()}>
            <Printer className="w-4 h-4" />
            {t("news.printPage")}
          </button>
        </div>
        <div className="news-page-quick">
          <span>{t("news.quickLinks")}</span>
          <select>
            <option>{t("news.select")}</option>
          </select>
        </div>
      </div>

      {/* Page title */}
      <h2 className="news-page-title">{t("news.civilDefence")}</h2>

      {/* Civil Defence Organisations heading */}
      <h3 className="civil-defence-heading">{t("news.civilDefenceOrg")}</h3>

      {/* Civil Defence description text */}
      <div className="civil-defence-text">
        <p>{t("news.civilDefencePara1")}</p>
        <p>{t("news.civilDefencePara2")}</p>
      </div>

      {/* PCDO links list */}
      <ul className="news-report-list">
        {pcdoLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="news-report-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Photo Gallery section */}
      <div className="civil-defence-gallery-title">{t("news.photoGallery")}</div>

      <ul className="news-report-list">
        {photoGalleryLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="news-report-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Source footer */}
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: 02-11-2020
      </div>

    </div>
  );
};

export default CivilDefence;