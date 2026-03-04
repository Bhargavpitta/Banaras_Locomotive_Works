import { useTranslation } from 'react-i18next';
import './Ministers.css';

interface Minister {
  name: string;
  role: string;
  photo: string;
}

const Ministers = () => {
  const { t } = useTranslation();

  const ministers: Minister[] = [
    {
      name: t('ministers.minister1'),
      role: t('ministers.minister1Role'),
      photo: '/images/a..jpeg', // <-- Image path relative to public folder
    },
    {
      name: t('ministers.minister2'),
      role: t('ministers.minister2Role'),
      photo: '/images/b..jpg',
    },
    {
      name: t('ministers.minister3'),
      role: t('ministers.minister3Role'),
      photo: '/images/c..jpeg',
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