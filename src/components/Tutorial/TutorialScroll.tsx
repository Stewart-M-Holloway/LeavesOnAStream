import { Stack, Container, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

interface TutorialScrollProps {
  text: string;
}

export default function TutorialScroll({ text }: TutorialScrollProps) {
  const { height } = useViewportSize();
  return (
    <Container h={height / 2}>
      <Stack align="center">
        <Text ta="center" size="lg" maw={580} mx="auto" mt="150">
          {text}
        </Text>
      </Stack>
    </Container>
  );
}
