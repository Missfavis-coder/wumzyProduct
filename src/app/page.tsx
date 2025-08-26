import Header from "@/app/components/header";
import HeroSection from "@/app/components/HeroSection"


export default function HomePage() {
  return(
    <div className="h-screen ">
      <div className="max-w-7xl mx-auto">
         <div>
            <div>
              <Header/>
            </div>
            <div className="mt-0">
              <HeroSection/>
            </div>
         </div>
      </div>
    </div>
  )
}