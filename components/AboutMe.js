
export const AboutMe = () => {
    return (<div className="flex-col">
        <div className="w-[105px] m-auto">
            <button className="bg-[#E5E7EB] px-5 py-1 rounded-xl text-nowrap">
                About me
            </button>
        </div>
        <div className="w-[320px] relative m-auto mt-11">
            <div className="w-[320px] m-auto h-[350px] bg-[#E5E7EB]"></div>
            <img className="mt-6 w-[280px] m-auto h-[360px] absolute top-[-50px] left-[20px]" src="images/pic.jpg" />

        </div>

    </div>)
}