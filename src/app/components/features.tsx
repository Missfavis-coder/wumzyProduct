"use client"
import { CalendarCheck, Brain, Clock, Users } from "lucide-react"; 
import { motion } from "framer-motion";
function Features() {
    const features = [
        {
          title: "AI Room Allocation",
          description: "Automatically assigns classrooms based on class size, availability, and department needs.",
          icon: Brain,
        },
        {
          title: "Smart Scheduling",
          description: "Avoids clashes and ensures optimal use of time slots and resources.",
          icon: Clock,
        },
        {
          title: "Conflict-Free Timetables",
          description: "Ensures no student or lecturer has overlapping schedules.",
          icon: CalendarCheck,
        },
        {
          title: "Collaboration-Friendly",
          description: "Easy access for admins, lecturers, and students in real time.",
          icon: Users,
        },
      ];
    return (
        <section
         id="features"
         className="py-24 md:px-8 mx-auto md:mt-24 mt-[50px] bg-neutral-800 text-yellow-600 ">
            <div className="max-w-7xl mx-auto sm:px-4 px-8 w-full">
                <div className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-yellow-700 to-yellow-300 text-transparent bg-clip-text">Our Features</div>

                <motion.div
                 initial={{opacity:0, y:30}}
                 whileInView={{opacity:1, y:0}}
                 transition={{duration: 0.6}}
                 className="mt-10 text-lg  text-gray-400 max-w-xl"
                 >Explore our application of AI-powered tools designed to bring  about stress free activities
                </motion.div>
                <div className="mt-18">
                    <div className="flex justify-center items-center">
                    <div className="grid md:space-x-20  space-y-14 sm:grid-cols-2 ">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return(
                                <motion.div
                                   initial={{opacity:0, y:30}}
                                   whileInView={{opacity:1, y:0}}
                                   transition={{duration: 0.6, delay: index * 0.2}}
                                   key={index}
                                   >
                                    <div className="flex items-center  justify-center bg-yellow-800/20 backdrop-blur-3xl w-[40px] px-2 py-1 rounded-md">
                                        <Icon className="w-7 h-7 text-neutral-900"/>
                                    </div>
                                    <motion.div
                                    initial={{opacity:0, y:30}}
                                    whileInView={{opacity:1, y:0}}
                                    transition={{duration: 0.6, delay: index * 0.2}}
                                    key={index}
                                     className="font-bold md:text-xl text-[18px] py-4 ">{feature.title}</motion.div>
                                    <div className="md:max-w-[20rem] max-w-[22rem] text-[14px] md:text-[16px]">{feature.description}</div>
                                </motion.div>
                            )
                        })}
                    </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
