import { useState } from "react";
import { DownloadCv } from "./DownloadCv";

const header = ['About',
    'Work', 'Testimonials', 'Contact'
]
export function Head() {
    const [white,setWhite] = useState(true)
    const [open, setOpen] = useState(false)
    const modeOff = ()=>{
            setWhite(false)
    }
    const modeOn = ()=>{
        setWhite(true)
    }
    function block() {
        setOpen(true)
    }
    function hide() {
        setOpen(false)
    }
    return (
        <div>


            <div className="flex justify-between items-center dark:text-[#F9FAFB]">
                <div>&lt;SS/&gt;</div>
                <div>
                    <svg onClick={block} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18H26" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 12H26" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 24H26" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>





            </div>
            <div className="w-[320px] relative m-auto mt-11">
                <div className="w-[260px] m-auto h-[265px] bg-[#E5E7EB] sm:hidden"></div>

                <img className="mt-6  m-auto  absolute top-[-48px] left-[40px]" src="images/pic.png" />

            </div>
            <div className="text-4xl mt-12 dark:text-[#F9FAFB]">
                <h2>Hi, I’m Sagar 👋</h2>
            </div>
            <p className="text-base text-justify text-[#4B5563] mt-2 dark:text-[#D1D5DB]">
                I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </p>
            <div className="flex flex-col gap-2 mt-12 dark:text-[#D1D5DB]">
                <div className="flex gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div>Ahmedabad, India</div>
                </div>
                <div className="flex gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="8" width="8" height="8" rx="4" fill="#10B981" />
                    </svg>
                    <div>
                        Available for new projects
                    </div>
                </div>

            </div>
            <div className="flex gap-1 mt-12 items-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 28V24C21.1392 22.7473 20.78 21.4901 20 20.5C23 20.5 26 18.5 26 15C26.08 13.75 25.73 12.52 25 11.5C25.28 10.35 25.28 9.15 25 8C25 8 24 8 22 9.5C19.36 9 16.64 9 14 9.5C12 8 11 8 11 8C10.7 9.15 10.7 10.35 11 11.5C10.2719 12.5159 9.91851 13.7528 10 15C10 18.5 13 20.5 16 20.5C15.61 20.99 15.32 21.55 15.15 22.15C14.98 22.75 14.93 23.38 15 24V28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 24C10.49 26 10 22 8 22" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 11.5C11 10.5717 11.3687 9.6815 12.0251 9.02513C12.6815 8.36875 13.5717 8 14.5 8H18V15H14.5C13.5717 15 12.6815 14.6313 12.0251 13.9749C11.3687 13.3185 11 12.4283 11 11.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 8H21.5C21.9596 8 22.4148 8.09053 22.8394 8.26642C23.264 8.44231 23.6499 8.70012 23.9749 9.02513C24.2999 9.35013 24.5577 9.73597 24.7336 10.1606C24.9095 10.5852 25 11.0404 25 11.5C25 11.9596 24.9095 12.4148 24.7336 12.8394C24.5577 13.264 24.2999 13.6499 23.9749 13.9749C23.6499 14.2999 23.264 14.5577 22.8394 14.7336C22.4148 14.9095 21.9596 15 21.5 15H18V8Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 18.5C18 18.0404 18.0905 17.5852 18.2664 17.1606C18.4423 16.736 18.7001 16.3501 19.0251 16.0251C19.3501 15.7001 19.736 15.4423 20.1606 15.2664C20.5852 15.0905 21.0404 15 21.5 15C21.9596 15 22.4148 15.0905 22.8394 15.2664C23.264 15.4423 23.6499 15.7001 23.9749 16.0251C24.2999 16.3501 24.5577 16.736 24.7336 17.1606C24.9095 17.5852 25 18.0404 25 18.5C25 18.9596 24.9095 19.4148 24.7336 19.8394C24.5577 20.264 24.2999 20.6499 23.9749 20.9749C23.6499 21.2999 23.264 21.5577 22.8394 21.7336C22.4148 21.9095 21.9596 22 21.5 22C21.0404 22 20.5852 21.9095 20.1606 21.7336C19.736 21.5577 19.3501 21.2999 19.0251 20.9749C18.7001 20.6499 18.4423 20.264 18.2664 19.8394C18.0905 19.4148 18 18.9596 18 18.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 25.5C11 24.5717 11.3687 23.6815 12.0251 23.0251C12.6815 22.3687 13.5717 22 14.5 22H18V25.5C18 26.4283 17.6313 27.3185 16.9749 27.9749C16.3185 28.6313 15.4283 29 14.5 29C13.5717 29 12.6815 28.6313 12.0251 27.9749C11.3687 27.3185 11 26.4283 11 25.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 18.5C11 17.5717 11.3687 16.6815 12.0251 16.0251C12.6815 15.3687 13.5717 15 14.5 15H18V22H14.5C13.5717 22 12.6815 21.6313 12.0251 20.9749C11.3687 20.3185 11 19.4283 11 18.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <div className={`px-4 fixed z-10 -left-full transition-[5s]  ${open ? " left-0 top-0 right-0 bottom-0" : "-left-full -top-full"} ${white ? "bg-white" : "bg-slate-700"}`}>
                <div className="flex justify-between items-center dark:text-[#F9FAFB] pt-4 pb-5 border-b">
                    <div>&lt;SS/&gt;</div>
                    <div>
                        <svg onClick={hide}  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12L12 24" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 12L24 24" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-4 border-y text-[#4B5563]">
                    {header.map((item, index) => (
                        <div key={index}>
                            {item}
                        </div>
                    ))

                    }
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <div className="text-[#4B5563]">Switch Theme</div>
                        <svg onClick={modeOff} className={`${white ? "block" : "hidden"}`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 8V10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 26V28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.93 10.9299L12.34 12.3399" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.66 23.6599L25.07 25.0699" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 18H10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26 18H28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.34 23.6599L10.93 25.0699" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.07 10.9299L23.66 12.3399" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <svg onClick={modeOn} className={`${white ? "hidden" : "block"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 3V7" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 5H17" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <div className="mt-4 bg-[#111827] rounded-xl w-[288px] m-auto dark:bg-[#F9FAFB] text-center px-1.5 py-4">
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}