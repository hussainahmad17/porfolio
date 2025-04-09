"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HussainAhmad.jpg-BJN4c1qoekQjlsTeFvHwasJHvkhc32.jpeg"
            alt="Hussain Ahmad"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Hussain Ahmad</h2>
          <h3 className="text-xl text-primary mb-6">Web Developer & Designer</h3>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I am a passionate web developer with expertise in creating modern, responsive, and user-friendly websites
              and applications. With a strong foundation in frontend technologies and a keen eye for design, I strive to
              build digital experiences that are both functional and aesthetically pleasing.
            </p>
            <p>
              My journey in web development began with a curiosity about how websites work, which quickly evolved into a
              passion for creating them. I've since honed my skills in HTML, CSS, JavaScript, and various frameworks and
              libraries such as React and Next.js.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and
              best practices. My goal is to continue growing as a developer and to create meaningful digital solutions
              that solve real-world problems.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <a href="mailto:hussainahmad.dev.17@gmail.com" className="text-primary hover:underline">
                hussainahmad.dev.17@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Location:</span>
              <span className="text-muted-foreground">Faisalabad, Pakistan</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download="Hussain_Ahmad_CV.pdf"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-primary pl-6 pb-8 relative">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-1"></div>
            <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering (BSSE)</h4>
            <p className="text-primary">National Textile University, 2022-2026</p>
            <p className="mt-2 text-muted-foreground">
              Currently pursuing my degree with a focus on web development and software engineering principles.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
