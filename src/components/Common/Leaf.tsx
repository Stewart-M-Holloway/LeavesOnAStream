import { useMouse } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { getRotationAcceleration, MIN_ROTATION_VELOCITY, MAX_ROTATION_VELOCITY } from './LeafPhysics';
import { MAPLE_LEAF_PATH } from './LeafTypes';

interface LeafProps {
  animateInterval: number;
  size?: number;
  fill?: string;
  // leafType?: 'Maple' | 'Oak' | 'Palm' | 'Pine' | 'Generic';
}

const VELOCITY_WINDOW = 5;

export function Leaf({ animateInterval, size = 100, fill = 'green' }: LeafProps) {
  const { ref, x, y } = useMouse();
  const [xPrev, setXPrev] = useState(new Array(VELOCITY_WINDOW).fill(0));
  const [yPrev, setYPrev] = useState(new Array(VELOCITY_WINDOW).fill(0));
  const [r, setR] = useState(0);
  const [w, setW] = useState(0.1 + 5 * Math.random());
  const [dir, setDir] = useState(Math.random() > 0.5 ? 1 : -1);
  useEffect(() => {
    const a = getRotationAcceleration(w, size, x, y, xPrev, yPrev, true);
    if (Math.abs(w + a) <= MIN_ROTATION_VELOCITY) {
      setDir(-dir);
    }
    setW((prev) => Math.min(Math.max(prev + a, MIN_ROTATION_VELOCITY), MAX_ROTATION_VELOCITY));
    setR((prev) => prev + (dir * w));
    setXPrev((prev) => [...prev.slice(1, VELOCITY_WINDOW), x]);
    setYPrev((prev) => [...prev.slice(1, VELOCITY_WINDOW), y]);
    }, [animateInterval]);
  return (
    <ActionIcon variant="transparent" size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        viewBox="0 0 14 14"
        transform={`rotate(${r})`}
        role="img"
        focusable="false"
        aria-hidden="true"
        ref={ref}
        style={{ width: size, height: size }}
      >
        <path d={MAPLE_LEAF_PATH} />
      </svg>
    </ActionIcon>
  );
}
