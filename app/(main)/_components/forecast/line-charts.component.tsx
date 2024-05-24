import { Line, LineChart, ResponsiveContainer } from 'recharts';

const data = [
  {
    temp: 10400
  },
  {
    temp: 14405
  },
  {
    temp: 9400
  },
  {
    temp: 8200
  },
  {
    temp: 7000
  },
  {
    temp: 9600
  },
  {
    temp: 11244
  },
  {
    temp: 26475
  }
];

export default function LineChartsComponent() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-2'>
      <div className='h-[80px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0
            }}>
            <Line
              type='monotone'
              strokeWidth={2}
              dataKey='temp'
              activeDot={{
                r: 6,
                style: { fill: '#2563eb', opacity: 0.25 }
              }}
              style={
                {
                  stroke: '#2563eb'
                } as React.CSSProperties
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
