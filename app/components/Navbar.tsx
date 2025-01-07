'use client'

import { useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import Logo from "@/public/av/Komp_1_116.webp"

const primaryNavItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About us" },
  { href: "/sign-in", text: "Log in" }
]

const secondaryNavItems = [
  { href: "https://discord.gg/rfNvsgf9mv", text: "Discord Server Invite", external: true },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Menu Button (top left) */}
          <button
            onClick={toggleMenu}
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>

          {/* Logo (centered) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="relative">
              <Image
                src={Logo}
                alt="AV logo"
                width={140}
                height={60}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 overflow-y-auto flex flex-col items-center justify-center py-8 px-6"
          >
            <div className="navigation__container text-center w-full">
              <ul className="navigation__links space-y-4">
                {primaryNavItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="navigation__link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white text-2xl hover:text-opacity-60 hover:underline underline-offset-2 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <ul className="navigation__links mt-8 space-y-4">
                {secondaryNavItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="navigation__link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (primaryNavItems.length + index) * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white text-lg hover:text-opacity-60 transition"
                      onClick={() => setIsMenuOpen(false)}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar