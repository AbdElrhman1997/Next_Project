import LanguageToggle from "@/_components/LanguageToggle";
import ConsultationsSection from "./_components/ConsultationsSection";
import HomeBackgrounds from "./_components/HomeBackgrounds";
import NewsTicker from "./_components/NewsTicker";
import ServicesSection from "./_components/ServicesSection";

export default function HomePage() {
  return (
    <section>
      <HomeBackgrounds />
      <NewsTicker />
      <ServicesSection />
      <ConsultationsSection />
      <LanguageToggle />
    </section>
  );
}
