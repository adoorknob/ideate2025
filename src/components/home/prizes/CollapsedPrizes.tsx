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
            <div className="title-text">
                prizes:
            </div>

            <div>
                {/* desktop prizes */}
                <img src="../prizes/collapsed.png"
                    className="hidden sm:block"/>

                {/* mobile prizes */}
                <div className="sm:hidden flex flex-col items-center justify-center">
                    <img
                        src="../prizes/top3.png"
                        className="w-[60vw] m-5"
                    />
                    <img
                        src="../prizes/all_semis.png"
                        className="w-[50vw] m-5"
                    />
                    <img
                        src="../prizes/among_semis.png"
                        className="w-[50vw] m-5"
                    />
                </div>
            </div>

            <div className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl mt-3 md:mt-5 mb-10 ">
                <span>
                    More information about the {" "}
                    <a 
                        className="underline text-blue-300 hover:text-blue-400"
                        href="https://enterprise.nus.edu.sg/funding/nus-venture-initiation-programme/">
                        Venture Initiation Programme (VIP) Grant
                    </a>
                </span>
            </div>

            <Accordion className="w-full bg-gray-100/10 px-5 2xl:px-10 2xl:py-5 rounded-xl" type="single" collapsible>
                <AccordionItem value="TnCs">
                <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
                    *Click Here to see Terms and Conditions
                </AccordionTrigger>
                <AccordionContent className="text-justify text-normal text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl">
                    <div className="rounded-xl bg-gray-100/10 p-3 2xl:p-7 m-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-semibold">
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
                    <div className="rounded-xl bg-gray-100/10 p-3 2xl:p-7 m-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-semibold">
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
                    <div className="rounded-xl bg-gray-100/10 p-3 2xl:p-7 m-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-semibold">
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