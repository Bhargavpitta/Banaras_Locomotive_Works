import { Bookmark, Mail, Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./NewsPage.css";

const ShortVideo = () => {
  const { t } = useTranslation();
  return (
    <div className="news-page-container">
      <div className="news-page-top">
        <div className="news-page-buttons">
          <button><Bookmark className="w-4 h-4" />{t("news.bookmark")}</button>
          <button><Mail className="w-4 h-4" />{t("news.mailPage")}</button>
          <button onClick={() => window.print()}><Printer className="w-4 h-4" />{t("news.printPage")}</button>
        </div>
        <div className="news-page-quick">
          <span>{t("news.quickLinks")}</span>
          <select><option>{t("news.select")}</option></select>
        </div>
      </div>
      <h2 className="news-page-title">{t("news.shortVideo")}</h2>
      <div className="news-video-link">
        <a href="/uploads/files/Short_Video_3000HP_Cape_Gauge_Locomotive_Mozambique.mp4" target="_blank" rel="noopener noreferrer">
          {t("news.shortVideoLink")}
        </a>
      </div>
      <div className="news-page-source">
        <span>{t("news.source")} :</span> Welcome to BLW Official Website CMS Team Last Reviewed on: 07-04-2021
      </div>
    </div>
  );
};
export default ShortVideo;