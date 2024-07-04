import Image from "next/image"
import { Fiskil } from "./Fiskil"

export const WorkDesktopReverse = () => {
    return (
        <div className="dark:text-[#D1D5DB]">
            <div className="flex justify-between border-b-4 rounded-lg mt-12">
                <div className="w-[576px]">
                    <Fiskil />
                </div>
                <div className="bg-[#F3F4F6] py-8 px-8 rounded-t-md dark:bg-[#374151]">
                    <Image src="/images/Picture.png" width={480} height={384} />

                </div>


            </div>


        </div>
    )
}