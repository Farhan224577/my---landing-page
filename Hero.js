import { useLocalization } from '../context/languageContext';
import styles from '../styles/Home.module.css';

const Hero = () => {
  const { t } = useLocalization();
  return (
    <section className={styles.hero}>
      <h1>{t.hero.title}</h1>
      <h2>{t.hero.subtitle}</h2>
      <p>{t.hero.description}</p>
      <a href="https://github.com/Farhan224577" target="_blank" rel="noopener noreferrer">
        {t.hero.github}
      </a>
    </section>
  );
};
export default Hero;
