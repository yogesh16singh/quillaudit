import Comparison from "@/components/comparison";
import DescriptionSection from "@/components/description-section";
import HeroContent from "@/components/hero-content";
import NewsletterSectionn from "@/components/newsletter-section";

export default function Home() {
  return (
    <>
      {/* Main hero content */}
      <section className="bg-mains min-h-full py-6 flex items-center pt-32">
        <HeroContent />
      </section>

      {/* Comparision Section */}
      <section className="mt-12 h-auto">
        <Comparison />
      </section>

      {/* Some Paragraphs */}
      <section>
        <DescriptionSection />
      </section>

      {/* Newsletter Section */}
      <section className="lg:bg-b-2 w-full h-auto">
        <NewsletterSectionn />
      </section>
    </>
  );
}
