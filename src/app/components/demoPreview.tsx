"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type ClassItem = {
  id: number;
  name: string;
  size: number;
};

const initialClasses: ClassItem[] = [
  { id: 1, name: "CSC 301", size: 120 },
  { id: 2, name: "MTH 201", size: 3609 },
  { id: 3, name: "PHY 101", size: 150 },
];

export default function DemoPreview() {
  const [scheduled, setScheduled] = useState<ClassItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSchedule = (course: ClassItem) => {
    // Simple "AI" mock: assign room based on size
    if (scheduled.some((cls) => cls.name.startsWith(course.name))) {
        setError(`${course.name} has already been allocated!`);
        return;
      }
  
    const room =
      course.size <= 120 ? "HSLT C" : course.size > 3600 ? "Seminar Room A" : "1k Seaters";

    setScheduled([...scheduled, { ...course, id: Date.now(), name: `${course.name} → ${room}` }]);
  };

  return (
    <section className="py-20 mt-20 bg-gray-50 text-neutral-800 ">
      <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left side text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Scheduling in Action
          </h2>
          <p className="text-lg mb-6">
            Watch how AI instantly allocates lecture rooms based on class size and availability.
          </p>
          <ul className="space-y-3">
            {initialClasses.map((course) => (
              <li key={course.id}>
                <button
                  onClick={() => handleSchedule(course)}
                  className="px-4 py-2 bg-white shadow-xl rounded-lg hover:bg-white/30 cursor-pointer transition-all hover:scale-105"
                >
                  Allocate {course.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side mock calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 min-h-[300px]"
        >
          <h3 className="font-semibold text-xl mb-4">AI-Scheduled Classes</h3>
          {error && (
            <p className="mb-4 text-red-600 font-medium">{error}</p>
          )}

          <div className="space-y-3">
            {scheduled.length === 0 ? (
              <p className="text-gray-500 italic">No classes allocated yet.</p>
            ) : (
              scheduled.map((cls) => (
                <div
                  key={cls.id}
                  className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-neutral-600 text-white shadow-md"
                >
                  {cls.name}
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
