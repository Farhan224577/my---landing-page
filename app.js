import { ThemeProvider } from '../context/themeContext';
import { LanguageProvider } from '../context/languageContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
