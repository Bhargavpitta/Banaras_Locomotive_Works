import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const samwadList = [
  // 2025
  { label: "October to December-2025", file: "/uploads/files/Samwad_Oct_Dec_2025.pdf" },
  { label: "July to September - 2025", file: "/uploads/files/Samwad_Jul_Sep_2025.pdf" },
  { label: "April to June - 2025", file: "/uploads/files/Samwad_Apr_Jun_2025.pdf" },
  { label: "January to March - 2025", file: "/uploads/files/Samwad_Jan_Mar_2025.pdf" },
  // 2024
  { label: "October to December-2024", file: "/uploads/files/Samwad_Oct_Dec_2024.pdf" },
  { label: "July to September - 2024", file: "/uploads/files/Samwad_Jul_Sep_2024.pdf" },
  { label: "April to June - 2024", file: "/uploads/files/Samwad_Apr_Jun_2024.pdf" },
  { label: "January to March - 2024", file: "/uploads/files/Samwad_Jan_Mar_2024.pdf" },
  // 2023
  { label: "October to December-2023", file: "/uploads/files/Samwad_Oct_Dec_2023.pdf" },
  { label: "July to September - 2023", file: "/uploads/files/Samwad_Jul_Sep_2023.pdf" },
  { label: "International Yoga Day - 2023", file: "/uploads/files/Samwad_Yoga_Day_2023.pdf" },
  { label: "April to June - 2023", file: "/uploads/files/Samwad_Apr_Jun_2023.pdf" },
  { label: "January to March - 2023", file: "/uploads/files/Samwad_Jan_Mar_2023.pdf" },
  // 2022
  { label: "October to December-2022", file: "/uploads/files/Samwad_Oct_Dec_2022.pdf" },
  { label: "Azadi ka Amrit Mohatsav-2022", file: "/uploads/files/Samwad_Azadi_Amrit_Mohatsav_2022.pdf" },
  { label: "July to September - 2022", file: "/uploads/files/Samwad_Jul_Sep_2022.pdf" },
  { label: "April to June - 2022", file: "/uploads/files/Samwad_Apr_Jun_2022.pdf" },
  { label: "January to March - 2022", file: "/uploads/files/Samwad_Jan_Mar_2022.pdf" },
  // 2021
  { label: "October to December - 2021", file: "/uploads/files/Samwad_Oct_Dec_2021.pdf" },
  { label: "July to September - 2021", file: "/uploads/files/Samwad_Jul_Sep_2021.pdf" },
  { label: "April to June - 2021", file: "/uploads/files/Samwad_Apr_Jun_2021.pdf" },
  { label: "January to March - 2021", file: "/uploads/files/Samwad_Jan_Mar_2021.pdf" },
  // 2020
  { label: "October to December - 2020", file: "/uploads/files/Samwad_Oct_Dec_2020.pdf" },
  { label: "July to September - 2020", file: "/uploads/files/Samwad_Jul_Sep_2020.pdf" },
  { label: "April to June - 2020", file: "/uploads/files/Samwad_Apr_Jun_2020.pdf" },
  { label: "January to March - 2020", file: "/uploads/files/Samwad_Jan_Mar_2020.pdf" },
  // 2019
  { label: "October to December - 2019", file: "/uploads/files/Samwad_Oct_Dec_2019.pdf" },
  { label: "July to September - 2019", file: "/uploads/files/Samwad_Jul_Sep_2019.pdf" },
  { label: "April to June - 2019", file: "/uploads/files/Samwad_Apr_Jun_2019.pdf" },
  { label: "January to March - 2019", file: "/uploads/files/Samwad_Jan_Mar_2019.pdf" },
  // 2018
  { label: "October to December - 2018", file: "/uploads/files/Samwad_Oct_Dec_2018.pdf" },
  { label: "July to September - 2018", file: "/uploads/files/Samwad_Jul_Sep_2018.pdf" },
  { label: "April to June - 2018", file: "/uploads/files/Samwad_Apr_Jun_2018.pdf" },
  { label: "January to March - 2018", file: "/uploads/files/Samwad_Jan_Mar_2018.pdf" },
];

const Samwad = () => {
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
      <h2 className="news-page-title">{t("news.samwad")}</h2>

      {/* Samwad links list */}
      <ul className="news-report-list samwad-list">
        {samwadList.map((item, index) => (
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
        Last Reviewed on: 10-02-2026
      </div>

    </div>
  );
};

export default Samwad;