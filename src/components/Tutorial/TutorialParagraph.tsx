import { Center, Stack, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useParallax } from 'react-scroll-parallax';
import { TutorialLeaf } from './TutorialLeaf';

interface TutorialParagraphProps {
  text: string;
  idx: number;
}

export function TutorialParagraph({ text }: TutorialParagraphProps) {
  const { height, width } = useViewportSize();
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          '--progress',
          progress.toString()
        );
      }
    },
  });
  return (
    <Center h={height} ref={parallax.ref}>
      <Stack gap={100}>
      <TutorialLeaf />
      <Text style={{
        width: width / 2,
        opacity: 'calc(1 - 2 * max(1 - 2 * var(--progress), -1 + 2 * var(--progress)))',
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
      </Stack>
    </Center>
  );
}
