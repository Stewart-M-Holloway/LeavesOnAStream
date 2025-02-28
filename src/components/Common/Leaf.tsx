import { useMouse } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { ActionIcon } from '@mantine/core';
import {
  getRotationAcceleration,
  MIN_ROTATION_VELOCITY,
  MAX_ROTATION_VELOCITY,
} from './LeafPhysics';
import { MAPLE_LEAF_PATH, NOTE_ON_LEAF_PATH } from './LeafTypes';
import { Note } from '@/types';

interface LeafProps {
  animateInterval: number;
  size?: number;
  fill?: string;
  noteInHand: Note | null;
  setNoteInHand: (note: Note | null) => void;
  // leafType?: 'Maple' | 'Oak' | 'Palm' | 'Pine' | 'Generic';
}

const VELOCITY_WINDOW = 5;

export default function Leaf({
  animateInterval,
  size,
  fill,
  noteInHand,
  setNoteInHand,
}: LeafProps) {
  // Leaf Physics
  const { ref, x, y } = useMouse();
  const [xPrev, setXPrev] = useState(new Array(VELOCITY_WINDOW).fill(0));
  const [yPrev, setYPrev] = useState(new Array(VELOCITY_WINDOW).fill(0));
  const [r, setR] = useState(0);
  const [w, setW] = useState(0.1 + 5 * Math.random());
  const [dir, setDir] = useState(Math.random() > 0.5 ? 1 : -1);
  useEffect(() => {
    const a = getRotationAcceleration(w, size || 100, x, y, xPrev, yPrev, true);
    if (Math.abs(w + a) <= MIN_ROTATION_VELOCITY) {
      setDir(-dir);
    }
    setW((prev) => Math.min(Math.max(prev + a, MIN_ROTATION_VELOCITY), MAX_ROTATION_VELOCITY));
    setR((prev) => prev + dir * w);
    setXPrev((prev) => [...prev.slice(1, VELOCITY_WINDOW), x]);
    setYPrev((prev) => [...prev.slice(1, VELOCITY_WINDOW), y]);
  }, [animateInterval]);

  // Note Logic
  const [notesOnLeaf, setNotesOnLeaf] = useState<Note[]>([]);
  const addNoteToLeaf = () => {
    if (noteInHand) {
      setNotesOnLeaf([...notesOnLeaf, noteInHand]);
      setNoteInHand(null);
    }
  };
  return (
    <ActionIcon variant="transparent" size={size} onClick={() => addNoteToLeaf()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        transform={`rotate(${r})`}
        role="img"
        focusable="false"
        aria-hidden="true"
        ref={ref}
        style={{ width: size, height: size }}
      >
        <path d={MAPLE_LEAF_PATH} fill={fill} />
        {notesOnLeaf.map((note, index) => (
          <path key={index} d={NOTE_ON_LEAF_PATH} fill={note.color} />
        ))}
      </svg>
    </ActionIcon>
  );
}

Leaf.defaultProps = {
  size: 100, // Add a default value for the "size" prop
  fill: '#000000', // Add a default value for the "fill" prop
};
