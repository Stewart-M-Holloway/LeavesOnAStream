import { Stack } from '@mantine/core';
import { TutorialTitle } from '@/components/Tutorial/TutorialTitle';
import { TutorialScroll } from '@/components/Tutorial/TutorialScroll';
import { TutorialLeaf } from '@/components/Tutorial/TutorialLeaf';
import { TutorialParagraph } from '@/components/Tutorial/TutorialParagraph';

interface TutorialProps {
  script: any;
  animateInterval: number;
}

export function Tutorial({ script, animateInterval }: TutorialProps) {
  return (
    <Stack gap={0}>
      <TutorialTitle titleText={script.title} subtitleText={script.subtitle} />
      <TutorialLeaf animateInterval={animateInterval} />
      <TutorialScroll text={script.scrollInstruction} />
      {script.tutorialParagraphs.map((paragraph: string, idx: number) => (
        <TutorialParagraph key={idx} text={paragraph} idx={idx} animateInterval={animateInterval} />
      ))}
    </Stack>
  );
}
