import { JSIcon } from "@/assets/JSIcon"
import { TypesScriptss } from "../assets/TypesScriptss"
import { React } from "@/assets/React"
import { Type } from "@/assets/Type"
import { Nodee } from "@/assets/Node"
import { Express } from "@/assets/Express"
import { Nest } from "@/assets/Nest"
import { Socket } from "@/assets/Socket"
import { MongoDB } from "@/assets/MongoDB"
import { Sacc } from "@/assets/Sacc"
import { Tailwindcss } from "@/assets/Tailwindcss"
import { Figma } from "@/assets/Figma"
import { Cypress } from "@/assets/Cypress"
import { StoryBook } from "@/assets/StoryBook"
import { Github } from "@/assets/Github"
export const ThirdSection = () => {
    return (
        <div className="w-[1440px] m-auto pl-[80px] pr-[80px] pt-[96px] pb-[96px]">
            <div className="w-[1280px] m-auto flex flex-col gap-[43px]">
                <div className="w-[1216px] m-auto flex flex-col items-center gap-[16px]">
                    <div className=""><button className="w-[105px] h-[28px] rounded-md text-sm bg-slate-200 text-black">Skills</button></div>
                    <div className="font-normal text-xl"> The skills, tools and technologies I am really good at:</div>
                </div>
                <div className=" flex flex-col gap-[48px]">
                    <div className="flex flex-row justify-between">
                        <div>
                            <JSIcon />
                            Javascript
                        </div>
                        <div>
                            <TypesScriptss />
                            TypeScript
                        </div>
                        <div> <React />
                            React
                        </div>
                        <div> <Type />
                            Next.js
                        </div>
                        <div><Nodee />
                            Node.js
                        </div>
                        <div>
                            <Express />
                            Express.js
                        </div>
                        <div>
                            <Nest />
                            Nest.js
                        </div>
                        <div>
                            <Socket />
                            Socket
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <MongoDB />
                            MongoDB
                        </div>
                        <div>
                            <Sacc />
                            Sacc/Scss
                        </div>
                        <div>
                            <Tailwindcss />
                            Tailwindcss
                        </div>
                        <div>
                            <Figma />
                            Figma
                        </div>
                        <div>
                            <Cypress />
                            Cypress
                        </div>
                        <div>
                            <StoryBook />
                            StoryBook
                        </div>
                        <div>
                            <Github />
                            Github
                        </div>
                        <div>
                            <Github />
                            Github
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}