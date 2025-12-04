import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../context/themeContext';
import { useLocalization } from '../context/languageContext';
import styles from '../styles/Home.module.css';

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const { t, lang } = useLocalization();
  const router = useRouter();

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    router.push(router.pathname, router.pathname, { locale: newLang });
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.nav} container`}>
        <div className={styles.navLinks}>
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className={styles.navActions}>
          <select onChange={handleLangChange} value={lang} className={styles.switch}>
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
          <button onClick={toggleTheme} className={styles.switch}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
