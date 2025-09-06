import Header from "@/app/components/header";
import HeroSection from "@/app/components/HeroSection"
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";
import DemoPreview from "./components/demoPreview";
import Benefits from "./components/benefits";
import FAQ from "./components/faq";
import Footer from "./components/footer";


export default function HomePage() {
  return(
    <div className="">
      <div className="max-w-6xl mx-auto">
         <div>
            <div>
              <Header/>
            </div>
            <div className="mt-0">
              <HeroSection/>
            </div>
         </div>
      </div>
      <Features/>
      <HowItWorks/>
      <DemoPreview/>
      <Benefits/>
      <FAQ/>
      <Footer/>
    </div>
  )
}