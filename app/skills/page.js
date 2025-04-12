"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import SkillCard from "@/components/SkillCard"
import Image from "next/image"

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
      name: "v0.dev",
      icon: "v0",
      category: "tools",
      description: "AI-powered design tool for rapidly prototyping and generating UI components.",
    },
    {
      name: "bolt.new",
      icon: "bolt",
      category: "tools",
      description: "Quick web app creation tool for building and deploying full-stack applications.",
    },
    {
      name: "GitHub",
      icon: "github",
      category: "tools",
      description: "Hosting repositories, managing projects, and collaborating with other developers.",
    },
    {
      name: "VS Code",
      icon: "vscode",
      category: "tools",
      description: "Writing and debugging code efficiently with extensions and integrated terminal.",
    },
    {
      name: "Cursor IDE",
      icon: "cursor",
      category: "tools",
      description: "AI-enhanced code editor for faster development and intelligent code suggestions.",
    },
    {
      name: "Vercel",
      icon: "vercel",
      category: "tools",
      description: "Deploying and hosting web applications with continuous integration and preview deployments.",
    },
    {
      name: "Git",
      icon: "git",
      category: "tools",
      description: "Version control for tracking changes, collaborating with teams, and managing code history.",
    },
  ]

  const backendSkills = [
    {
      name: "Next.js (Backend)",
      icon: "nextjs",
      category: "backend",
      description: "Leveraging Next.js for full-stack development with API routes and server components.",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
      category: "backend",
      description: "NoSQL database for storing and retrieving data with flexible document schemas.",
    },
    {
      name: "OAuth",
      icon: "oauth",
      category: "backend",
      description: "Implementing secure authentication flows for user login and authorization.",
    },
    {
      name: "Supabase",
      icon: "supabase",
      category: "backend",
      description: "Open source Firebase alternative with authentication, database, and storage solutions.",
    },
  ]

  const allSkills = [...frontendSkills, ...reactSkills, ...nextjsSkills, ...toolsSkills, ...backendSkills]

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
          onClick={() => setActiveCategory("backend")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "backend"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          Backend
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

      {/* Tools Section */}
      {(activeCategory === "all" || activeCategory === "tools") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">TOOLS</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">v0.dev</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">bolt.new</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">GitHub</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">VS Code</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Cursor IDE</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Vercel</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {toolsSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-border rounded-lg overflow-hidden">
              <Image
                src="https://sjc.microlink.io/TPcG3OwKlSO50XHsahQspilnt5zDsuYhAWTLbC9K8Swhn6vvw_Lp073ajZgcHXBYB2F6nE4GpCmpRwd6FknOwA.jpeg"
                alt="v0.dev interface"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">v0.dev - AI-powered UI generation</h3>
              </div>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <Image
                src="https://sjc.microlink.io/yhsYPwQJU_SvsoaCaja_cYKPPQSw_xX23oMjAMEdkLcLU0zKcY8cMvYwcdBo1JJZshFVQzyoyHFJ3k5jgIsnPA.jpeg"
                alt="bolt.new interface"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">bolt.new - Quick web app creation</h3>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Backend Technologies Section */}
      {(activeCategory === "all" || activeCategory === "backend") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">BACKEND TECHNOLOGIES</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">NEXT.JS</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">MONGODB</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">OAUTH</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">SUPABASE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Other Skills */}
      {activeCategory !== "tools" && activeCategory !== "backend" && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeCategory} // This forces re-animation when category changes
        >
          {filteredSkills
            .filter((skill) => skill.category !== "tools" && skill.category !== "backend")
            .map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
        </motion.div>
      )}

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
          {["TypeScript", "Three.js", "Node.js", "Express", "GraphQL"].map((skill, index) => (
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
