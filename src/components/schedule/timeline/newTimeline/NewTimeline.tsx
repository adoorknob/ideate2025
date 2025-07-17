import React, { useRef } from "react";
import TimelineListItem from "./TimelineListItem";
import { useEffect, useState } from 'react';

const timelineData = [
    {
        title: 'Launch Day',
        date: '16th Aug',
        description: 'Launch of IDEATE 2025 & First Workshop',
        link: 'opening-day'
    },
    {
        title: 'Building the Innovation Mindset',
        date: '20th Aug',
        description: 'Learn about the fundamentals of starting a business through this workshop', 
        link: null
    },
    {
        title: 'Preliminary Design Submission',
        date: '3rd Sep',
        description: 'Submit a video recording of your idea for judges to review',
        link: null
    },
    {
        title: 'Prototyping',
        date: 'September to October',
        description: 'Congrats your in the semi-finals! Time to make it real',
        link: null
    },
    {
        title: 'Technical Workshops',
        date: '20th to 28th Sep',
        description: 'Develop the skills to bring your ideas to life',
        link: null
    },
    {
        title: 'Mentor Check-in',
        date: '2th Sep to 5th Oct',
        description: 'Consultations with industrial mentors',
        link: null
    },
    {
        title: 'Pitching Workshop',
        date: '6th Oct',
        description: 'Learn how to pitch like a pro',
        link: null
    },
    {
        title: 'Semi-finals and Finals',
        date: '15th Oct',
        description: 'Showcase your final prototype in the Semi-finals Exhibition. Finalists will get to pitch it on the big stage.',
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
        const scrolled = viewportCenter - 250 - sectionStart;

        const percent = Math.min(Math.max((scrolled / total) * 100, 0), 100);
        setProgress(percent);
        };

        window.addEventListener('scroll', updateScroll);
        updateScroll(); // Initialize
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div ref={targetRef} className="text-white mx-10 lg:mx-20 2xl:mx-40 mt-10 flex flex-col items-center justify-center text-sm lg:text-xl">
            <div className="title-text">
                <div className="title-firsttext">
                    What To
                </div>
                <div className="title-subtext">
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
                <div className="z-0 absolute top-3 w-[3px] 2xl:w-[6px] h-full left-4 md:left-2 2xl:left-8 bg-gradient-to-b from-[#009D52] via-[#D6BA4B] to-[#C62929]">
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