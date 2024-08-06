import { useState } from 'react';
import { CloseButton, Paper, TextInput } from '@mantine/core';
import { useFocusTrap, useHover, useIsFirstRender } from '@mantine/hooks';

export interface StickyNoteProps {
  index: number;
  text: string;
  color: string;
  stickyNotes: StickyNoteProps[];
  setStickyNotes: (notes: StickyNoteProps[]) => void;
}

export function StickyNote({
  index, text, color, stickyNotes, setStickyNotes,
}: StickyNoteProps) {
  const [value, setValue] = useState(text);
  const firstRender = useIsFirstRender();
  const { hovered, ref: hoveredRef } = useHover();
  const focusTrapRef = useFocusTrap(firstRender);

  const removeStickyNote = () => {
    setStickyNotes(stickyNotes.filter((note) => note.index !== index));
  };

  return (
    <Paper shadow="xs" p="xs" ref={hoveredRef} style={{ backgroundColor: color, cursor: 'grab' }}>
      <CloseButton
        onClick={() => removeStickyNote()}
        style={{ opacity: hovered ? 1 : 0 }}
      />
      <TextInput
        ref={focusTrapRef}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        variant="unstyled"
        size="xs"
        radius="md"
        style={{ color: 'black', width: '80%' }}
      />
    </Paper>
  );
}
