import { createTheme, rem } from '@mantine/core';

// eslint-disable-next-line import/prefer-default-export
export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Manrope, sans-serif',
  headings: {
    fontFamily: 'Manrope, sans-serif',
    sizes: {
      h1: { fontSize: rem(72), fontWeight: '300' },
    },
  },
});
