import Image from "next/image"
import { Fiskil } from "./Fiskil"


export const Work = () => {
    return (
        <div className="dark:text-[#D1D5DB]">
            <div className="w-[75px] m-auto">
                <button className="bg-[#E5E7EB] px-5 py-1 rounded-xl text-nowrap dark:bg-[#374151]">
                    Work
                </button>
            </div>
            <div className="text-[#4B5563] dark:text-[#F9FAFB] text-lg text-center mt-4">Some of the noteworthy projects I have built:</div>
            <div className="bg-[#F3F4F6] py-8 px-8 rounded-t-md dark:bg-[#374151]">
                <Image src="/images/Picture.png" width={279} height={192}/>
            </div>
            <Fiskil/>
        </div>
    )
}