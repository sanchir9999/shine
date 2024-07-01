import { NavbarPhone } from "./NavbarPhone"
import { Tom } from "@/assets/Tom"
export const Navbar = ({ toggle }) => {
    return (
        <div className="lg:w-[1440px] m-auto">
            <div className="lg:w-[1440px] m-auto h-[68px] content-center items-center" >
                <div><NavbarPhone /></div>
                <div className="hidden lg:flex w-[1280px] h-[36px] m-auto justify-between content-center">
                    <div className="hidden lg:flex items-center w-[76px] h-[36px]">
                        <div><Tom className="dark:bg-white bg-white" /></div>
                    </div>
                    <div className="hidden lg:flex w-[554px] h-[36px] justify-between items-center">
                        <div><h4 className="text-[#000] dark:text-[white]">About</h4> </div>
                        <div><h4 className="text-[#000] dark:text-[white]">Work</h4></div>
                        <div><h4 className="text-[#000] dark:text-[white]">Testimonials</h4></div>
                        <div><h4 className="text-[#000] dark:text-[white]">Contacts</h4></div>
                        <div className="flex gap-16px justify-between items-center ">
                            <button onClick={toggle}><img className="w-[24px] h-[24px]" src="/pictures/sun.png"></img></button>
                            <div className="w-[106px] h-[30px] text-white dark:text-black bg-black dark:bg-white flex items-center justify-center text-center rounded-md  text-sm">Download CV</div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

    )
}