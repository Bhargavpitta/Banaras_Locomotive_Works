import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const pressReleases = [
  // 2026
  { label: "Press Releases- January, 2026", file: "/uploads/files/Press_Release_January_2026.pdf" },
  // 2025
  { label: "Press Releases- December, 2025", file: "/uploads/files/Press_Release_December_2025.pdf" },
  { label: "Press Releases- November, 2025", file: "/uploads/files/Press_Release_November_2025.pdf" },
  { label: "Press Releases- October, 2025", file: "/uploads/files/Press_Release_October_2025.pdf" },
  { label: "Press Releases- September, 2025", file: "/uploads/files/Press_Release_September_2025.pdf" },
  { label: "Press Releases- August, 2025", file: "/uploads/files/Press_Release_August_2025.pdf" },
  { label: "Press Releases- July, 2025", file: "/uploads/files/Press_Release_July_2025.pdf" },
  { label: "Press Releases- June, 2025", file: "/uploads/files/Press_Release_June_2025.pdf" },
  { label: "Press Releases- May, 2025", file: "/uploads/files/Press_Release_May_2025.pdf" },
  { label: "Press Releases- April, 2025", file: "/uploads/files/Press_Release_April_2025.pdf" },
  { label: "Press Releases- March,2025", file: "/uploads/files/Press_Release_March_2025.pdf" },
  { label: "Press Releases- February, 2025", file: "/uploads/files/Press_Release_February_2025.pdf" },
  { label: "Press Releases- January, 2025", file: "/uploads/files/Press_Release_January_2025.pdf" },
  // 2024
  { label: "Press Releases- December, 2024", file: "/uploads/files/Press_Release_December_2024.pdf" },
  { label: "Press Releases- November, 2024", file: "/uploads/files/Press_Release_November_2024.pdf" },
  { label: "Press Releases- October, 2024", file: "/uploads/files/Press_Release_October_2024.pdf" },
  { label: "Press Releases- September, 2024", file: "/uploads/files/Press_Release_September_2024.pdf" },
  { label: "Press Releases- August, 2024", file: "/uploads/files/Press_Release_August_2024.pdf" },
  { label: "Press Releases- July, 2024", file: "/uploads/files/Press_Release_July_2024.pdf" },
  { label: "Press Releases- June, 2024", file: "/uploads/files/Press_Release_June_2024.pdf" },
  { label: "Press Releases- May, 2024", file: "/uploads/files/Press_Release_May_2024.pdf" },
  { label: "Press Releases- April, 2024", file: "/uploads/files/Press_Release_April_2024.pdf" },
  { label: "Press Releases- March,2024", file: "/uploads/files/Press_Release_March_2024.pdf" },
  { label: "Press Releases- February, 2024", file: "/uploads/files/Press_Release_February_2024.pdf" },
  { label: "Press Releases- January, 2024", file: "/uploads/files/Press_Release_January_2024.pdf" },
  // 2023
  { label: "Press Releases- December, 2023", file: "/uploads/files/Press_Release_December_2023.pdf" },
  { label: "Press Releases- November, 2023", file: "/uploads/files/Press_Release_November_2023.pdf" },
  { label: "Press Releases- October, 2023", file: "/uploads/files/Press_Release_October_2023.pdf" },
  { label: "Press Releases- September, 2023", file: "/uploads/files/Press_Release_September_2023.pdf" },
  { label: "Press Releases- August, 2023", file: "/uploads/files/Press_Release_August_2023.pdf" },
  { label: "Press Releases- July, 2023", file: "/uploads/files/Press_Release_July_2023.pdf" },
  { label: "Press Releases- June, 2023", file: "/uploads/files/Press_Release_June_2023.pdf" },
  { label: "Press Releases- May, 2023", file: "/uploads/files/Press_Release_May_2023.pdf" },
  { label: "Press Releases- April, 2023", file: "/uploads/files/Press_Release_April_2023.pdf" },
  { label: "Press Releases- March, 2023", file: "/uploads/files/Press_Release_March_2023.pdf" },
  { label: "Press Releases- February, 2023", file: "/uploads/files/Press_Release_February_2023.pdf" },
  { label: "Press Releases- January, 2023", file: "/uploads/files/Press_Release_January_2023.pdf" },
  // 2022
  { label: "Press Releases- December,2022", file: "/uploads/files/Press_Release_December_2022.pdf" },
  { label: "Press Releases- November,2022", file: "/uploads/files/Press_Release_November_2022.pdf" },
  { label: "Press Releases- October,2022", file: "/uploads/files/Press_Release_October_2022.pdf" },
  { label: "Press Releases- September,2022", file: "/uploads/files/Press_Release_September_2022.pdf" },
  { label: "Press Releases- August,2022", file: "/uploads/files/Press_Release_August_2022.pdf" },
  { label: "Press Releases- July,2022", file: "/uploads/files/Press_Release_July_2022.pdf" },
  { label: "Press Releases- June,2022", file: "/uploads/files/Press_Release_June_2022.pdf" },
  { label: "Press Releases- May,2022", file: "/uploads/files/Press_Release_May_2022.pdf" },
  { label: "Press Releases- April,2022", file: "/uploads/files/Press_Release_April_2022.pdf" },
  { label: "Press Releases- March,2022", file: "/uploads/files/Press_Release_March_2022.pdf" },
  { label: "Press Releases- February,2022", file: "/uploads/files/Press_Release_February_2022.pdf" },
  { label: "Press Releases- January,2022", file: "/uploads/files/Press_Release_January_2022.pdf" },
  // 2021
  { label: "Press Releases- December,2021", file: "/uploads/files/Press_Release_December_2021.pdf" },
  { label: "Press Releases- November,2021", file: "/uploads/files/Press_Release_November_2021.pdf" },
  { label: "Press Releases- October,2021", file: "/uploads/files/Press_Release_October_2021.pdf" },
  { label: "Press Releases- September,2021", file: "/uploads/files/Press_Release_September_2021.pdf" },
  { label: "Press Releases- August,2021", file: "/uploads/files/Press_Release_August_2021.pdf" },
  { label: "Press Releases- July,2021", file: "/uploads/files/Press_Release_July_2021.pdf" },
  { label: "Press Releases- June,2021", file: "/uploads/files/Press_Release_June_2021.pdf" },
  { label: "Press Releases- May,2021", file: "/uploads/files/Press_Release_May_2021.pdf" },
  { label: "Press Releases- April,2021", file: "/uploads/files/Press_Release_April_2021.pdf" },
  { label: "Press Releases- March,2021", file: "/uploads/files/Press_Release_March_2021.pdf" },
  { label: "Press Releases- February,2021", file: "/uploads/files/Press_Release_February_2021.pdf" },
  { label: "Press Releases- January,2021", file: "/uploads/files/Press_Release_January_2021.pdf" },
  // 2020
  { label: "Press Releases- December, 2020", file: "/uploads/files/Press_Release_December_2020.pdf" },
  { label: "Press Releases- November, 2020", file: "/uploads/files/Press_Release_November_2020.pdf" },
  { label: "Press Releases- October, 2020", file: "/uploads/files/Press_Release_October_2020.pdf" },
  { label: "Press Releases- September, 2020", file: "/uploads/files/Press_Release_September_2020.pdf" },
  { label: "Press Releases- August, 2020", file: "/uploads/files/Press_Release_August_2020.pdf" },
  { label: "Press Releases- July, 2020", file: "/uploads/files/Press_Release_July_2020.pdf" },
  { label: "Press Releases- June, 2020", file: "/uploads/files/Press_Release_June_2020.pdf" },
  { label: "Press Releases- March, 2020", file: "/uploads/files/Press_Release_March_2020.pdf" },
  { label: "Press Releases- February, 2020", file: "/uploads/files/Press_Release_February_2020.pdf" },
  { label: "Press Releases- January, 2020", file: "/uploads/files/Press_Release_January_2020.pdf" },
  // 2019
  { label: "Press Releases- 16th to 31st December, 2019", file: "/uploads/files/Press_Release_16_31_December_2019.pdf" },
  { label: "Press Releases- 01st to 15th December, 2019", file: "/uploads/files/Press_Release_01_15_December_2019.pdf" },
  { label: "Press Releases- 16th to 30th November, 2019", file: "/uploads/files/Press_Release_16_30_November_2019.pdf" },
  { label: "Press Releases- 01st to 15th November, 2019", file: "/uploads/files/Press_Release_01_15_November_2019.pdf" },
  { label: "Press Releases- 16th to 31st October, 2019", file: "/uploads/files/Press_Release_16_31_October_2019.pdf" },
  { label: "Press Releases- 01st to 15th October, 2019", file: "/uploads/files/Press_Release_01_15_October_2019.pdf" },
  { label: "Press Releases- 16th to 30th September, 2019", file: "/uploads/files/Press_Release_16_30_September_2019.pdf" },
  { label: "Press Releases- 01st to 15th September, 2019", file: "/uploads/files/Press_Release_01_15_September_2019.pdf" },
  { label: "Press Releases- 16th to 31st August, 2019", file: "/uploads/files/Press_Release_16_31_August_2019.pdf" },
  { label: "Press Releases- 01st to 15th August, 2019", file: "/uploads/files/Press_Release_01_15_August_2019.pdf" },
  { label: "Press Releases- 16th to 31st July, 2019", file: "/uploads/files/Press_Release_16_31_July_2019.pdf" },
  { label: "Press Releases- 01st to 15th July, 2019", file: "/uploads/files/Press_Release_01_15_July_2019.pdf" },
  { label: "Press Releases- 16th to 30th June, 2019", file: "/uploads/files/Press_Release_16_30_June_2019.pdf" },
  { label: "Press Releases- 01st to 15th June, 2019", file: "/uploads/files/Press_Release_01_15_June_2019.pdf" },
  { label: "Press Releases- 16th to 31st May, 2019", file: "/uploads/files/Press_Release_16_31_May_2019.pdf" },
  { label: "Press Releases- 01st to 15th May, 2019", file: "/uploads/files/Press_Release_01_15_May_2019.pdf" },
  { label: "Press Releases-16th to 30th April, 2019", file: "/uploads/files/Press_Release_16_30_April_2019.pdf" },
  { label: "Press Releases-01st to 15th April, 2019", file: "/uploads/files/Press_Release_01_15_April_2019.pdf" },
  { label: "Press Releases-16th to 31st March, 2019", file: "/uploads/files/Press_Release_16_31_March_2019.pdf" },
  { label: "Press Releases-01st to 15th March, 2019", file: "/uploads/files/Press_Release_01_15_March_2019.pdf" },
  { label: "Press Releases-16th to 28th February, 2019", file: "/uploads/files/Press_Release_16_28_February_2019.pdf" },
  { label: "Press Releases-01st to 15th February, 2019", file: "/uploads/files/Press_Release_01_15_February_2019.pdf" },
  { label: "Press Releases-16th to 31st January, 2019", file: "/uploads/files/Press_Release_16_31_January_2019.pdf" },
  { label: "Press Releases-01st to 15th January, 2019", file: "/uploads/files/Press_Release_01_15_January_2019.pdf" },
];

const PressReleases = () => {
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
      <h2 className="news-page-title">{t("news.pressReleases")}</h2>

      {/* Press Release links list */}
      <ul className="news-report-list">
        {pressReleases.map((item, index) => (
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
        Last Reviewed on: 05-02-2026
      </div>

    </div>
  );
};

export default PressReleases;