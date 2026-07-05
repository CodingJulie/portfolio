import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedShowcaseSection } from '@/components/sections/FeaturedShowcaseSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection limit={2} />
      <FeaturedShowcaseSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
