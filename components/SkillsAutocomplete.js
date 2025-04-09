"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import Link from "next/link"

export default function SkillsAutocomplete() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)

  const skills = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Vercel", category: "Deployment" },
    { name: "Figma", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "VS Code", category: "Tools" },
    { name: "EJS", category: "Frontend" },
    { name: "GitHub Pages", category: "Deployment" },
  ]

  useEffect(() => {
    if (query.length > 0) {
      const filtered = skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(query.toLowerCase()) ||
          skill.category.toLowerCase().includes(query.toLowerCase()),
      )
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [query])

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="max-w-md mx-auto relative" ref={inputRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a skill..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          onFocus={() => query.length > 0 && setIsOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full bg-background border border-border rounded-lg shadow-lg overflow-hidden"
          >
            <ul className="py-2 max-h-60 overflow-y-auto">
              {suggestions.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 hover:bg-secondary cursor-pointer"
                  onClick={() => {
                    setQuery(skill.name)
                    setIsOpen(false)
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span>{skill.name}</span>
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="p-2 border-t">
              <Link href="/skills" className="block text-center text-sm text-primary hover:underline">
                View all skills
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
