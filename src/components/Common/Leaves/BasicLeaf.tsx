interface BasicLeafProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
  fill?: string;
}

export function BasicLeaf({ size, style, fill }: BasicLeafProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 14 14"
      transform="rotate(45)"
      role="img"
      focusable="false"
      aria-hidden="true"
      style={{ width: size, height: size, ...style }}
    >
      <path d="M24.436,60.455L0,82.507l3.019,3.34l23.604-21.303C37.409,66.071,92.057,70.68,92.05,7.367 C92.05,7.362,19.51-6.346,24.436,60.455z" />
    </svg>
  );
}
