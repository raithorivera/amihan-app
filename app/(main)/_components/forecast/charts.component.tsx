import { useMemo } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis, CartesianGrid } from 'recharts';

import { formatDate, formatForecastTime } from '@/util/date.util';

export type ChartsComponentProps = {
  forecastList: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    dt_txt: string;
  }[];
};

export default function ChartsComponent({ forecastList }: ChartsComponentProps) {
  const data = useMemo(() => {
    return forecastList.map((item) => {
      const dateTime = (item?.dt > 0 ? item?.dt * 1000 : '') as string;

      return {
        date: formatDate(dateTime),
        sub: formatForecastTime(dateTime),
        temp: item.main.temp,
        min: item.main.temp_min,
        max: item.main.temp_max
      };
    });
  }, [forecastList]);

  // Calculate min and max values for the Y-axis
  const yMin = Math.min(...data.map((item) => item.min)) - 1;
  const yMax = Math.max(...data.map((item) => item.max)) + 1;

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
          <CartesianGrid strokeDasharray='3 3' fill='#f7f7f7' fillOpacity={0.6} />
          <YAxis domain={[yMin, yMax]} tickFormatter={(tick) => tick.toFixed(2)} label={''} hide={true} />

          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className='rounded-lg border bg-background p-2 shadow-sm'>
                    <div className='mb-2'>
                      <div className='text-xs'>{payload[0].payload.date}</div>
                      <div className='font-semibold'>{payload[0].payload.sub}</div>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                      <div className='flex flex-col'>
                        <span className='text-[0.70rem] uppercase text-muted-foreground'>temp</span>
                        <span className='font-bold'>{payload[0].payload.temp}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[0.70rem] uppercase text-muted-foreground'>min</span>
                        <span className='font-bold text-muted-foreground'>{payload[0].payload.min}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[0.70rem] uppercase text-muted-foreground'>max</span>
                        <span className='font-bold text-muted-foreground'>{payload[0].payload.max}</span>
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
              style: { fill: '#2f549b' }
            }}
            style={
              {
                stroke: '#020c21',
                opacity: 0.9
              } as React.CSSProperties
            }
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
