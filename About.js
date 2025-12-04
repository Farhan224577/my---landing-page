import { useLocalization } from '../context/languageContext';
import styles from '../styles/Home.module.css';

const About = () => {
  const { t } = useLocalization();
  return (
    <section id="about" className="container">
      <h2 className={styles.sectionTitle}>{t.about.title}</h2>
      <div className={styles.card}>
        <p style={{ lineHeight: 1.8 }}>{t.about.text}</p>
      </div>
    </section>
  );
};
export default About;
