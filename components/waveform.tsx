import { useId } from 'react';

function randomBetween(min: number, max: number, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000;
    rand = rand - Math.floor(rand);
    return Math.floor(rand * (max - min + 1) + min);
  };
}

export function Waveform(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId();
  let bars = {
    total: 100,
    width: 2,
    gap: 2,
    minHeight: 40,
    maxHeight: 100
  };

  let barHeights = Array.from({ length: bars.total }, randomBetween(bars.minHeight, bars.maxHeight));

  return (
    <svg aria-hidden='true' {...props}>
      <defs>
        <linearGradient id={`${id}-fade`} x1='0' x2='0' y1='0' y2='1'>
          <stop offset='40%' stopColor='white' />
          <stop offset='100%' stopColor='black' />
        </linearGradient>
        <linearGradient id={`${id}-gradient`}>
          <stop offset='0%' stopColor='#bae6fd' />
          <stop offset='50%' stopColor='#f6f6f6' />
          <stop offset='100%' stopColor='#38bdf8' />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width='100%' height='100%' fill={`url(#${id}-pattern)`} />
        </mask>
        <pattern id={`${id}-pattern`} width={bars.total * bars.width + bars.total * bars.gap} height='100%' patternUnits='userSpaceOnUse'>
          {Array.from({ length: bars.total }, (_, index) => (
            <rect key={index} width={bars.width} height={`${barHeights[index]}%`} x={bars.gap * (index + 1) + bars.width * index} fill={`url(#${id}-fade)`} />
          ))}
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id}-gradient)`} mask={`url(#${id}-mask)`} opacity='0.25' />
    </svg>
  );
}
