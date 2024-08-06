// eslint-disable-next-line import/no-extraneous-dependencies
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/theme';

export default function render(ui: React.ReactNode) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
}
