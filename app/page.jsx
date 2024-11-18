import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Intro from "@/components/Intro";
import PageWrapper from "@/components/PageWrapper";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex w-full flex-col gap-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-12 md:container">
          <Intro />
          <SectionDivider />
          <AboutMe />
          <Projects />
          <SkillsSection />
        </div>
        <ExperienceSection />
        <div className="mx-auto flex max-w-[480px] flex-col gap-12">
          <ContactSection />
        </div>
      </div>
    </PageWrapper>
  );
}
