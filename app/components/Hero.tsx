'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Twitter, Instagram, Youtube } from 'lucide-react'
import Logo from "@/public/av/Komp_1_116.webp"
import HeroImage from "@/public/wmremove-transformed.webp"

const getOnlineUsers = async () => {
  // Replace this with your API fetch logic
  return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
}

const primaryNavItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About us" },
  { href: "/sign-in", text: "Log in"}
]

const secondaryNavItems = [
  { href: "https://discord.gg/rfNvsgf9mv", text: "Discord Server Invite", external: true },
]

const socialLinks = [
  { href: "https://x.com/aventix_esport", icon: Twitter, title: "Aventix Esports on Twitter" },
  { href: "https://www.instagram.com/aventix_esport", icon: Instagram, title: "Aventix Esports on Instagram" },
  { href: "https://www.youtube.com/@AventixeSports-v1i", icon: Youtube, title: "Aventix Esports on YouTube" },
]

const HeroWithNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState(0) // State for online users

  useEffect(() => {
    setMounted(true)
    const fetchOnlineUsers = async () => {
      const count = await getOnlineUsers()
      setOnlineUsers(count)
    }
    fetchOnlineUsers()

    // Optionally, poll every few seconds to update the count
    const interval = setInterval(fetchOnlineUsers, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Image */}
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10"></div>

            {/* Hero Image */}
            <Image
              src={HeroImage}
              alt="WAVE X SYRUP DROP RESTOCK"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
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
             {/* Online Users (top right) */}
             <div className="absolute top-0 right-0 p-4">
              <span className="text-white text-sm bg-black bg-opacity-60 px-3 py-1 rounded-lg">
                {onlineUsers} online
              </span>
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
                {/* Menu Button (top left) */}
<button
  onClick={toggleMenu}
  className={`fixed top-4 left-20 z-40 border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg ${
    isMenuOpen ? 'bg-black' : ''
  }`}
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
>
  {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
</button>
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

                <motion.div
                  className="navigation__social-sharing mt-8 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (primaryNavItems.length + secondaryNavItems.length) * 0.1 }}
                >
                  <ul className="list--inline flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          target="_blank"
                          href={link.href}
                          title={link.title}
                          rel="noopener noreferrer"
                          className="text-white hover:text-opacity-60 transition"
                        >
                          <link.icon size={24} />
                          <span className="sr-only">{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Text */}
      <AnimatePresence>
        {mounted && !isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-1/4 left-0 right-0 z-20 text-center px-6"
          >
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">AVENTIX eSports</h2>
            <Link href="https://discord.gg/rfNvsgf9mv" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition inline-block">
              Join the discord
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroWithNav
