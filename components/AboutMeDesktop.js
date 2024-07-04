export const AboutMeDesktop = () => {
    return (<div className="flex-col">
        <div className="w-[105px] m-auto">
            <button className="bg-[#E5E7EB] px-5 py-1 rounded-xl text-nowrap">
                About me
            </button>
        </div>

        <div className="flex justify-between mt-12">
            <img id="Image" className="ml-7 w-[280px] h-[360px] " src="images/pic.jpg" />
            <div>
                <h2 className="text-3xl">Curious about me? Here you have it:</h2>
                <div className="mt-6 flex flex-col gap-4 w-[584px]">
                    <div>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </div>
                    <div>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</div>
                    <div>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</div>
                    <div>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</div>
                    <div>Finally, some quick bits about me.</div>
                    <div className="flex gap-24 ml-6"> 
                        <ul className="list-disc w-[166px] flex flex-col gap-2.5 text-nowrap">
                            <li>B.E. in Computer Engineering</li>
                            <li>Full time   freelancer</li>
                        </ul>
                        <ul className="list-disc w-[166px] flex flex-col gap-2.5">
                            <li>Avid learner</li>
                            <li>Aspiring indie hacker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>



    </div>)
}