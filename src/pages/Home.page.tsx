import { useEffect, useState } from 'react';
import LocalizedStrings from 'react-localization';
import { Navigation } from '@/components/Navigation/Navigation';
import { Tutorial } from '@/components/Tutorial/Tutorial';

// eslint-disable-next-line prefer-const
let tutorialScript = new LocalizedStrings({
  en: {
    title: 'Leaves on a Stream',
    subtitle: 'an interactive meditation experience',
    scrollInstruction: 'scroll down to begin',
    tutorialParagraphs: ['ENGLISH 1', 'ENGLISH 2'],
  },
  es: {
    title: 'Hojas en un Arroyo',
    subtitle: 'un experiencia de meditación interactiva',
    scrollInstruction: 'desplácese hacia abajo para comenzar',
    tutorialParagraphs: ['SPANISH 1', 'SPANISH 2'],
  },
});

export function HomePage() {
  const [language, setLanguage] = useState('en');
  const changeLanguage = (languageCode: string) => {
    setLanguage(languageCode);
    tutorialScript.setLanguage(languageCode);
  };
  useEffect(() => {
    tutorialScript.setLanguage(language);
    setLanguage(language);
  }, [language]);
  return (
    <>
      <Navigation language={language} changeLanguage={changeLanguage} />
      <Tutorial script={tutorialScript} />
    </>
  );
}
