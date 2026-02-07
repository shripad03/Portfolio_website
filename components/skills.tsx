"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Globe, Layers, Rocket, Sparkles, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Full-Stack Development",
    icon: Globe,
    skills: ["Angular", "Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "text-cyan-500",
  },
  {
    title: "Rapid MVP & Product",
    icon: Rocket,
    skills: ["0-1 Building", "Product Strategy", "Supabase", "Vercel", "Stripe Integration", "Analytics"],
    color: "text-orange-500",
  },
  {
    title: "Frontend Architecture",
    icon: Layers,
    skills: ["System Design", "Micro-frontends", "Performance Optimization", "Accessibility (a11y)", "Design Systems", "State Management"],
    color: "text-blue-500",
  },
  {
    title: "AI Engineering & LLMs",
    icon: Sparkles,
    skills: ["OpenAI API", "RAG Systems", "LangChain", "Prompt Engineering", "Fine-tuning", "Python"],
    color: "text-purple-500",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-24 bg-muted/40 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 bg-primary/5 text-primary">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            High-Impact Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I combine cutting-edge AI capabilities with robust engineering to build scalable, production-ready solutions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-muted-foreground/10 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`p-2 rounded-lg bg-background/50 border border-muted ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="px-2 py-1 text-sm font-normal bg-secondary/50 hover:bg-secondary transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

