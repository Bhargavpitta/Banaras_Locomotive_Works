import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const banners = [
    { text: t('hero.banner1'), image: '/images/hero-banner1.jpg' },
    { text: t('hero.banner2'), image: '/images/hero-banner1.jpg' },
    { text: t('hero.banner3'), image: '/images/hero-banner1.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="hero" aria-label="Hero Banner">
      {banners.map((banner, idx) => (
        <div
          key={idx}
          className={`hero__slide${idx === current ? ' hero__slide--active' : ''}`}
        >
          <img src={banner.image} alt="" className="hero__image" />
          <div className="hero__overlay">
            <h2 className="hero__text">{banner.text}</h2>
            <button className="hero__cta">{t('hero.cta')}</button>
          </div>
        </div>
      ))}
      <div className="hero__dots">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot${idx === current ? ' hero__dot--active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
