"use client"

import { motion } from "framer-motion"
import {
  Home,
  User,
  Settings,
  Search,
  Heart,
  Star,
  Bell,
  Mail,
  Phone,
  Camera,
  Music,
  Video,
  Download,
  Upload,
  Share,
  Lock,
  Unlock,
  Edit,
  Trash,
  Plus,
  Minus,
  Check,
  X,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  CircleStopIcon as Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  Battery,
  Bluetooth,
  Globe,
  Calendar,
  Clock,
  Map,
  Bookmark,
  Tag,
  Flag,
  Shield,
  Key,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Cloud,
  Zap,
  Umbrella,
  Thermometer,
  Compass,
  Navigation,
  Target,
  Award,
  Gift,
  Coffee,
  Pizza,
  Car,
  Gamepad2,
  Headphones,
} from "lucide-react"
import { useState } from "react"

const icons = [
  Home,
  User,
  Settings,
  Search,
  Heart,
  Star,
  Bell,
  Mail,
  Phone,
  Camera,
  Music,
  Video,
  Download,
  Upload,
  Share,
  Lock,
  Unlock,
  Edit,
  Trash,
  Plus,
  Minus,
  Check,
  X,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  Battery,
  Bluetooth,
  Globe,
  Calendar,
  Clock,
  Map,
  Bookmark,
  Tag,
  Flag,
  Shield,
  Key,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Cloud,
  Zap,
  Umbrella,
  Thermometer,
  Compass,
  Navigation,
  Target,
  Award,
  Gift,
  Coffee,
  Pizza,
  Car,
  Gamepad2,
  Headphones,
]

export default function Component() {
  const [activeButtons, setActiveButtons] = useState<Set<number>>(new Set())

  const toggleButton = (index: number) => {
    const newActive = new Set(activeButtons)
    if (newActive.has(index)) {
      newActive.delete(index)
    } else {
      newActive.add(index)
    }
    setActiveButtons(newActive)
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-8 flex items-center justify-center">
      <div className="grid grid-cols-8 gap-4 p-8 bg-zinc-900 rounded-3xl">
        {icons.map((Icon, index) => {
          const isActive = activeButtons.has(index)

          return (
            <motion.button
              key={index}
              onClick={() => toggleButton(index)}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              className={`
                relative w-16 h-16 rounded-2xl transition-all duration-300 ease-out border-2 border-transparent hover:border-orange-600
                ${
                  isActive
                    ? "shadow-inner-active bg-zinc-800 border-orange-600"
                    : "shadow-neumorphic bg-zinc-900 hover:shadow-neumorphic-hover"
                }
                flex items-center justify-center group
              `}
              style={{
                boxShadow: isActive
                  ? "inset 4px 4px 8px #1a1a1a, inset -4px -4px 8px #2a2a2a"
                  : "6px 6px 12px #0a0a0a, -6px -6px 12px #2a2a2a",
              }}
            >
              <motion.div
                animate={{
                  scale: isActive ? 0.9 : 1,
                  rotateY: isActive ? 180 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Icon
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isActive ? "text-orange-600" : "text-zinc-400 group-hover:text-orange-500"
                  }`}
                />
              </motion.div>

              {/* Subtle glow effect for active state */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-orange-600/10 pointer-events-none"
                />
              )}

              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 0.3, scale: 1.1 }}
                className="absolute inset-0 rounded-2xl bg-orange-500/20 pointer-events-none blur-sm"
              />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
