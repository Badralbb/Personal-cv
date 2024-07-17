import Image from "next/image"
import { Fiskil } from "./Fiskil"

const works = [{
    path: "/images/Picture.png", title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
        "React", "Next.js", "TypeScript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma",
        "Cypress", "Storybook", "Git"
    ]
}
]
export const WorkDesktopReverse = () => {
    return (
        <div className="dark:text-[#D1D5DB]">
            <div className="flex justify-between border-b-4 rounded-lg mt-12">
                <div className="w-[576px]">
                {
                    works.map((item,index)=>(
                        <Fiskil key={index} item={item} />
                    ))
                }
                    
                </div>
                <div className="bg-[#F3F4F6] py-8 px-8 rounded-t-md dark:bg-[#374151]">
                    <Image src="/images/Picture.png" width={480} height={384} />

                </div>


            </div>


        </div>
    )
}