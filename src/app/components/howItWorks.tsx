"use client"
import { Search, CheckCircle, CalendarRange, ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";
function HowItWorks() {
    const steps = [
        {
          title: " Input Class Data",
          description: "Admins upload course details, lecturer info, and available rooms into the system.",
          icon: Search,
          step: "STEP 1"
        },
        {
          title: " AI Allocation",
          description: "The AI engine processes the data and assigns rooms & schedules intelligently.",
          icon: CheckCircle,
          step: "STEP 2"
        },
        {
          title: " View & Export Your Timetable",
          description: "Students and lecturers download, share or receive clash-free timetables instantly.",
          icon: CalendarRange,
          step: "STEP 3"
        },
      ];
    return (
        <div className="py-20 md:mt-24 mt-[80px]">
             <div className="max-w-7xl mx-auto sm:px-4 px-8">
                <div className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-yellow-700 to-yellow-300 text-transparent bg-clip-text">How It Works</div>
                <div className="mt-10 text-lg text-gray-600 max-w-xl md:max-w-xl " >Our AI-powered system simplifies lecture scheduling into three easy steps. </div>

                <div className="flex justify-center ">
                <div className="grid space-y-12 gap-6 lg:grid-cols-3 mt-18  ">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div 
                                initial={{opacity:0, x:30}}
                                whileInView={{opacity:1, x:0}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                                className="flex flex-col justify-between md:max-h-[24rem] h-[22rem] max-w-[30rem] lg:max-w-[25rem] px-8 py-6 bg-gray-100 rounded-lg" key={index}>
                                    <div className="flex justify-end text-2xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 text-transparent bg-clip-text">{step.step}</div>
                                    <div className="flex gap-2 items-center mb-5">
                                        <div className="flex items-center  justify-center bg-yellow-800/30 backdrop-blur-3xl max-w-[40px] h-[40px] px-2 py-1 rounded-md">
                                           <Icon className=" text-neutral-900"/>
                                        </div>
                                        <div className="font-bold md:text-xl text-[18px]  ">{step.title}</div>
                                    </div>
                                    <div className="max-w-[20rem] text-[16px] md:text-[16px]">{step.description}</div>
                                    <button className=" mt-8 font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 px-8 py-2 text-yellow-600 rounded-3xl cursor-pointer transition-all hover:scale-105">Get Started</button>
                                </motion.div>
                            )
                        })}
                    
                </div>
                </div>
                <motion.div
                  initial = {{opacity: 0, y: 20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration: 0.6}} 
                  className="flex items-center justify-center ">
                       <button className="flex items-center mt-24  justify-center gap-2 bg-neutral-800 text-white rounded-md px-12 py-2 cursor-pointer transition-all hover:scale-105">
                          <p>Get started</p>
                          <ArrowBigRight />
                        </button>
                  </motion.div>

             </div>
        </div>
    )
}

export default HowItWorks
