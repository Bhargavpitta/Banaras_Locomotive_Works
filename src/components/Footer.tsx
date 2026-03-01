import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const missionPoints = t('footer.missionPoints', { returnObjects: true }) as string[];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div>
          <h3 className="footer__section-title">{t('footer.quickLinks')}</h3>
          <a href="#" className="footer__link">{t('footer.siteMap')}</a>
          <a href="#" className="footer__link">{t('footer.contactUs')}</a>
          <a href="#" className="footer__link">{t('footer.rti')}</a>
          <a href="#" className="footer__link">{t('footer.skillDev')}</a>
        </div>
        <div>
          <h3 className="footer__section-title">{t('footer.privacyPolicy')}</h3>
          <a href="#" className="footer__link">{t('footer.disclaimer')}</a>
          <a href="#" className="footer__link">{t('footer.termsConditions')}</a>
          <a href="#" className="footer__link">{t('footer.accessibility')}</a>
        </div>
        <div>
          <h3 className="footer__section-title">{t('footer.contactUs')}</h3>
          <p className="footer__vision">{t('header.title')}</p>
          <p className="footer__vision">{t('header.address')}</p>
          <p className="footer__vision">{t('header.phone')}</p>
          <p className="footer__vision">{t('header.fax')}</p>
        </div>
        <div>
          <h3 className="footer__section-title">Vision & Mission</h3>
          <p className="footer__vision">{t('footer.vision')}</p>
          <p className="footer__vision" style={{ marginTop: '8px' }}>{t('footer.mission')}</p>
          <ul className="footer__mission-list">
            {Array.isArray(missionPoints) && missionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">{t('footer.siteMap')}</a>
          <a href="#" className="footer__bottom-link">{t('footer.contactUs')}</a>
          <a href="#" className="footer__bottom-link">{t('footer.rti')}</a>
          <a href="#" className="footer__bottom-link">{t('footer.disclaimer')}</a>
          <a href="#" className="footer__bottom-link">{t('footer.privacyPolicy')}</a>
          <a href="#" className="footer__bottom-link">{t('footer.termsConditions')}</a>
        </div>
        <p className="footer__copyright">{t('footer.copyright')}</p>
        <p className="footer__description">{t('footer.description')}</p>
      </div>
    </footer>
  );
};

export default Footer;
