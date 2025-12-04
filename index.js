import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import { useLocalization } from '../context/languageContext';
import styles from '../styles/Home.module.css';

// pages/index.js

<Head>
  <title>Farhan Nosrati | Senior Frontend Engineer</title>
  <meta name="description" content="The professional portfolio of Farhan Nosrati, a Senior Frontend Engineer." />
  {/* Add this line for responsiveness */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>


// Data from your resume
const skillsData = {
    languages: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
    frontend: "React, Next.js, React Hooks, Redux Toolkit, Context API",
    styling: "Tailwind CSS, Styled Components, Sass, CSS Modules",
    architecture: "Component-driven development, Modular design, Design Systems",
    data: "REST APIs, Axios, React Query, State caching patterns",
    tooling: "Git, GitHub, ESLint, Prettier, Vercel, CI/CD basics",
    other: "Performance Optimization, Accessibility, Responsive UI, Debugging"
};

export default function Home() {
  const { t } = useLocalization();

  return (
    <>
      <Head>
        <title>Farhan Nosrati | Senior Frontend Engineer</title>
        <meta name="description" content="The professional portfolio of Farhan Nosrati, a Senior Frontend Engineer." />
      </Head>

      <Header />

      <main>
        <Hero />
        <About />

        {/* Skills Section */}
        <section id="skills" className="container">
          <h2 className={styles.sectionTitle}>{t.skills.title}</h2>
          <div className={styles.card}>
            {Object.entries(skillsData).map(([key, value]) => (
                 <p key={key}><strong>{t.skills[key]}:</strong> {value}</p>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container">
          <h2 className={styles.sectionTitle}>{t.experience.title}</h2>
          <div className={`${styles.card} ${styles.experienceItem}`}>
            <h3>{t.experience.senior.role}</h3>
            <span>{t.experience.senior.company} | {t.experience.senior.date}</span>
            <ul>
              {t.experience.senior.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
           <div className={`${styles.card} ${styles.experienceItem}`}>
            <h3>{t.experience.developer.role}</h3>
            <span>{t.experience.developer.company}</span>
            <ul>
              {t.experience.developer.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
          <div className={styles.card}>
             <a href="mailto:Nosratidevelopments@gmail.com" className={styles.hero.a} style={{margin: '0 1rem'}}>
                {t.contact.email}
             </a>
             <a href="https://github.com/Farhan224577" target="_blank" rel="noopener noreferrer" className={styles.hero.a} style={{margin: '0 1rem'}}>
                {t.contact.github}
             </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-color)' }}>
        <p>{t.footer.text}</p>
      </footer>
    </>
  );
}
