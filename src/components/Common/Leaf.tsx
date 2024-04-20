import { ActionIcon } from '@mantine/core';
import { MapleLeaf } from './Leaves/MapleLeaf';

interface LeafProps {
  size?: number | string;
  fill?: string;
  // leafType?: 'Maple' | 'Oak' | 'Palm' | 'Pine' | 'Generic';
}

export function Leaf({ size = 100, fill = 'green' }: LeafProps) {
  return (
    <ActionIcon size={size}>
      <MapleLeaf size={size} fill={fill} />
    </ActionIcon>
  );
}
