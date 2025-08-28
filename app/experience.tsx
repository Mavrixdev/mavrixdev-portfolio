"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Build responsive websites with Next.js, Tailwind CSS, and framer-motion. Focus on animations and modern UI/UX.",
  },
  {
    role: "Intern",
    company: "Tech Startup",
    period: "2022 - 2023",
    description:
      "Worked on small projects using React and Node.js, learned about team workflow and Git collaboration.",
  },
  {
    role: "Student",
    company: "Self-learning",
    period: "2020 - 2022",
    description:
      "Started with HTML, CSS, JS basics. Explored programming and discovered passion for web development.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 lg:px-20" id="experience">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience 💼
      </motion.h2>

      <div className="relative border-l-4 border-pink-500 dark:border-purple-500 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Circle marker */}
            <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 ring-4 ring-white dark:ring-gray-900">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-4.707-4.707a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {exp.company} • {exp.period}
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
