"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Credit Rewards Optimizer",
    description: "Intelligent financial assistant that uses machine learning to analyze spending patterns and recommend optimal credit card strategies for maximum rewards.",
    image: "/cc-reward-banner.png",
    tags: ["Next.js 14", "OpenAI API", "TypeScript", "Tailwind"],
    category: "ai",
    github: "https://github.com/Shripad03/CC-Reward-Optimizer",
    demo: "https://cc-rewardz-app.vercel.app/",
  },
  {
    id: 2,
    title: "WineConnect Platform",
    description: "B2B marketplace connecting global wine importers and exporters. Features real-time analytics, inventory management, and secure trade facilitation.",
    image: "/wineconnect.png",
    tags: ["React", "Supabase", "Chart.js", "Radix UI"],
    category: "web",
    github: "https://github.com/Shripad03/wineconnect-pro",
    demo: "https://wineconnect-5waezzex9-shreepad-avhads-projects.vercel.app/"
  },
  {
    id: 3,
    title: "IoT Smart Parking System",
    description: "Real-time IoT solution for urban parking management using ESP32 microcontrollers and a cloud-based dashboard for live occupancy tracking.",
    image: "/parkease.png",
    tags: ["IoT", "ESP32", "Firebase", "React"],
    category: "iot",
    github: "#",
    demo: "https://easypark1.vercel.app/",
  }
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & ML" },
  { id: "web", label: "Web Apps" },
  { id: "iot", label: "IoT" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects demonstrating my expertise in AI engineering, full-stack development, and IoT solutions.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-muted/50 rounded-full backdrop-blur-sm border border-border">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "secondary" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 transition-all duration-300 ${activeCategory === category.id ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted'}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group border-muted-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">View Demo</a>
                      </Button>
                    </div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      {project.category === 'ai' && <Badge variant="outline" className="border-purple-500/50 text-purple-500">AI</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 flex-grow">
                    <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/50 font-normal text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gap-2" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

