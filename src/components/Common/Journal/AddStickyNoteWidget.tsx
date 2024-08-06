import {
  ActionIcon, ActionIconGroup, Button, ColorPicker, Modal, Popover, Text,
} from '@mantine/core';
import { IconCirclePlus, IconPalette } from '@tabler/icons-react';
import { useState } from 'react';

export interface AddStickyNoteWidgetProps {
  numStickyNotes: number;
  addStickyNote: (text: string, color: string) => void;
  colorPopoverOpened: boolean;
  setColorPopoverOpened: (opened: boolean) => void;
  colorPickerOpened: boolean;
  colorPickerOpen: () => void;
  colorPickerClose: () => void;
}

export function AddStickyNoteWidget({
  numStickyNotes,
  addStickyNote,
  colorPopoverOpened,
  setColorPopoverOpened,
  colorPickerOpened,
  colorPickerOpen,
  colorPickerClose,
}: AddStickyNoteWidgetProps) {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
  const colorOptions = [
    'var(--mantine-color-yellow-5)',
    'var(--mantine-color-blue-5)',
    'var(--mantine-color-orange-5)',
    'var(--mantine-color-red-5)',
    'var(--mantine-color-green-5)',
  ];
  const onAddPopoverStickyNote = (color: string) => {
    addStickyNote('new', color);
    setColorPopoverOpened(false);
  };
  const onAddColorPickerStickyNote = () => {
    addStickyNote('new', value);
    setColorPopoverOpened(false);
    colorPickerClose();
  };
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={colorPopoverOpened}>
      <Modal opened={colorPickerOpened} onClose={colorPickerClose} title="Pick a Color">
        <ColorPicker format="rgba" value={value} onChange={onChange} />
        <Text>{value}</Text>
        <Button onClick={() => onAddColorPickerStickyNote()}>Add Sticky Note</Button>
      </Modal>
      <Popover.Target>
        <ActionIcon variant="transparent" size="xl" onClick={() => setColorPopoverOpened(true)} disabled={numStickyNotes >= 4}>
          <IconCirclePlus />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <ActionIconGroup>
          {colorOptions.map((color) => (
            <ActionIcon
              key={color}
              variant="filled"
              color={color}
              onClick={() => onAddPopoverStickyNote(color)}
            />
          ))}
          <ActionIcon variant="filled" color="var(--mantine-color-gray-5)" onClick={colorPickerOpen}>
            <IconPalette />
          </ActionIcon>
        </ActionIconGroup>
      </Popover.Dropdown>
    </Popover>
  );
}
