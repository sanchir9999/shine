import { Upwork } from "@/assets/Upwork"
export const Section4 = () => {
    return (
        <div className="bg-slate-100 dark:bg-[#111827]">
            <div className="w-[1440px] m-auto pl-[80px] pr-[80px] pt-[96px] pb-[96px]">
                <div className="w-[1280px] flex flex-col gap-[43px]">
                    <div className="w-[1216px] m-auto flex flex-col items-center gap-[16px]">
                        <div><button className="w-[105px] h-[28px] rounded-md text-sm bg-slate-200 text-black">Skills</button></div>
                        <div className="font-normal text-xl text-[#000] dark:text-[#D1D5DB]"> Here is a quick summary of my most recent experiences:</div>
                    </div>
                    <div className="w-[896px] m-auto flex flex-row justify-between gap-[48px] pl-[32px] pr-[32px] pt-[32px] pb-[32px] bg-white rounded-md dark:bg-[#1F2937]">
                        <div>
                            <Upwork />
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="font-semibold text-xl text-[#000] dark:text-[#F9FAFB]">Sr. Frontend Developer</div>
                            <div>
                                <ul className=" font-normal list-disc text-base text-[#000] dark:text-[#D1D5DB]">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-base font-normal w-[146px] text-[#000] dark:text-[#E5E7EB] ">Nov 2021 - Present</div>
                    </div>
                    <div className="w-[896px] m-auto flex flex-row justify-between gap-[48px] pl-[32px] pr-[32px] pt-[32px] pb-[32px] bg-white rounded-md dark:bg-[#1F2937]">
                        <div> <Upwork /></div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="font-semibold text-xl text-[#000] dark:text-[#F9FAFB]">Team Lead</div>
                            <div>
                                <ul className=" font-normal list-disc text-base text-[#000] dark:text-[#D1D5DB]">
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-base font-normal w-[148px] text-[#000] dark:text-[#E5E7EB]">Jul 2017 - Oct 2021</div>
                    </div>
                    <div className="w-[896px] m-auto flex flex-row justify-between gap-[48px] pl-[32px] pr-[32px] pt-[32px] pb-[32px]  bg-white rounded-md shadow-custom3 dark:bg-[#1F2937]">
                        <div> <Upwork /></div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="font-semibold text-xl text-[#000] dark:text-[#F9FAFB] ">Full Stack Developer</div>
                            <div>
                                <ul className=" font-normal list-disc text-base text-[#000] dark:text-[#D1D5DB]">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>

                                </ul>
                            </div>
                        </div>
                        <div className="text-base font-normal w-[161px] text-[#000] dark:text-[#E5E7EB]">Jul 2017 - Oct 2021</div>
                    </div>
                </div>
            </div>
        </div>
    )
}