"use client"
import { useRouter } from "next/navigation"


const HeroSection =() => {

    const router = useRouter();

    const handleButton =() =>{
        router.push("/auth/signUp")
    }
    return (
        <div className="flex relative  flex-col items-center px-6 mt-18 lg:mt-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide max-w-3xl ">
                Durable and High Quality Wears
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {""} for Men and Women </span>
                
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex justify-center my-10">
                <button onClick={handleButton}   className="bg-gradient-to-r from-orange-500 cursor-pointer to-orange-800 py-3 px-4 mx-3 rounded-md"> Get Started
                </button>
                <a href="#" className="py-3 px-4 cursor-pointer mx-3 rounded-md border">Documentation</a>
            </div>
            
        </div>
    )
}

export default HeroSection
