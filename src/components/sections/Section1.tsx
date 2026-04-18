"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import srv1 from "@/assets/srv1.jpg"

export const Services1 = () => {
  const [expanded, setExpanded] = useState(false)

  const fullText = `
Assistlyme delivers customer service that is built on consistency, speed, and professionalism.
Every inquiry is handled with urgency and care, ensuring that clients never feel ignored or left waiting.
The focus is not only on answering questions but on making sure customers fully understand the solution being provided.
This creates a support experience that feels personal, reliable, and easy to depend on.
Instead of reacting to problems after they escalate, Assistlyme prioritizes clear communication and proactive assistance
that prevents confusion and builds long term trust. The result is a customer experience that strengthens relationships
and encourages continued partnership.
  `

  const shortText = fullText.slice(0, 180) + "..."

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <Badge>Customer Service</Badge>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Reliable Customer Support Solutions
          </h2>

          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
            {expanded ? fullText : shortText}
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            {expanded ? "See Less" : "See More"}
          </Button>
        </motion.div>

        {/* IMAGE (ONLY WITH EFFECT) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={srv1}
            alt="Service 1"
            className="w-full aspect-4/3 object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </section>
  )
}