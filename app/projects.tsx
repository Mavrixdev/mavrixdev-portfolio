"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaCodeBranch, FaGithub, FaStar } from "react-icons/fa"
import { getRepos } from "../utils/github"

interface Repo {
  name: string;
  html_url: string;
  description?: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    getRepos("mavrixdev").then(setRepos)
  }, [])

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects 🚀</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {repos.map((repo: any, i: number) => (
          <motion.a
            href={repo.html_url}
            key={repo.id}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-primary/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {repo.description || "No description provided."}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch className="text-green-400" /> {repo.forks_count}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <FaGithub className="text-2xl text-white opacity-80 hover:opacity-100" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
