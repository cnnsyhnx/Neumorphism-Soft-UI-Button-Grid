"use client"

import { motion } from "framer-motion"
import {
  Play,
  Pause,
  Download,
  Share,
  Heart,
  Bookmark,
  Send,
  Plus,
  ArrowRight,
  Star,
  Settings,
  User,
} from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [playing, setPlaying] = useState(false)

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 5 },
    tap: { rotate: -5 },
  }

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1.2 },
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-8 flex flex-col items-center justify-center gap-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Framer Button Set</h1>
        <p className="text-zinc-400">Minimalistic animated buttons with dark gray & neon orange</p>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 flex items-center gap-3 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div variants={iconVariants}>
            <Play className="w-5 h-5" />
          </motion.div>
          <span className="font-medium">Get Started</span>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 flex items-center gap-3 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div variants={iconVariants}>
            <Download className="w-5 h-5" />
          </motion.div>
          <span className="font-medium">Download</span>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 flex items-center gap-3 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div variants={iconVariants}>
            <Send className="w-5 h-5" />
          </motion.div>
          <span className="font-medium">Send Message</span>
        </motion.button>
      </div>

      {/* Icon-Only Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => setLiked(!liked)}
          className={`relative group p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
            liked
              ? "bg-orange-500 border-orange-500 text-white"
              : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-orange-500 hover:text-orange-500"
          }`}
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div
            variants={iconVariants}
            animate={liked ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart className={`w-6 h-6 ${liked ? "fill-current" : ""}`} />
          </motion.div>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => setBookmarked(!bookmarked)}
          className={`relative group p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
            bookmarked
              ? "bg-orange-500 border-orange-500 text-white"
              : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-orange-500 hover:text-orange-500"
          }`}
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div
            variants={iconVariants}
            animate={bookmarked ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Bookmark className={`w-6 h-6 ${bookmarked ? "fill-current" : ""}`} />
          </motion.div>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-zinc-400 hover:text-white p-4 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div variants={iconVariants}>
            <Share className="w-6 h-6" />
          </motion.div>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-zinc-400 hover:text-white p-4 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
          <motion.div variants={iconVariants}>
            <Settings className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Floating Action Button */}
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="relative group bg-orange-500 hover:bg-orange-400 text-white p-6 rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden"
      >
        <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-400/30 rounded-full blur-xl" />
        <motion.div variants={iconVariants} whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
          <Plus className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Toggle Button */}
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setPlaying(!playing)}
        className="relative group bg-zinc-800 hover:bg-orange-500 text-white px-8 py-4 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 flex items-center gap-4 overflow-hidden"
      >
        <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
        <motion.div animate={{ rotate: playing ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </motion.div>
        <span className="font-medium text-lg">{playing ? "Pause" : "Play"}</span>
      </motion.button>

      {/* Arrow Button */}
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="relative group bg-zinc-800 hover:bg-orange-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-orange-500 transition-all duration-300 flex items-center gap-3 overflow-hidden"
      >
        <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
        <span className="font-medium">Continue</span>
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Small Buttons */}
      <div className="flex gap-3">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-zinc-400 hover:text-white p-2 rounded-lg border border-zinc-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-lg blur-lg" />
          <Star className="w-4 h-4" />
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative group bg-zinc-800 hover:bg-orange-500 text-zinc-400 hover:text-white p-2 rounded-lg border border-zinc-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
        >
          <motion.div variants={glowVariants} className="absolute inset-0 bg-orange-500/20 rounded-lg blur-lg" />
          <User className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  )
}
