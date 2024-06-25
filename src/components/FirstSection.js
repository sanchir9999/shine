import { PhoneFirstSection } from "./PhoneFirstSection"
export const FirstSection = () => {
    return (
        <div className="w-[1440px] flex h-[556px] m-auto content-center">
            <div className="w-[1280px] h-[364px] flex m-auto items-stretch justify-between " >
                <div className="w-[600px] flex flex-col justify-between h-[364px] ">
                    <div> <h1 className="text-6xl font-bold ">Hi, I’m Tom 👋</h1>
                        <p className="mt-[8px]">I specialize in full stack development, particularly with React.js and Node.js.
                            My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone.
                            With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex"><img className="w-[24px] h-[24px]" src="/pictures/loaction.png"></img>
                            <h4>Ulaanbaatar, Mongolia</h4>
                        </div>
                        <div className="flex"><img className="w-[24px] h-[24px]" src="/pictures/green.png"></img>
                            <h4>Available for new projects</h4>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <img className="w-[24px] h-[24px]" src="/pictures/github.png"></img>
                        <img className="w-[24px] h-[24px]" src="/pictures/bird.png"></img>
                        <img className="w-[24px] h-[24px]" src="/pictures/figma.png"></img>
                    </div>
                </div>
                <div className="w-[568px] h-[364px] mr-[32px] shadow-gray-100 shadow-sm">
                    <div className=" right-[40px] bottom-[40px]">
                        <img className="w-[280px] h-[320px]" src="/pictures/Pic.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}