import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Quicksand, sans-serif',
  headings: {
    fontFamily: 'Quicksand, sans-serif',
    sizes: {
      h1: { fontSize: rem(72), fontWeight: '300' },
    },
  },
  focusRing: 'never',
});
