"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold gradient-text">404</h1>
        <h2 className="text-3xl font-bold mt-6 mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <Home className="h-5 w-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
