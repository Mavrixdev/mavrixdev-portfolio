"use client"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

interface ProjectProps {
  name: string
  description: string
  url: string
}

export default function ProjectCard3D({ name, description, url }: ProjectProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl border border-border bg-card p-6 shadow-md hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{name}</h3>
        <Github className="w-6 h-6" />
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    </motion.a>
  )
}
// utils/github.ts