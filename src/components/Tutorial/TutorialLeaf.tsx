import { Parallax } from 'react-scroll-parallax';
import { Center, Container } from '@mantine/core';
import Leaf from '@/components/Common/Leaf';
import { Note } from '@/types';

interface TutoriaLeafProps {
  animateInterval: number;
  noteInHand: Note | null;
  setNoteInHand: (note: Note | null) => void;
}

export default function TutorialLeaf({
  animateInterval,
  noteInHand,
  setNoteInHand,
}: TutoriaLeafProps) {
  return (
    <Parallax translateY={[0, 100]}>
      <Container>
        <Center style={{ width: '100%', height: 0 }}>
          <Leaf
            animateInterval={animateInterval}
            size={100}
            fill="var(--mantine-color-indigo-filled)"
            noteInHand={noteInHand}
            setNoteInHand={setNoteInHand}
          />
        </Center>
      </Container>
    </Parallax>
  );
}
