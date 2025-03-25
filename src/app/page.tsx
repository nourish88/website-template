import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ExpertiseAreas from "@/components/ExpertiseAreas";

import Testimonials from "@/components/Testimonials";
import BlogPreviews from "@/components/BlogPreviews";
// import ExpertiseAreas from "@/components/ExpertiseAreas";
// import Testimonials from "@/components/Testimonials";
// import BlogPreviews from "@/components/BlogPreviews";
// import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <ExpertiseAreas />

        {/* <TailwindTest></TailwindTest> */}
        <Testimonials />
        <BlogPreviews />
        {/* <ContactCTA /> */}
      </main>
      <Footer />
    </>
  );
}
