import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useInView } from 'react-intersection-observer';

const data1 = [
  { label: 'Registered Participants: IDEATE', value: 351 },
  { label: 'Registered Participants: Eureka', value: 493 },
];
const data2 = [
  { label: 'Participating Teams: IDEATE', value: 60 },
  { label: 'Participating Teams: Eureka', value: 26 },
];
const data3 = [
  { label: 'Workshops Conducted: IDEATE', value: 9 },
  { label: 'Workshops Conducted: Eureka', value: 4 },
];


export default function PieChartWithPaddingAngle() {
  const { ref, inView } = useInView({
    triggerOnce: true,   // only fire once
    threshold: 0.3,       // % of component in viewport to trigger
  });

  return (
    <div ref={ref} className='w-full h-[50vh] overflow-visible'>
        {inView && (
      <PieChart
        series={[
            {
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 65, outerRadius: 75, color: 'gray' },
                paddingAngle: 5,
                innerRadius: 60,
                outerRadius: 80,
                cornerRadius: 5,
                startAngle: -30,
                endAngle: 225,
                data: data1,
            },
            {
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 95, outerRadius: 105, color: 'gray' },
                paddingAngle: 4,
                innerRadius: 90,
                outerRadius: 110,
                cornerRadius: 5,
                startAngle: -30,
                endAngle: 250,
                data: data2,
            },
            {
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 125, outerRadius: 135, color: 'gray' },
                paddingAngle: 3,
                innerRadius: 120,
                outerRadius: 140,
                cornerRadius: 5,
                startAngle: -30,
                endAngle: 275,
                data: data3,
            },
        ]}
        width={500}
        height={500}
        hideLegend
      />
    )}
    </div>
  );
}
