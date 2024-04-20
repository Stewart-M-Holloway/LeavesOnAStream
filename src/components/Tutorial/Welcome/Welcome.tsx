import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={200}>
        <Text inherit component="span">
          leaves on a stream
        </Text>
      </Title>
      <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
        an interactive meditation experience
      </Text>
    </>
  );
}
