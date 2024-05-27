import { useState } from 'react';
import { Box, Collapse, NavLink, Switch, useMantineColorScheme, rem, ButtonGroup, Button } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './Navigation.module.css';

interface NavMenuProps {
  opened: boolean;
  changeLanguage: (languageCode: string) => void;
}

export function NavMenu({ opened, changeLanguage }: NavMenuProps) {
  const [toggled, setToggled] = useState(false);
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const toggleDarkMode = () => {
    if (toggled) {
      setToggled(false);
      setColorScheme('light');
    } else {
      setToggled(true);
      setColorScheme('dark');
    }
  };

  const sunIcon = <IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} />;
  const moonIcon = <IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} />;

  return (
    <Collapse in={opened}>
      <Box style={{ width: 180 }}>
        <NavLink
          label="Home"
          className={classes.navigation}
          onClick={() => window.scrollTo(0, 0)}
          style={{ cursor: 'default' }}
        />
        <NavLink
          label="Dark Mode"
          className={classes.navigation}
          style={{ cursor: 'default' }}
          rightSection={
            <Switch
              onClick={() => toggleDarkMode()}
              checked={toggled}
              size="md"
              onLabel={sunIcon}
              offLabel={moonIcon}
            />
          }
        />
        <NavLink
          className={classes.navigation}
          label={
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Button
                onClick={() => changeLanguage('en')}
              >EN
              </Button>
              <Button
                onClick={() => changeLanguage('es')}
              >ES
              </Button>
            </ButtonGroup>
          }
        />
      </Box>
    </Collapse>
  );
}
