import { ActionIcon, Stack, Container, Text } from '@mantine/core';
import { IconCaretDown } from '@tabler/icons-react';

interface TutorialScrollProps {
  text: string;
}

export function TutorialScroll({ text }: TutorialScrollProps) {
  return (
    <Container>
      <Stack align="center">
        <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
          {text}
        </Text>
        <ActionIcon>
          <IconCaretDown />
        </ActionIcon>
      </Stack>
    </Container>
  );
}
