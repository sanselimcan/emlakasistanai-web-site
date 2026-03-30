import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import VapiDemo from "@/components/VapiDemo";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import DemoFormSection from "@/components/DemoFormSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <VapiDemo />
        <Testimonials />
        <ComparisonTable />
        <DemoFormSection />
        <FAQ />
        <CTASection />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
