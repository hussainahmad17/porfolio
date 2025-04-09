"use client"

import { motion } from "framer-motion"
import { getSkillIcon } from "@/lib/icons"

export default function SkillCard({ skill, index }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
      },
    },
  }

  const Icon = getSkillIcon(skill.icon)

  // Different card styles based on category
  const cardStyles = {
    react:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700",
    nextjs:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700",
    frontend:
      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700",
    tools:
      "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700",
  }

  const iconStyles = {
    react: "text-blue-500 dark:text-blue-400",
    nextjs: "text-gray-700 dark:text-gray-300",
    frontend: "text-purple-500 dark:text-purple-400",
    tools: "text-green-500 dark:text-green-400",
  }

  return (
    <motion.div
      variants={item}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={`flex flex-col p-5 rounded-lg border ${cardStyles[skill.category] || cardStyles.frontend} transition-all duration-300 h-full`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`${iconStyles[skill.category] || iconStyles.frontend} w-10 h-10 flex-shrink-0`}>
          <Icon />
        </div>
        <h3 className="font-medium text-lg">{skill.name}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{skill.description}</p>
    </motion.div>
  )
}
