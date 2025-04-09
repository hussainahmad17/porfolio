"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import SkillCard from "@/components/SkillCard"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const frontendSkills = [
    {
      name: "HTML5",
      icon: "html5",
      category: "frontend",
      description: "Creating structured, semantic markup for web pages with the latest HTML5 features.",
    },
    {
      name: "CSS3",
      icon: "css3",
      category: "frontend",
      description: "Styling web applications with modern CSS3 techniques including flexbox and grid layouts.",
    },
    {
      name: "JavaScript",
      icon: "javascript",
      category: "frontend",
      description: "Building interactive web experiences with vanilla JavaScript and ES6+ features.",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss",
      category: "frontend",
      description: "Rapidly building custom designs with utility-first CSS framework for modern websites.",
    },
  ]

  const reactSkills = [
    {
      name: "JSX & Component Architecture",
      icon: "react",
      category: "react",
      description: "Creating reusable UI components with JSX syntax and organizing component hierarchies.",
    },
    {
      name: "Props, State & Data Flow",
      icon: "react",
      category: "react",
      description: "Managing component data with props and state, implementing unidirectional data flow patterns.",
    },
    {
      name: "React Hooks",
      icon: "react",
      category: "react",
      description: "Using useState, useEffect, useContext, and custom hooks for functional component logic.",
    },
    {
      name: "Lifecycle Management",
      icon: "react",
      category: "react",
      description: "Handling component mounting, updating, and unmounting phases for efficient resource management.",
    },
    {
      name: "Performance Optimization",
      icon: "react",
      category: "react",
      description:
        "Implementing memo, useMemo, useCallback, and React.lazy for optimized rendering and code splitting.",
    },
  ]

  const nextjsSkills = [
    {
      name: "File-Based Routing",
      icon: "nextjs",
      category: "nextjs",
      description: "Creating intuitive page structures using Next.js's file-system based routing approach.",
    },
    {
      name: "Data Fetching (SSG & SSR)",
      icon: "nextjs",
      category: "nextjs",
      description: "Implementing static generation and server-side rendering for optimal content delivery.",
    },
    {
      name: "API Routes",
      icon: "nextjs",
      category: "nextjs",
      description: "Building serverless API endpoints within the Next.js application for backend functionality.",
    },
    {
      name: "Core Optimizations",
      icon: "nextjs",
      category: "nextjs",
      description: "Utilizing image optimization, font optimization, and script loading strategies.",
    },
    {
      name: "Deployment Considerations",
      icon: "nextjs",
      category: "nextjs",
      description: "Configuring and deploying Next.js applications with environment variables and platform specifics.",
    },
  ]

  const toolsSkills = [
    {
      name: "Git",
      icon: "git",
      category: "tools",
      description: "Version control for tracking changes, collaborating with teams, and managing code history.",
    },
    {
      name: "GitHub",
      icon: "github",
      category: "tools",
      description: "Hosting repositories, managing projects, and collaborating with other developers.",
    },
    {
      name: "Vercel",
      icon: "vercel",
      category: "tools",
      description: "Deploying and hosting web applications with continuous integration and preview deployments.",
    },
    {
      name: "VS Code",
      icon: "vscode",
      category: "tools",
      description: "Writing and debugging code efficiently with extensions and integrated terminal.",
    },
  ]

  const allSkills = [...frontendSkills, ...reactSkills, ...nextjsSkills, ...toolsSkills]

  const filteredSkills =
    activeCategory === "all" ? allSkills : allSkills.filter((skill) => skill.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        My Skills
      </motion.h1>

      <motion.p
        className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I've worked with a variety of technologies in the web development world. Here are the main skills and tools I
        use to bring ideas to life.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 mb-12 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          All Skills
        </button>
        <button
          onClick={() => setActiveCategory("frontend")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "frontend"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveCategory("react")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "react"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          React.js
        </button>
        <button
          onClick={() => setActiveCategory("nextjs")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "nextjs"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          Next.js
        </button>
        <button
          onClick={() => setActiveCategory("tools")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "tools"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          Tools
        </button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
        key={activeCategory} // This forces re-animation when category changes
      >
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="bg-secondary/50 rounded-lg p-8 mt-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">My Learning Journey</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          I'm constantly learning and expanding my skill set. Here are some technologies I'm currently exploring:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["TypeScript", "Three.js", "Node.js", "Express", "MongoDB", "GraphQL"].map((skill, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-background rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
