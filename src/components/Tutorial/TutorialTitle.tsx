import { Title, Text, Container } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

interface TutorialTitleProps {
  titleText: string;
  subtitleText: string;
}

export default function TutorialTitle({ titleText, subtitleText }: TutorialTitleProps) {
  const { height } = useViewportSize();
  return (
    <Container h={height / 2}>
      <Title ta="center" mt={150}>
        <Text inherit component="span">
          {titleText}
        </Text>
      </Title>
      <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {subtitleText}
      </Text>
    </Container>
  );
}
