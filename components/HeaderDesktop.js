import Image from "next/image"
import { FromCountry } from "./FromCountry"
import { InformationSvg } from "./InformationSvg"
import { FaceImage } from "./FaceImage"

export const HeaderDesktop = () => {
    return (<div>



        <div className="flex justify-between items-center dark:text-[#F9FAFB] pt-4">
            <h2 className="text-3xl">&lt;SS/&gt;</h2>
            <div className="flex gap-6 items-center">
                <div>About</div>
                <div>Work</div>
                <div>Testimonials</div>
                <div>Contact</div>
                <div className="w-[1px] h-[24px] bg-[#F3F4F6]"></div>
                <div className="flex gap-4 items-center">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 8V10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 26V28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.9301 10.9299L12.3401 12.3399" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.66 23.6599L25.07 25.0699" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 18H10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26 18H28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.3401 23.6599L10.9301 25.0699" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.07 10.9299L23.66 12.3399" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    
                    <div className="bg-[#111827]  rounded-xl dark:bg-[#F9FAFB] text-center py-1.5 px-4">
                        <button>Download CV</button>
                    </div>
                </div>

            </div>

        </div>
        <div className="mt-24 flex justify-between">
            <div className="w-[768px] flex flex-col gap-12">
                <div>
                    <div className="text-4xl">
                        <h2>Hi, I’m Sagar 👋</h2>
                    </div>
                    <div className="mt-2">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</div>
                </div>
                <FromCountry />
                <InformationSvg />
            </div>
            <div className="relative">
            <div className="w-[250px] mt-5 h-[300px] bg-[#E5E7EB]"></div>
            <Image className="absolute top-0 left-[-30px]" src="/images/Pic.png" width={280} height={320}/>
            </div>
            
        </div>
    </div>)
}