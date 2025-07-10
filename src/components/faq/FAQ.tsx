import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "Who can participate in IDEATE 2025?",
    answer: (
      <span>
        IDEATE 2025 is open to University students from all disciplines and years of study.
      </span>
    ),
  },
  {
    question: "Do I have to be from CDE/iDP to join?",
    answer: (
      <span>
        Nope! In fact, we encourage you to form interdisciplinary teams for this makerthon, to maximise your chances in the technical, design and business aspects.
      </span>
    ),
  },
  {
    question: "What is NOC Greenlane?",
    answer: (
      <span>
        <a 
            href="https://enterprise.nus.edu.sg/education-programmes/nus-overseas-colleges/" 
            className="underline text-blue-300 hover:text-blue-400 font-semibold">
                NUS Overseas Colleges (NOC)
        </a> 
        {" "} is an overseas programme that provides experiential learning and entrpreneurship development, with access to
        over 25 global innovative hotspots. 
        <br />
        <br />
        The NOC Greenlane provided by IDEATE 2025 will allow participants to skip the interview process. However, do take note
        that participants will still have to meet all application requirements set forth by NOC. Students will still have to 
        apply for NOC and select 3 choices. NOC has the right to consider other locations for participants besides 
        their 3 choices. 
        <br />
        <br />
        Students will also have to meet other requirements such as securing a company and securing a visa before embarking on
        the programme. 
      </span>
    ),
  },
  {
    question:"What are the compulsory workshops?",
    answer: (
        <div>
            Compulsory workshops incldude: <br />
            <ul className="list-disc list-inside">
                <li>Innovation Design Workshop - 16th August 2025</li>
                <li>Building the Innovation Mindset - 20th August 2025</li>
                <li>Pitching Workshop - 6th October 2025</li>
            </ul>
        </div>
    ),
  },
  {
    question:"Can I sign up alone?",
    answer: "Yes! The organising team will allocate team members for individual signups.",
  }
];


const FAQ: React.FC = () => {
    return (
        <div className="bg-inherit items-center justify-center text-white text-xl px-15 md:px-20 lg:px-50 2xl:px-70 pt-20">
            <div className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-extrabold py-10">
                faq
            </div>

            <Accordion className="bg-gray-100/10 px-5 rounded-xl" type="single" collapsible>
            {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl">{item.question}</AccordionTrigger>
                <AccordionContent className="text-justify text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-3xl">{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
    )
}

export default FAQ