'use client';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { fetchDataFromDB } from '@/index';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function DashedLineChart() {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        series={[
          { data: pData, label: 'pv', id: 'pvId' },
          { data: uData, label: 'uv', id: 'uvId' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
          },
          '.MuiLineElement-series-pvId': {
            strokeDasharray: '5 5',
          },
          '.MuiLineElement-series-uvId': {
            strokeDasharray: '3 4 5 2',
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
            fill: '#fff',
          },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: 'none',
          },
        }}
      />

      <PieChart
        series={[
          {
            data: [
              { value: 100, label: 'Label 1' },
              { value: 200, label: 'Label 2' },
              { value: 300, label: 'Label 3' },
              { value: 400, label: 'Label 4' },
              { value: 500, label: 'Label 5' },
            ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          }
        ]}
      />
    </div>
  );
}
