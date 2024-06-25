export const PhoneFirstSection = () => {
    return (
        <div className="lg:hidden w-[375px]">
            <div className="flex flex-col justify-between h-[300px] border-solid border-amber-500 border-2">
                <div> <h1 className="text-6xl">Hi, I’m Tom 👋</h1>
                    <p>I specialize in full stack development, particularly with React.js and Node.js.
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
        </div>
    )
}