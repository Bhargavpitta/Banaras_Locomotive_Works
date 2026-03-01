import { useTranslation } from 'react-i18next';
import './Ministers.css';

const Ministers = () => {
  const { t } = useTranslation();

  const ministers = [
    {
      name: t('ministers.minister1'),
      role: t('ministers.minister1Role'),
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ashwini_Vaishnaw_official_portrait.jpg/220px-Ashwini_Vaishnaw_official_portrait.jpg',
    },
    {
      name: t('ministers.minister2'),
      role: t('ministers.minister2Role'),
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Official_portrait_of_V._Somanna.jpg/220px-Official_portrait_of_V._Somanna.jpg',
    },
    {
      name: t('ministers.minister3'),
      role: t('ministers.minister3Role'),
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Official_portrait_of_Ravneet_Singh_Bittu.jpg/220px-Official_portrait_of_Ravneet_Singh_Bittu.jpg',
    },
  ];

  return (
    <section className="ministers" aria-label="Leadership">
      <h2 className="ministers__title">{t('ministers.title')}</h2>
      <div className="ministers__grid">
        {ministers.map((m, idx) => (
          <div className="ministers__card" key={idx}>
            <img src={m.photo} alt={m.name} className="ministers__photo" />
            <h3 className="ministers__name">{m.name}</h3>
            <p className="ministers__role">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministers;
