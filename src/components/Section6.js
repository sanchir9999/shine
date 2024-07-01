import { Cat } from "@/assets/Cat"
import { Bird } from "@/assets/Bird"
import { Last } from "@/assets/Last"
import { Messege } from "@/assets/Messege"
import { Suren } from "@/assets/Suren"
import { Phone } from "@/assets/Phone"
export const Section6 = () => {
    return (
        <div className="w-[1440px] m-auto border-solid border-amber-500 border-2">
            <div className="w-[1280px] m-auto flex flex-col items-center gap-[50px]">
                <div className="w-[1216px] m-auto flex flex-col items-center gap-[16px]">
                    <div className="w-[119px] h-[28px] rounded-md text-sm bg-slate-200 text-black flex items-center justify-center dark:bg-[#374151] dark:text-[white]">Get in touch</div>
                    <div className="font-normal text-xl text-center dark:text-[#D1D5DB]">What’s next? Feel free to reach out to me if you're looking for <br></br>
                        a developer, have a query, or simply want to connect.</div>
                </div>
                <div className="w-[436px] flex flex-col items-center">
                    <div className="flex justify-center gap-[26px]">
                        <div> <Messege /> </div>
                        <div className="font-semibold text-4xl dark:text-[#F9FAFB]">Monhbatsanchir1@gmail.com</div>
                        <div> <Suren /> </div>
                    </div>``
                    <div className="flex ">
                        <div> <Phone /> </div>
                        <div className="font-semibold text-4xl dark:text-[#F9FAFB]">+97688175658</div>
                        <div> <Suren /> </div>
                    </div>
                </div>
                <div className="w-[312px] flex flex-col gap-[8px]">
                    <div className="dark:text-[#F9FAFB]">You may also find me on these platforms!</div>
                    <div className="flex gap-[18px] justify-center">
                        <div> <Cat /></div>
                        <div> <Bird /> </div>
                        <div> <Last /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}