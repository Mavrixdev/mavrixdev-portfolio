"use client"
import { motion } from "framer-motion"
import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa"
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"

const skills = [
  { name: "React", level: 30, icon: <FaReact size={32} className="text-sky-500" /> },
  { name: "Next.js", level: 50, icon: <SiNextdotjs size={32} /> },
  { name: "Tailwind", level: 45, icon: <SiTailwindcss size={32} className="text-cyan-400" /> },
  { name: "TypeScript", level: 70, icon: <SiTypescript size={32} className="text-blue-600" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs size={32} className="text-green-600" /> },
  { name: "MongoDB", level: 55, icon: <SiMongodb size={32} className="text-green-500" /> },
  { name: "Docker", level: 20, icon: <FaDocker size={32} className="text-sky-600" /> },
  { name: "Git", level: 85, icon: <FaGitAlt size={32} className="text-orange-500" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Skills ⚡</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              {skill.icon}
              <span className="font-medium">{skill.name}</span>
              <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-gradient-to-r from-primary to-primary/70"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
