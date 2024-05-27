import { Title, Text } from '@mantine/core';

interface TutorialTitleProps {
  titleText: string;
  subtitleText: string;
}

export function TutorialTitle({ titleText, subtitleText }: TutorialTitleProps) {
  return (
    <>
      <Title ta="center" mt={200}>
        <Text inherit component="span">
          {titleText}
        </Text>
      </Title>
      <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {subtitleText}
      </Text>
    </>
  );
}
