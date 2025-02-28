import { Stack } from '@mantine/core';
import TutorialTitle from '@/components/Tutorial/TutorialTitle';
import TutorialScroll from '@/components/Tutorial/TutorialScroll';
import TutorialLeaf from '@/components/Tutorial/TutorialLeaf';
import TutorialParagraph from '@/components/Tutorial/TutorialParagraph';
import { Note } from '@/types';

interface TutorialProps {
  script: any;
  animateInterval: number;
  noteInHand: Note | null;
  setNoteInHand: (note: Note | null) => void;
}

export default function Tutorial({
  script,
  animateInterval,
  noteInHand,
  setNoteInHand,
}: TutorialProps) {
  return (
    <Stack gap={0}>
      <TutorialTitle titleText={script.title} subtitleText={script.subtitle} />
      <TutorialLeaf
        animateInterval={animateInterval}
        noteInHand={noteInHand}
        setNoteInHand={setNoteInHand}
      />
      <TutorialScroll text={script.scrollInstruction} />
      {script.tutorialParagraphs.map((paragraph: string) => (
        <TutorialParagraph
          key={paragraph}
          text={paragraph}
          // idx={idx}
          animateInterval={animateInterval}
          noteInHand={noteInHand}
          setNoteInHand={setNoteInHand}
        />
      ))}
    </Stack>
  );
}
