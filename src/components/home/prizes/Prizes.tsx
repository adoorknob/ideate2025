import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Prizes: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center justify-center text-white text-base mx-5 lg:mx-20">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">
                prizes:
            </div>

            {/* top3 */}
            <div className="grid m-10 justify-center">
                <img
                    src="../prizes/top3.png"
                    className="w-[70vw] md:w-[50vw] justify-self-center"
                />
                <div className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 md:mt-5">
                    <span>
                        More information about the {" "}
                        <a 
                            className="underline text-blue-300 hover:text-blue-400"
                            href="https://enterprise.nus.edu.sg/funding/nus-venture-initiation-programme/">
                            Venture Initiation Programme (VIP) Grant
                        </a>
                    </span>
                </div>
            </div>

            {/* all semis */}
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 m-10">
                <img 
                    src="../prizes/all_semis_icon_wo_astar.png"
                    className="hidden md:block w-[40vw]"
                />
                <img 
                    src="../prizes/all_semis_text_label.png"
                    className="w-[50vw] md:w-[40vw] self-center"
                />
                <img 
                    src="../prizes/all_semis_icon_wo_astar.png"
                    className="block md:hidden w-[60vw] mt-10 self-center"
                />
                <div className="m-3 md:col-span-2 w-[80vw]">
                </div>
            </div>

            {/* consolation */}
            <div className="flex flex-col md:grid md:grid-cols-3 place-content-center items-center md:m-10">
                <img 
                    src="../prizes/amongsemis_label_text.png"
                    className="w-[60vw] md:w-[50vw] mt-6 sm:m-5 justify-self-center"
                />
                <div className="md:col-span-2 w-full grid grid-cols-2 p-5">
                    <div className="w-full grid md:justify-end justify-start">
                        <img 
                            src="../prizes/best_exhibition.png"
                            className="w-[30vw] md:w-[20vw] justify-self-center"
                        />
                    </div>
                    <div className="w-full grid md:justify-start justify-end">
                        <div className="min-h-[8vw]" />
                        <img 
                            src="../prizes/most_innovative.png"
                            className="w-[30vw] md:w-[20vw] justify-self-center"
                        />
                    </div>
                </div>
            </div>
            <Accordion className="w-full bg-gray-100/10 px-5 rounded-xl" type="single" collapsible>
                <AccordionItem value="TnCs">
                <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    *Click Here to see Terms and Conditions
                </AccordionTrigger>
                <AccordionContent className="text-justify text-normal text-sm sm:text-base md:text-lg lg:text-xl">
                    <div className="rounded-xl bg-gray-100/10 p-3 m-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                            S$1,000 Innovation and Design Programme (iDP) Prototyping Fund
                        </span>
                        <span>
                            <br/>
                            <br/>
                            Claimable when participants enrol for iDP project courses {" "} 
                            <a className="underline text-blue-300 hover:text-blue-400" href="https://cde.nus.edu.sg/edic/idp/modules/eg3301r/"> CDE3301</a> or  {" "} 
                            <a className="underline text-blue-300 hover:text-blue-400" href="https://cde.nus.edu.sg/edic/idp/modules/eg4301/">CDE4301</a>
                            <a className="underline text-blue-300 hover:text-blue-400" href="https://cde.nus.edu.sg/edic/idp/modules/eg4301a/">/4301A</a>
                        </span>
                    </div>
                    <div className="rounded-xl bg-gray-100/10 p-3 m-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                            NUS Overseas Colleges (NOC) Greenlane
                        </span>
                        <span>
                            <br/>
                            <br/>
                            Participants are able to skip the interview process, however embarking on the programme
                            is also dependent on other factors (procurement of visa, internship, etc.). More details
                            are in our <a className="underline text-blue-300 hover:text-blue-400" href="/faq">FAQ page</a>.
                        </span>
                    </div>
                    <div className="rounded-xl bg-gray-100/10 p-3 m-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                            Among Semifinalists
                        </span>
                        <span>
                            <br/>
                            <br/>
                            Winners of the Best Exhibition and Most Sustainable prizes will be chosen among the 16 semifinalist
                            teams.
                        </span>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Prizes