"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col items-center space-y-6">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="text-xl font-medium hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
