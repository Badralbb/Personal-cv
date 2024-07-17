
import { FromCountry } from "@/components/FromCountry";
import { Head } from "@/components/Head";
import { InformationSvg } from "@/components/InformationSvg";
import { Introduction } from "@/components/Introduction";
import { IntroductionLong } from "@/components/IntroductionLong";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ExperienceBar } from "@/components/ExperienceBar";
import { FaceImage } from "@/components/FaceImage";
import { Work } from "@/components/Work";
import { Fiskil } from "@/components/Fiskil";
import { Footer } from "@/components/Footer";
import { DownloadCv } from "@/components/DownloadCv";
import { HeaderDesktop } from "@/components/HeaderDesktop";
import { AboutMeDesktop } from "@/components/AboutMeDesktop";
import { SkillsDesktop } from "@/components/SkillsDesktop";
import { ExperienceDesktop } from "@/components/ExperienceDesktop";
import { WorkDesktop } from "@/components/WorkDesktop";
import { WorkDesktopReverse } from "@/components/WorkDesktopReverse";
import { FooterDesktop } from "@/components/FooterDesktop";
import { Upwork } from "@/components/Upwork";

const experience = [{title:"Sr. Frontend Developer",startDate:"Nov 2021 - Present",listItems : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Ut pretium arcu et massa semper, id fringilla leo semper.","Sed quis justo ac magna.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."] },
{title:"Team Lead",startDate:"Jul 2017 - Oct 2021",listItems : ["Sed quis justo ac magna.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Sed quis justo ac magna.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."] },
{title:"Full Stack Developer",startDate:"Dec 2015 - May 2017",listItems : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."] }]

export default function Home() {
  return (
    <main className="dark:bg-[#030712]">
      <main className="sm:hidden">
        <section className="w-[343px] m-auto">
          <Head />
          <FaceImage />
          <Introduction />

          <IntroductionLong />
          <FromCountry />
          <InformationSvg />
        </section>
        <section className="w-[375px] m-auto mt-16 bg-[#F9FAFB] dark:bg-[#111827] pb-16">
          <div className="w-[343px] m-auto">
            <AboutMe />
            <Experience />
          </div>
        </section>
        <section className="w-[375px] m-auto mt-16">
          <div className="w-[343px] m-auto" >
            <Skills />
          </div>
        </section>
        <section className="mt-16 bg-[#F9FAFB] dark:bg-[#111827] w-[375px] m-auto py-16">
          <div className="w-[343px] m-auto" >
            <ExperienceBar />
          </div>
        </section>
        <section className="w-[343px] m-auto py-16 flex flex-col gap-6">
          <div>
            <Work />
          </div>
          <Fiskil />
          <Fiskil />
        </section>
        <section className="w-[343px] m-auto py-16">
          <Footer />
        </section>
        <section className="dark:bg-[#111827] bg-[#F9FAFB] flex w-[375px] m-auto justify-center items-center py-6">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1095)">
              <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 6.23592C9.64172 5.82972 9.16823 5.54226 8.64254 5.41178C8.11685 5.2813 7.5639 5.314 7.05725 5.50552C6.5506 5.69704 6.11429 6.0383 5.80636 6.48389C5.49843 6.92948 5.3335 7.45828 5.3335 7.99992C5.3335 8.54156 5.49843 9.07035 5.80636 9.51595C6.11429 9.96154 6.5506 10.3028 7.05725 10.4943C7.5639 10.6858 8.11685 10.7185 8.64254 10.5881C9.16823 10.4576 9.64172 10.1701 10 9.76392" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_1095">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="text-sm text-[#4B5563] dark:text-[#4B5563]">
            2023 | Designed and coded with ❤️️ by Sagar Shah
          </div>
        </section>
        <section className="w-[375px] m-auto hidden">

          <DownloadCv />
        </section>
      </main>

      {/* header */}
      <section className="w-[1280px] m-auto hidden sm:block">
        <HeaderDesktop />
      </section>

      {/* About me */}
      <section className="w-[100%] hidden sm:block dark:bg-[#111827] bg-[#F9FAFB] mt-24 py-24">
        <section className="w-[1280px] m-auto">
          <AboutMeDesktop />
        </section>
      </section>

      {/* Skills */}
      <section className="w-[1280px] m-auto py-24 hidden sm:block">
        <SkillsDesktop  />
      </section>
      {/* Experience */}
      <section className="w-[100%] hidden sm:block dark:bg-[#111827] bg-[#F9FAFB] py-24">
        <section className="w-[1280px] m-auto">
          <ExperienceDesktop />
          {experience.map((items,index) => (
             <div key={index}>
             <Upwork props={items} />
             </div>
          ))}
         
       
          {/* <Upwork />
          <Upwork /> */}
        </section>
      </section>
      {/* Work */}
      <section className="w-[1280px] m-auto hidden sm:block py-24">
        <div className="w-[75px] m-auto">
          <button className="bg-[#E5E7EB] px-5 py-1 rounded-xl text-nowrap dark:bg-[#374151]">
            Work
          </button>
        </div>
        <div className="text-[#4B5563] dark:text-[#F9FAFB] text-lg text-center mt-4">Some of the noteworthy projects I have built:</div>

        <WorkDesktop />
        <WorkDesktopReverse />
        <WorkDesktop />
      </section>
      <section className="mt-24 hidden sm:block">
        <FooterDesktop />
      </section>
      <section className="dark:bg-[#111827] bg-[#F9FAFB] w-[100%] mt-24 hidden sm:block">
        <section className=" flex w-[375px] m-auto justify-center items-center py-6">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1095)">
              <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 6.23592C9.64172 5.82972 9.16823 5.54226 8.64254 5.41178C8.11685 5.2813 7.5639 5.314 7.05725 5.50552C6.5506 5.69704 6.11429 6.0383 5.80636 6.48389C5.49843 6.92948 5.3335 7.45828 5.3335 7.99992C5.3335 8.54156 5.49843 9.07035 5.80636 9.51595C6.11429 9.96154 6.5506 10.3028 7.05725 10.4943C7.5639 10.6858 8.11685 10.7185 8.64254 10.5881C9.16823 10.4576 9.64172 10.1701 10 9.76392" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_1095">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>


          <div className="text-sm text-[#4B5563] dark:text-[#4B5563]">
            2023 | Designed and coded with ❤️️ by Sagar Shah
          </div>
        </section>
      </section>

    </main>
  );
}
