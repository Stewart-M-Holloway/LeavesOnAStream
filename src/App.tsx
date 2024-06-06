import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Router } from './Router';
import { theme } from './theme';
import './css/styles.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ParallaxProvider>
        <Router />
      </ParallaxProvider>
    </MantineProvider>
  );
}
