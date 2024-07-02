export const ExperienceBar = () => {
    return (
        <div className="">
            <div className="w-[115px] m-auto bg-[#E5E7EB] px-5 py-1 rounded-xl" >
                <button>Experience</button>
            </div>
            <div className="text-[#4B5563] text-lg text-center mt-4">Here is a quick summary of my most recent experiences:</div>
            <div className="flex flex-col gap-6 mt-6">

                <div className="bg-[#FFFFFF] w-[100%] rounded-xl border-1 shadow-black shadow-md p-[32px]">

                    <div className="w-[279px] m-auto flex flex-col gap-4">
                        <div><img src="images/logo-upwork.png" /></div>
                        <h3 className="text-[#374151] text-base">Nov 2021 - Present</h3>
                        <div>
                            <h2 className="text-[#111827] text-lg">Sr. Frontend Developer</h2>
                            <div className="mt-4">
                                <ul className="list-disc  ml-5 text-[#4B5563] text-base flex flex-col gap-1">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] w-[100%] rounded-xl border-1 shadow-black shadow-md p-[32px]">

                    <div className="w-[279px] m-auto flex flex-col gap-4">
                        <div><img src="images/logo-upwork.png" /></div>
                        <h3 className="text-[#374151] text-base">Jul 2017 - Oct 2021</h3>
                        <div>
                            <h2 className="text-[#111827] text-lg">Team Lead</h2>
                            <div className="mt-4">
                                <ul className="list-disc ml-5 text-[#4B5563] text-base flex flex-col gap-1">
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] w-[100%] rounded-xl border-1 shadow-black shadow-md p-[32px]">

                    <div className="w-[279px] m-auto flex flex-col gap-4">
                        <div><img src="images/logo-upwork.png" /></div>
                        <h3 className="text-[#374151] text-base">Dec 2015 - May 2017</h3>
                        <div>
                            <h2 className="text-[#111827] text-lg">Full Stack Developer</h2>
                            <div className="mt-4">
                                <ul className="list-disc  ml-5 text-[#4B5563] text-base flex flex-col gap-1">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}