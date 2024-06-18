import { Parallax } from 'react-scroll-parallax';
import { Center, Container } from '@mantine/core';
import { Leaf } from '@/components/Common/Leaf';

interface TutoriaLeafProps {
  animateInterval: number;
}

export function TutorialLeaf({ animateInterval }: TutoriaLeafProps) {
  return (
    <Parallax translateY={[0, 100]}>
      <Container>
        <Center style={{ width: '100%', height: 0 }}>
          <Leaf animateInterval={animateInterval} size={100} fill="var(--mantine-color-indigo-filled)" />
        </Center>
      </Container>
    </Parallax>
  );
}
