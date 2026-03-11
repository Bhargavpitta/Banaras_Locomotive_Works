import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const VideoAssembly = () => {
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
      <h2 className="news-page-title">
        {t("news.videoAssembly")}
      </h2>

      {/* Video link */}
      <div className="news-video-link">
        <a
          href="/uploads/files/Video_Assembly_HHP_Diesel_Loco_Detector_Engine_Protection_Device.mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("news.videoAssemblyLink")}
        </a>
      </div>

      {/* Source footer */}
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team&nbsp;
        Last Reviewed on: 16-04-2025
      </div>

    </div>
  );
};

export default VideoAssembly;