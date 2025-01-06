'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Twitter, Instagram, Youtube, Search } from 'lucide-react'
import Logo from "@/public/avlogo.webp"
import HeroImage from "@/public/DC21EBF5-E354-4F09-8D06-59E813BE927E-1395-00000035C4088B25.webp"

const primaryNavItems = [
  { href: "/", text: "Home" },
  { href: "/collections/all", text: "All Products" },
  { href: "/collections/summer-23", text: "Summer 23 Collection" },
  { href: "/pages/faq", text: "FAQ" },
]

const secondaryNavItems = [
  { href: "/account/login", text: "Log in" },
  { href: "/account/register", text: "Create account" },
  { href: "/policies/refund-policy", text: "Refund Policy" },
  { href: "/policies/terms-of-service", text: "Terms of Service" },
  { href: "/policies/privacy-policy", text: "Privacy Policy" },
  { href: "/pages/contact-us", text: "Contact Us" },
  { href: "/policies/legal-notice", text: "Imprint" },
  { href: "https://discord.com/invite/waveaut", text: "Discord Server Invite", external: true },
]

const socialLinks = [
  { href: "https://twitter.com/waveAUT", icon: Twitter, title: "Wave Esports on Twitter" },
  { href: "https://www.instagram.com/waveaut/", icon: Instagram, title: "Wave Esports on Instagram" },
  { href: "https://www.youtube.com/channel/UC9gIqZwNLw0XEb77sS_Klxg", icon: Youtube, title: "Wave Esports on YouTube" },
]

const HeroWithNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

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
                  alt="Wave LOGO"
                  width={140}
                  height={60}
                />
              </Link>
            </div>

            {/* Cart Icon (top right) */}
            <Link href="/cart" className="btn btn--clear btn--square btn--hover-scale site-header__cart ajax-cart__toggle" aria-expanded="false">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-header-bag w-6 h-6 text-white" viewBox="0 0 27.2 27">
                <path fill="currentColor" d="M19.6 9c-.2-5.1-2.7-9-6-9s-5.8 3.9-6 9h-4v18h20V9h-4zm-6-7c2.1 0 3.8 3.2 4 7h-8c.2-3.8 1.9-7 4-7zm-8 23V11h11v14h-11zm16 0h-3V11h3v14z"></path>
              </svg>
              <span className="sr-only">View cart</span>
            </Link>
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

                <motion.div
                  className="navigation__social-sharing mt-8"
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

                {/* Search */}
                <motion.div
                  className="navigation__search mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (primaryNavItems.length + secondaryNavItems.length + 1) * 0.1 }}
                >
                  <form action="/search" method="get" role="search" className="flex">
                    <div className="input-group--underline flex-grow">
                      <input
                        className="input-group__field w-full bg-transparent border-b border-white text-white px-2 py-1"
                        type="search"
                        name="q"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div className="input-group__btn">
                      <button type="submit" className="btn btn--clear btn--square text-white">
                        <Search size={24} />
                        <span className="sr-only">Search again</span>
                      </button>
                    </div>
                  </form>
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
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">AVENTIX</h2>
            <Link href="/collections/wave-x-syrup" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition inline-block">
              Explore
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroWithNav
