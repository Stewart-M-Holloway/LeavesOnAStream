// import { useState } from 'react';
import { Affix } from '@mantine/core';
import NavigationMenu from './NavigationMenu';
// import classes from './Navigation.module.css';

interface NavigationProps {
  // language: string;
  // changeLanguage: (languageCode: string) => void;
  scrollTo: (position: { x?: number; y?: number }) => void;
}

export default function Navigation({ scrollTo }: NavigationProps) {
  // const [opened, setOpened] = useState(false);
  const opened = true;
  // const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Affix position={{ top: 20, left: 20 }}>
      {/* <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title} /> */}
      <NavigationMenu opened={opened} scrollTo={scrollTo} />
    </Affix>
  );
}
