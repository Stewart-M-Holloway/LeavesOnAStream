import { ActionIcon, Stack, Container, Text } from '@mantine/core';
import { IconCaretDown } from '@tabler/icons-react';

export function Scroll() {
  return (
    <Container>
      <Stack align="center">
        <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
          scroll down to begin
        </Text>
        <ActionIcon>
          <IconCaretDown />
        </ActionIcon>
      </Stack>
    </Container>
  );
}
