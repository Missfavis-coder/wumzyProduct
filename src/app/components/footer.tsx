"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer id="footer" className="bg-neutral-900 text-gray-300 pt-18 pb-12 px-10 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:gap-10 gap-6 md:space-y-2 space-y-10">
        
        {/* Brand / Logo */}
            <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.5 }}
            >
               <h2 className="text-2xl font-bold text-yellow-500">AI Scheduler</h2>
               <p className="mt-3 text-sm text-gray-400 max-w-xs">
                Smart AI-powered system for stress-free lecture room allocation and clash-free timetables.
               </p>
           </motion.div>

           {/* Navigation Links */}
           
           <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.6 }}
               className="flex flex-col space-y-3"
            >
               <h3 className="text-lg font-semibold text-yellow-500">Quick Links</h3>
                    {links.map((link, index) => (
                         <Link key={index} href={link.href} className="hover:text-yellow-400 transition">
                           {link.label}
                        </Link>
                   ))}
           </motion.div>

           {/* Newsletter */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.7 }}
            >
               < h3 className="text-lg font-semibold text-yellow-500">Stay Updated</h3>
                <p className="text-sm text-gray-400 mt-2">Subscribe to our newsletter</p>
                   <form className="mt-4 flex">
                      <input
                       type="email"
                       placeholder="Enter your email"
                       className="px-4 py-2 w-full rounded-l-lg focus:outline-none  border border-neutral-700 text-gray-400"
                       />
                        <button
                         type="submit"
                         className="px-4 py-2 bg-yellow-600 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition cursor-pointer"
                        >
                        Subscribe
                      </button>
                    </form>
             </motion.div>
         </div>

         {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
             © {new Date().getFullYear()} AI Scheduler. All rights reserved.
        </div>
    </footer>
  );
}
