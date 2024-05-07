import { Center, Container } from '@mantine/core';
import { Leaf } from '@/components/Common/Leaf';

export function TutorialLeaf() {
  return (
    <Container>
      <Center style={{ width: '100%', height: 300 }}>
        <Leaf size={100} fill="#7FFFD4" />
      </Center>
    </Container>
  );
}
