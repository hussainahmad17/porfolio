"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Code, FileCode, Layout, Zap, Users, CheckCircle } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="text-lg md:text-xl text-primary font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hussain Ahmad
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            FRONTEND WEB DEVELOPER
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I build modern, responsive web applications with a focus on user experience and clean code. Transforming
            ideas into exceptional digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors text-center"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HussainAhmad.jpg-BJN4c1qoekQjlsTeFvHwasJHvkhc32.jpeg"
                alt="Hussain Ahmad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="mt-24 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Hire Me?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Clean Code</h3>
            <p className="text-muted-foreground">
              I write clean, maintainable, and efficient code following best practices and industry standards.
            </p>
          </motion.div>

          <motion.div
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Layout className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              All my projects are fully responsive, ensuring a seamless experience across all devices and screen sizes.
            </p>
          </motion.div>

          <motion.div
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <p className="text-muted-foreground">
              I optimize websites for speed and performance, ensuring fast load times and smooth user experiences.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-secondary/30 rounded-xl px-8 my-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Development Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Discovery</h3>
            <p className="text-muted-foreground text-sm">Understanding your needs, goals, and target audience</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <FileCode className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Planning</h3>
            <p className="text-muted-foreground text-sm">
              Creating wireframes, selecting technologies, and planning architecture
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Development</h3>
            <p className="text-muted-foreground text-sm">Writing clean, efficient code and building the application</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 relative">
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Delivery</h3>
            <p className="text-muted-foreground text-sm">Testing, optimization, and launching your project</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to work together?</h2>
        <p className="text-muted-foreground mb-8">
          I'm currently available for freelance work and open to new opportunities. If you have a project that needs
          some creative touch, I'd love to hear about it.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-center inline-block"
        >
          Let's Talk
        </Link>
      </motion.section>
    </div>
  )
}
