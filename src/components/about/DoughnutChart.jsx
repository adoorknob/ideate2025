import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from './useWindowSize';
import ReactCurvedText from 'react-curved-text'

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

  const { width: windowWidth } = useWindowSize();

  const chartHeight = Math.min(Math.max(windowWidth * 0.8, 200), 500);
  const chartWidth = 500;
  // const chartHeight = 200;

  return (
    <div ref={ref} className='w-full overflow-visible'>
        {inView && (
          <div>
            <PieChart
              series={[
                  {
                      highlightScope: { fade: 'global', highlight: 'item' },
                      faded: { innerRadius: 65, outerRadius: 85, color: 'gray' },
                      paddingAngle: 5,
                      innerRadius: 60,
                      outerRadius: 90,
                      cornerRadius: 5,
                      startAngle: -30,
                      endAngle: 245,
                      data: data1,
                  },
                  {
                      highlightScope: { fade: 'global', highlight: 'item' },
                      faded: { innerRadius: 115, outerRadius: 135, color: 'gray' },
                      paddingAngle: 4,
                      innerRadius: 110,
                      outerRadius: 140,
                      cornerRadius: 5,
                      startAngle: -30,
                      endAngle: 260,
                      data: data2,
                  },
                  {
                      highlightScope: { fade: 'global', highlight: 'item' },
                      faded: { innerRadius: 165, outerRadius: 185, color: 'gray' },
                      paddingAngle: 3,
                      innerRadius: 160,
                      outerRadius: 190,
                      cornerRadius: 5,
                      startAngle: -30,
                      endAngle: 275,
                      data: data3,
                  },
              ]}
              width={chartWidth}
              height={chartHeight}
              hideLegend
            />
          </div>
        )}
      </div>
  );
}
