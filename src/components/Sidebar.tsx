import { useTranslation } from 'react-i18next';
import './Sidebar.css';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside aria-label="Sidebar">
      <div className="sidebar-widget">
        <div className="sidebar-widget__header">
          <svg className="sidebar-widget__header-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
          </svg>
          {t('sidebar.newsTitle')}
        </div>
        <div className="sidebar-widget__body">
          <div className="sidebar-widget__item">
            <a 
  href="/images/AA.pdf" 
  className="sidebar-widget__link" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Result for Junior Resident (House Surgeon) on contract basis for the Central Hospital, BLW/Varanasi
</a>
          </div>
          <div className="sidebar-widget__item">
            <a
      href="/images/BB.pdf"
      className="sidebar-widget__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      C & T Lab, BLW Varanasi Testing Charges for Outside Firm
    </a>
          </div>
        </div>
      </div>

      <div className="sidebar-widget">
        <div className="sidebar-widget__header">
          <svg className="sidebar-widget__header-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          {t('sidebar.tendersTitle')}
        </div>
        <div className="sidebar-widget__body">
          <p>{t('sidebar.noTenders')}</p>
        </div>
      </div>

      <button className="sidebar__btn sidebar__btn--red">
  <a 
    href="/images/CC.pdf"       // path to your PDF in public folder
    target="_blank"      // opens in new tab
    rel="noopener noreferrer"
    style={{ color: "inherit", textDecoration: "none" }} // keep button styling
  >
    {t('sidebar.eoi')}
  </a>
</button>
      <button className="sidebar__btn sidebar__btn--orange">
        {t('sidebar.complaints')}
      </button>
      <button className="sidebar__btn sidebar__btn--green">
        {t('sidebar.gstRailways')}
      </button>
      <button className="sidebar__btn">
        {t('sidebar.publicGrievances')}
      </button>

      <p className="sidebar__meta">{t('sidebar.lastUpdated')}</p>
      <p className="sidebar__meta">{t('sidebar.visitors')}</p>
    </aside>
  );
};

export default Sidebar;
