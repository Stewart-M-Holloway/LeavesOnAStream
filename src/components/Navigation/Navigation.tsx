import { useState } from 'react';
import { Affix, Burger } from '@mantine/core';
import { NavMenu } from './NavigationMenu';
// import classes from './Navigation.module.css';

interface NavigationProps {
  language: string;
  changeLanguage: (languageCode: string) => void;
}

export function Navigation({ changeLanguage }: NavigationProps) {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Affix position={{ top: 20, left: 20 }}>
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
      <NavMenu opened={opened} changeLanguage={changeLanguage} />
    </Affix>
  );
}
