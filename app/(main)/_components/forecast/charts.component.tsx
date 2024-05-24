import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    temp: 400,
    min: 240,
    max: 340
  },
  {
    temp: 300,
    min: 139,
    max: 240
  },
  {
    temp: 200,
    min: 980,
    max: 1340
  },
  {
    temp: 278,
    min: 390,
    max: 740
  }
];

export default function ChartsComponent() {
  return (
    <div className='h-[200px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0
          }}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className='rounded-lg border bg-background p-2 shadow-sm'>
                    <div className='grid grid-cols-3 gap-2'>
                      <div className='flex flex-col'>
                        <span className='text-[0.70rem] uppercase text-muted-foreground'>temp</span>
                        <span className='font-bold'>{payload[0].value}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[0.70rem] uppercase text-muted-foreground'>min</span>
                        <span className='font-bold text-muted-foreground'>{payload[1].value}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[0.70rem] uppercase text-muted-foreground'>max</span>
                        <span className='font-bold text-muted-foreground'>{payload[2].value}</span>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            }}
          />
          <Line
            type='monotone'
            dataKey='temp'
            strokeWidth={2}
            activeDot={{
              r: 8,
              style: { fill: '#2563eb' }
            }}
            style={
              {
                stroke: '#2563eb'
              } as React.CSSProperties
            }
          />
          <Line
            type='monotone'
            strokeWidth={2}
            dataKey='min'
            activeDot={{
              r: 6,
              style: { fill: '#2563eb', opacity: 0.25 }
            }}
            style={
              {
                stroke: '#2563eb',
                opacity: 0.25
              } as React.CSSProperties
            }
          />
          <Line
            type='monotone'
            dataKey='max'
            strokeWidth={2}
            activeDot={{
              r: 8,
              style: { fill: '#2563eb' }
            }}
            style={
              {
                stroke: '#2563eb',
                opacity: 0.35
              } as React.CSSProperties
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
