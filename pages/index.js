
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



export default function Home() {
  return (
    <main>
      <main  className="sm:hidden">
      <section className="w-[343px] m-auto">
        <Head />
        <FaceImage/>
        <Introduction />

        <IntroductionLong />
        <FromCountry />
        <InformationSvg />
      </section>
      <section className="w-[375px] m-auto mt-16 bg-[#F9FAFB] pb-16">
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
      <section className="mt-16 bg-[#F9FAFB] w-[375px] m-auto py-16">
      <div className="w-[343px] m-auto" >
            <ExperienceBar/>
        </div>
      </section>
      </main>
   
    </main>
  );
}
