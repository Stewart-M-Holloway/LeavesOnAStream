import { useHover, useViewportSize } from '@mantine/hooks';

import { Affix, Box, Grid, Text, Paper } from '@mantine/core';

export function Journal() {
  const { height, width } = useViewportSize();
  const { hovered, ref } = useHover();

  return (
    <Affix position={{ bottom: hovered ? 20 : -height / 4, left: 20 }}>
      <Box w={width / 2} ref={ref}>
        <Grid>
          <Grid.Col span={6}>
            <Paper h={height / 3} shadow="xs" p="xl">
              <Text>Left Side Journal</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper h={height / 3} shadow="xs" p="xl">
              <Text>Right Side Journal</Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Box>
    </Affix>
  );
}
