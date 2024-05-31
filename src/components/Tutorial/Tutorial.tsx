import { Stack } from '@mantine/core';
import { TutorialTitle } from '@/components/Tutorial/TutorialTitle';
import { TutorialScroll } from '@/components/Tutorial/TutorialScroll';
import { TutorialLeaf } from '@/components/Tutorial/TutorialLeaf';
import { TutorialParagraph } from '@/components/Tutorial/TutorialParagraph';

interface TutorialProps {
  script: any;
}

export function Tutorial({ script }: TutorialProps) {
  return (
    <Stack gap={0}>
      <TutorialTitle
        titleText={script.title}
        subtitleText={script.subtitle}
      />
      <TutorialLeaf />
      <TutorialScroll text={script.scrollInstruction} />
      {script.tutorialParagraphs.map((paragraph: string, idx: number) => (
        <TutorialParagraph key={idx} text={paragraph} idx={idx} />
      ))}
    </Stack>
  );
}
