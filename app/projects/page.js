"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "The Clay Collection",
      description: "An e-commerce platform for artisanal clay products with a modern, responsive design.",
      image: "/clay.png?height=600&width=800",
      liveUrl: "https://the-clay-collection-five.vercel.app/",
      sourceUrl: "https://github.com/hussainahmad17/TheClayCollection",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Cloth Collection",
      description: "A fashion e-commerce website with product filtering, cart functionality, and responsive design.",
      image: "/cloth.png?height=600&width=800",
      liveUrl: "https://clothcollection.vercel.app/",
      sourceUrl: "https://github.com/hussainahmad17/clothcollection",
      tags: ["React", "CSS3", "JavaScript"],
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather application that provides real-time weather information for any location.",
      image: "/weather.png?height=600&width=800",
      liveUrl: "https://weather-app-gamma-flax-68.vercel.app/",
      sourceUrl: "https://github.com/hussainahmad17/WeatherApp",
      tags: ["JavaScript", "API", "CSS3"],
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      description: "A classic Tic Tac Toe game with a modern interface and multiplayer functionality.",
      image: "/game.png?height=600&width=800",
      liveUrl: "https://hussainahmad17.github.io/tic_tac_toe/",
      sourceUrl: "https://github.com/hussainahmad17/tic_tac_toe",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning
        experience.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  )
}
