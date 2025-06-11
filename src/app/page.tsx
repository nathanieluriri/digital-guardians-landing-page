import Hero from "./sections/heroSection";
import ServiceSection from "./sections/serviceSection";
import AboutSection from "./sections/aboutSection";
import FaqSection from "./sections/frequentlyAskedQuestionsSection";
import WhyJoin from "./sections/whyJoinSection";
import ContactSection from "./sections/contactSection";
export default function Home() {
  return (
    <>
    <Hero title="Cybersecurity You Can Trust. Protection You Can Prove." subtitle="Cyberattacks make news for all the wrong reasons. Whether you're a startup or a global enterprise, Digital Guardian’s end-to-end protection, 24/7 monitoring, and real-time threat response keep your business out of trouble." ctaPrimary={{label:"Start free risk assessment", href:"#"}} />
    <ServiceSection />
    <AboutSection/>
    <WhyJoin/>
    <FaqSection/>
    <ContactSection/>
    </>
  );
}
