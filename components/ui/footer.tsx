"use client"

import { motion } from "motion/react"
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // 🎯 EASILY CHANGE ICONS HERE!
  // Just replace Github, Twitter, Linkedin, Mail with any Lucide React icons
  // Available icons: https://lucide.dev/icons/
  // Examples: Instagram, Facebook, Youtube, Dribbble, Behance, etc.
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ]

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="relative border-t border-white/10 bg-black">
      {/* Grid background to match the rest of the site */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white"
            >
              RusalDev
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-neutral-300"
            >
              Building amazing digital experiences with passion and creativity.
            </motion.p>

            {/* Text Hover Effect for RDEV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-20 w-full"
            >
              <TextHoverEffect text="RDEV" duration={0.3} />
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold text-white"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              {footerLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-semibold text-white"
            >
              Connect
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 transition-all hover:bg-white hover:text-black"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="flex items-center text-sm text-neutral-300">
            Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> by Rusal Perera
          </p>
          <p className="mt-2 text-sm text-neutral-300 sm:mt-0">© {currentYear} RusalDev. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
