import { Center, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

interface TutorialParagraphProps {
  text: string;
}

export function TutorialParagraph({ text }: TutorialParagraphProps) {
  const { height, width } = useViewportSize();
  console.log(width);
  return (
    <Center h={height / 2}>
      <Text>{text}</Text>
    </Center>
  );
}
