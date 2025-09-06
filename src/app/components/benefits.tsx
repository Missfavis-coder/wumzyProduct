"use client";
import { motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";
const benefits=[
{
    title: "Clash-Free Scheduling",
    description: "Our AI ensures no two classes overlap, saving time for both lecturers and students.",
    stat: "95%",
    image: "/images/no-clash.png", // put your own illustration
  },
  {
    title: "Time-Saving Automation",
    description: "Generate optimized timetables in minutes instead of weeks of manual work.",
    stat: "10x",
    image: "/images/automation.png",
  },
  {
    title: "Scalable & Flexible",
    description: "Handles thousands of students and hundreds of courses with ease.",
    stat: "100k+",
    image: "/images/scalable.png",
  },
];
function Benefits() {

    return (
        <section className="py-8 md:px-4 md:mt-24 my-[90px]">
            <div className="max-w-7xl mx-auto sm:px-4 px-10">
               <div className="flex gap-4 items-center justify-center">
                  <div>🏆 AI-Powered</div>
                  <div>⚡ Fast</div>
                  <div>🔒 Secure</div>
               </div>
               <div className="mt-12">
                <div>
                  <motion.h2
                  initial = {{opacity: 0, y: -20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration: 0.6}}
                  className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-yellow-700 to-yellow-300 text-transparent bg-clip-text "
                >
                    Why Choose Our System.
                  </motion.h2>

                  <motion.p
                   initial = {{opacity: 0, x: -20}}
                   whileInView={{opacity:1, x:0}}
                   transition={{duration: 0.6}}
                   className=" text-lg mt-12 text-gray-600 max-w-xl">
                      Save time, reduce conflicts,<br className="md:hidden flex"/> and ensure optimal use of lecture rooms with AI-powered scheduling.
                  </motion.p>
                </div>
                  <div>
                    <div className="grid gap-8 md:grid-cols-3 mt-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{opacity:0, y:30}}
                              whileInView={{opacity:1, y:0}}
                              transition={{duration: 0.6, delay: index * 0.2}}
                              className="border border-yellow-600 rounded-lg py-2 px-4"
                            >
                                <div className="p-6 flex flex-col items-center text-center">
                                  <motion.div
                                     initial={{ scale: 0.8 }}
                                     whileInView={{ scale: 1 }}
                                     transition={{ type: "spring", stiffness: 200 }}
                                     className="text-4xl font-extrabold text-yellow-600"
                                  >
                                      {benefit.stat}
                                  </motion.div>
                                    <h3 className="mt-3 text-xl font-semibold text-gray-900">
                                      {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2 md:max-w-[20rem] max-w-[22rem] text-[14px] md:text-[16px]">{benefit.description}</p>
                                </div>                           
                           </motion.div>
                        ))}
                    </div>
                  </div>
                  <motion.div
                  initial = {{opacity: 0, y: 20}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration: 0.6}} 
                  className="flex items-center justify-center ">
                       <button className="flex items-center mt-24  justify-center gap-2 cursor-pointer bg-neutral-800 text-white rounded-md px-12 py-2 transition-all hover:scale-105">
                          <p>Get started</p>
                          <ArrowBigRight />
                        </button>
                  </motion.div>
               </div>
            </div>
        </section>
    )
}

export default Benefits
