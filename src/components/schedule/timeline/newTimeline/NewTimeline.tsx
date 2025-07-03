import React, { useRef } from "react";
import TimelineListItem from "./TimelineListItem";
import { useEffect, useState } from 'react';

const timelineData = [
    {
        title: 'Opening Day',
        date: '16th Aug',
        description: 'The day of opening',
        link: null
    },
    {
        title: 'Entrepreneurship Workshop',
        date: '20th Aug',
        description: 'The day of opening',
        link: null
    },
    {
        title: 'Preliminary Design Submission',
        date: '3rd Sep',
        description: 'The day of opening',
        link: null
    },
    {
        title: 'Technical Workshops',
        date: '20th to 28th Sep',
        description: 'A series of Technical Workshops designed to equip you with the skills bring your ideas to life.',
        link: null
    },
    {
        title: 'Mentor Check-in',
        date: '2th Sep to 5th Oct',
        description: 'Where the mentors check in',
        link: null
    },
    {
        title: 'Pitching Workshop',
        date: '6th Oct',
        description: 'yeah',
        link: null
    },
    {
        title: 'Semi-finals and Finals',
        date: '15th Oct',
        description: 'yeah',
        link: null
    },
]

const Timeline : React.FC = () => {
    const [progress, setProgress] = useState(0);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateScroll = () => {
        const section = targetRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;

        const sectionStart = rect.top;
        const sectionEnd = rect.bottom;

        const total = sectionEnd - sectionStart;
        const scrolled = viewportCenter - sectionStart;

        const percent = Math.min(Math.max((scrolled / total) * 100, 0), 100);
        setProgress(percent);
        };

        window.addEventListener('scroll', updateScroll);
        updateScroll(); // Initialize
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div ref={targetRef} className="text-white mx-20 flex flex-col items-center justify-center text-xl">
            <div className="relative text-7xl font-extrabold uppercase w-full text-left pb-20 p-10">
                <div>
                    What To
                </div>
                <div className="absolute top-25 left-50">
                    Expect
                </div>
            </div>
            <div className="relative">
                <ul>
                    {timelineData.map((item, index) => (
                            <TimelineListItem 
                            index={index}
                            title={item.title}
                            date={item.date}
                            link={item.link}
                            description={item.description}
                            />
                    ))}
                </ul>
                <div className="-z-10 absolute top-3 w-[3px] h-full left-2 bg-gradient-to-b from-[#009D52] via-[#D6BA4B] to-[#C62929]">
                      <div
                        className="bg-white w-full origin-top transition-all duration-10 ease-out"
                        style={{ height: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Timeline