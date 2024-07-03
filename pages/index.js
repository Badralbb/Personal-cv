
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



export default function Home() {
  return (
    <main>
      <main className="sm:hidden dark:bg-[#030712]">
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
      <section className="w-[1280px] m-auto hidden sm:block">
        <HeaderDesktop />
      </section>
      <section className="w-[100%] bg-[#F9FAFB] mt-24">
      <section className="w-[1280px] m-auto hidden sm:block">
      
      </section>
      </section>
    </main>
  );
}
