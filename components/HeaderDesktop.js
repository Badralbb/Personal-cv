import Image from "next/image"
import { FromCountry } from "./FromCountry"
import { InformationSvg } from "./InformationSvg"
import { FaceImage } from "./FaceImage"

const header = ['About',
    'Work', 'Testimonials', 'Contact'
]
export const HeaderDesktop = () => {
    return (<div>



        <div className="flex justify-between items-center dark:text-[#F9FAFB] pt-4">
            <h2 className="text-3xl">&lt;SS/&gt;</h2>
            <div className="flex gap-6 items-center">
                {header.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}

                <div className="w-[1px] h-[24px] bg-[#F3F4F6]"></div>
                <div className="flex gap-4 items-center">
                    <svg id="sun" onClick={() => {document.getElementById("sun").style.display = "none"; document.getElementById("moon").style.display = "block"}} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg onClick={()=>{document.getElementById("moon").style.display = "none";document.getElementById("sun").style.display = "block"}} id="moon" className="hidden" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 9C16.8065 10.1935 16.136 11.8122 16.136 13.5C16.136 15.1878 16.8065 16.8065 18 18C19.1935 19.1935 20.8122 19.864 22.5 19.864C24.1878 19.864 25.8065 19.1935 27 18C27 19.78 26.4722 21.5201 25.4832 23.0001C24.4943 24.4802 23.0887 25.6337 21.4442 26.3149C19.7996 26.9961 17.99 27.1743 16.2442 26.8271C14.4984 26.4798 12.8947 25.6226 11.636 24.364C10.3774 23.1053 9.5202 21.5016 9.17294 19.7558C8.82567 18.01 9.0039 16.2004 9.68509 14.5558C10.3663 12.9113 11.5198 11.5057 12.9999 10.5168C14.4799 9.52784 16.22 9 18 9Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25 9V13" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27 11H23" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                <Image className="absolute top-0 left-[-30px]" src="/images/Pic.png" width={280} height={320} />
            </div>

        </div>
    </div>)
}