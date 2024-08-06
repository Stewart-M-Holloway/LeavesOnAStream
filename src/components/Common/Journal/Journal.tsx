import { useState } from 'react';
import {
  useClickOutside, useDisclosure, useFocusWithin, useIsFirstRender, useMergedRef, useViewportSize,
} from '@mantine/hooks';

import {
  Affix, Box, Grid, Text, Paper, Transition, Textarea,
} from '@mantine/core';
import { StickyNote, StickyNoteProps } from './StickyNote';
import { AddStickyNoteWidget } from './AddStickyNoteWidget';

// interface JournalProps {
//   noteInHand: String,
//   setNoteInHand: (note: string) => void,
// }

export default function Journal() {
  // Mantine Hooks
  const { height, width } = useViewportSize();

  // Journal State
  const [
    colorPickerOpened,
    { open: colorPickerOpen, close: colorPickerClose },
  ] = useDisclosure(false);
  const [colorPopoverOpened, setColorPopoverOpened] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);
  const clickOutsideJournalRef = useClickOutside(() => setJournalOpen(false));
  const { ref: jornalFocusRef, focused: journalFocused } = useFocusWithin();
  const mergedJournalRef = useMergedRef(
    clickOutsideJournalRef,
    jornalFocusRef,
  );
  const firstRender = useIsFirstRender();

  // Sticky Notes
  const [stickyNotes, setStickyNotes] = useState<StickyNoteProps[]>([]);
  if (firstRender) {
    setStickyNotes([
      {
        index: 0, text: 'anxious', color: 'var(--mantine-color-yellow-5)', stickyNotes, setStickyNotes,
      },
      {
        index: 1, text: 'bored', color: 'var(--mantine-color-blue-5)', stickyNotes, setStickyNotes,
      },
    ]);
  }
  const addStickyNote = (text: string, color: string) => {
    setStickyNotes([...stickyNotes,
      {
        index: stickyNotes.length, text, color, stickyNotes, setStickyNotes,
      }]);
  };

  // Journal Animation
  const translateJournal = {
    in: { transform: `translateY(-${height / 2.2}px)` },
    out: { transform: 'translateY(0px)' },
    common: { display: 'flex', transformOrigin: 'bottom' },
    transitionProperty: 'transform',
  };

  return (
    <Affix position={{ bottom: -height / 3.5, left: 20 }}>
      <Box
        w={width / 2}
        h={height / 3}
        ref={mergedJournalRef}
        onMouseOver={() => setJournalOpen(true)}
      >
        <Transition
          mounted={journalOpen || colorPickerOpened || colorPopoverOpened || journalFocused}
          transition={translateJournal}
          duration={400}
          timingFunction="ease"
          keepMounted
        >
          {(transitionStyle) => (
            <Grid>
              <Grid.Col span={6}>
                <Paper
                  h={height / 2}
                  shadow="xs"
                  p="xl"
                  style={{ ...transitionStyle, display: 'block' }}
                >
                  <Grid>
                    <Grid.Col span={10}>
                      <Text>I am feeling...</Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                      <AddStickyNoteWidget
                        addStickyNote={addStickyNote}
                        numStickyNotes={stickyNotes.length}
                        colorPopoverOpened={colorPopoverOpened}
                        setColorPopoverOpened={setColorPopoverOpened}
                        colorPickerOpened={colorPickerOpened}
                        colorPickerOpen={colorPickerOpen}
                        colorPickerClose={colorPickerClose}
                      />
                    </Grid.Col>
                    {stickyNotes.map((note: StickyNoteProps) => (
                      <Grid.Col key={note.text} span={6}>
                        <StickyNote
                          key={note.text}
                          index={note.index}
                          text={note.text}
                          color={note.color}
                          stickyNotes={stickyNotes}
                          setStickyNotes={setStickyNotes}
                        />
                      </Grid.Col>
                    ))}
                  </Grid>
                </Paper>
              </Grid.Col>
              <Grid.Col span={6}>
                <Paper h={height / 2} shadow="xs" p="xl" style={{ ...transitionStyle, display: 'block', cursor: 'grab' }}>
                  <Textarea
                    label="I am having the thought that..."
                    placeholder="Enter your thought here"
                    autosize
                  />
                </Paper>
              </Grid.Col>
            </Grid>
          )}
        </Transition>
      </Box>
    </Affix>
  );
}
