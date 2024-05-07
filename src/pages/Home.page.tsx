import { Grid } from '@mantine/core';
import { Welcome } from '../components/Tutorial/Welcome/Welcome';
import { Scroll } from '../components/Tutorial/Scroll/Scroll';
import { TutorialLeaf } from '@/components/Tutorial/TutorialLeaf/TutorialLeaf';
import { Navigation } from '@/components/Navigation/Navigation';
import { TutorialParagraph } from '@/components/Tutorial/TutorialParagraph/TutorialParagraph';

export function HomePage() {
  return (
    <>
      <Navigation />
      <Grid>
        <Grid.Col span={12}>
          <Welcome />
        </Grid.Col>
        <Grid.Col span={12}>
          <TutorialLeaf />
        </Grid.Col>
        <Grid.Col span={12}>
          <Scroll />
        </Grid.Col>
        <Grid.Col span={12}>
          <TutorialParagraph text="TEST TEST TEST 1" />
        </Grid.Col>
        <Grid.Col span={12}>
          <TutorialParagraph text="TEST TEST TEST 2" />
        </Grid.Col>
      </Grid>
    </>
  );
}
