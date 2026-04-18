"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import srv5 from "@/assets/srv5.jpg"

export const Services5 = () => {
  const [expanded, setExpanded] = useState(false)

  const fullText = `
Assistlyme coworking space provides a structured environment where productivity and collaboration can thrive.
It is designed to support focus-driven work while also encouraging interaction among professionals from different industries.

The space offers a balance of privacy and community, allowing individuals and teams to work efficiently without the distractions of home
or the limitations of traditional office setups.

It creates an atmosphere where ideas can develop naturally and where businesses can grow through both concentration and connection.
  `

  const shortText = fullText.slice(0, 180) + "..."

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div className="space-y-5">
          <Badge>Co-Working Space</Badge>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Collaborative Work Environment
          </h2>

          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
            {expanded ? fullText : shortText}
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            {expanded ? "See Less" : "See More"}
          </Button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={srv5}
            alt="Service 5"
            className="w-full aspect-4/3 object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </section>
  )
}