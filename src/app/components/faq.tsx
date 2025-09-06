"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is an AI-powered lecture scheduling system?",
    answer:
      "It’s a smart platform that automatically allocates lecture halls and creates clash-free timetables using AI algorithms.",
  },
  {
    question: "Can lecturers and students access it easily?",
    answer:
      "Yes. Both lecturers and students get secure logins to view, download, and share their schedules instantly.",
  },
  {
    question: "How does the AI decide room allocation?",
    answer:
      "The system analyzes course size, lecturer availability, and room capacity to assign the most suitable lecture hall.",
  },
  {
    question: "Can we export the timetable?",
    answer:
      "Absolutely. The timetable can be exported in PDF, Excel, or shared online with one click.",
  },
  {
    question: "Does it support multiple campuses?",
    answer:
      "Yes. It scales to handle multiple faculties, campuses, and thousands of students at once.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Frequently Asked Questions
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
                Everything you need to know about our AI scheduling system.
            </p>

        {/* FAQ List */}
            <div className="space-y-6">
                 {faqs.map((faq, index) => (
                    <motion.div
                     initial = {{opacity: 0, y: -20}}
                     whileInView={{opacity:1, y:0}}
                     transition={{duration: 0.4, delay: index * 0.2}} 
                     key={index}
                     className="bg-white px-6 py-4 pb-4 rounded-lg cursor-pointer space-y-4"
                     onClick={() => toggleFAQ(index)}
                     >
                     {/* Question */}
                        <div className="flex justify-between items-center">
                           <h3 className="text-lg md:text-xl font-semibold">
                              {faq.question}
                            </h3>
                            <span className="text-2xl font-bold text-yellow-600">
                              { openIndex === index ? <X/> : <Plus/>}
                             </span>
                        </div>

                     {/* Answer */}
                        <AnimatePresence>
                             {openIndex === index && (
                           <motion.div
                           key="content"
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: "auto" }}
                           exit={{ opacity: 0, height: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                          >
                               <p className="my-4 text-gray-700">{faq.answer}</p>
                           </motion.div>
                           )}
                          </AnimatePresence>
                   </motion.div>
               ))}
            </div>

            <div className="mt-18 flex flex-col justify-center items-center">
                <motion.p 
                initial = {{opacity: 0, x: 20}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 0.4}}
                className="mb-2"
                >
                    Perhaps you have questions for us.
                </motion.p>
                <button className="flex items-center transition-all hover:scale-105   justify-center gap-2 cursor-pointer bg-neutral-800 text-white rounded-md px-12 py-2">Contact Us</button>
            </div>
      </div>
    </section>
  );
}
