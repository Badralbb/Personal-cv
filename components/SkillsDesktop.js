
const skills = [{title:"Javascript",source:"images/icon-javscript.png"},
    {title:"Typescript",source:"images/Vector.svg"},
    {title:"React",source:"images/icon-react.png"},
    {title:"Next.js",source:"images/icon-nextjs.svg"},
    {title:"Node.js",source:"images/icon-nodejs.svg"},
    {title:"Express.js",source:"images/icon-express.svg"},
    {title:"Nest.js",source:"images/icon-nest.svg"},
    {title:"Socket.io",source:"images/icon-socket.svg"},
    {title:"PostgreSQL",source:"images/icon-postgresql.svg"},
    {title:"MongoDB",source:"images/icon-mongodb.svg"},
    {title:"Sass/Scss",source:"images/icon-sass.svg"},
    {title:"Tailwindcss",source:"images/icon-tailwindcss.svg"},
    {title:"Figma",source:"images/icon-figma.svg"},
    {title:"Cypress",source:"images/icon-cypress.svg"},
    {title:"Storybook",source:"images/icon-storybook.svg"},
    {title:"Git",source:"images/icon-git.svg"}
]
export const SkillsDesktop = () => {
    return (
        <div>
            <div className="w-[75px]  m-auto dark:bg-[#374151] bg-[#E5E7EB] px-5 py-1 rounded-xl" >
                <button className="dark:text-[#D1D5DB]">Skills</button>
            </div>
            <div className="mt-4 pb-12 text-center">The skills, tools and technologies I am really good at:</div>
            <div className="flex gap-[86px] flex-wrap">
                {skills.map((item,index)=>(
                    <div className="flex flex-col items-center" key={index}>
                            <img src={item.source}/> 
                            <div>{item.title}</div>
                    </div>
                ))}
            </div>



        </div>
    )
}