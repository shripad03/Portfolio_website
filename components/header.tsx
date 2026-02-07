"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
          >
            Shreepad Avhad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl font-light leading-relaxed"
          >
            Senior Software & AI Engineer. I architect scalable systems and build high-performance MVPs that drive business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-2 hover:bg-muted/50 transition-all hover:scale-105"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 mt-12"
          >
            <SocialLink href="https://github.com/Shripad03" icon={Github} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/shreepad-avhad/" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/that_marathi_guy/" icon={Instagram} label="Instagram" />
            <SocialLink href="mailto:shripad.avhad@gmail.com" icon={Mail} label="Email" />
          </motion.div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500",
          scrollY > 100 ? "opacity-0" : "opacity-100",
        )}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
    >
      <Icon className="w-6 h-6" />
      <span className="sr-only">{label}</span>
    </a>
  )
}
