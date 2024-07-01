export const SecondSection = () => {
    return (
        <div className="w-[full] bg-slate-50 pl-[80px] pr-[80px] pt-[96px] pb-[96px]">
            <div className="w-[1440px] m-auto bg-slate-50">
                <div className=" flex flex-col gap-[48px]">
                    <div className="m-auto flex items-center justify-center text-center"><button className="w-[105px] h-[28px] rounded-md  text-sm bg-slate-200 text-black">About me</button></div>
                    <div className="flex">
                        <div className="flex-1 flex justify-center"><img className="w-[400px] h-[480px] shadow-custom2" src="/pictures/TOOOM.png"></img></div>
                        <div className="flex-1 flex flex-col gap-[24px]">
                            <div className="text-3xl font-semibold">Curious about me? Here you have it:</div>
                            <div className=" flex flex-col gap-[16px] font-normal text-base">
                                <p>I'm a designer turned full stack developer, passionate about React.js and Node.js.
                                    I excel in blending technical and visual aspects to craft exceptional digital products,
                                    prioritizing user experience, precise design, and optimized code.</p>
                                <p>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends.
                                    Now in my early thirties, seven years in,
                                    I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
                                <p>With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</p>
                                <p>Finally, some quick bits about me.</p>
                                <ul className="flex flex-col gap-[16px] list-disc">
                                    <li>B.E. in Computer Engineering</li>
                                    <li>Avid learner</li>
                                    <li>Full time freelancer</li>
                                </ul>
                                <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}