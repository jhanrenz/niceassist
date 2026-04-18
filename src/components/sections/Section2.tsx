"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import srv2 from "@/assets/srv2.jpg"

export const Services2 = () => {
  const [expanded, setExpanded] = useState(false)

  const fullText = `
Assistlyme technical support is designed to ensure stability and reliability for every client.
When issues arise, they are handled quickly and with a high level of technical understanding.
The team focuses on identifying the root cause of problems instead of applying temporary fixes.
This approach minimizes repeat issues and improves overall system performance.
Clients benefit from reduced downtime and more dependable operations.
The support process is structured to be clear, efficient, and solution oriented so that businesses
can continue running without unnecessary disruption.
  `

  const shortText = fullText.slice(0, 180) + "..."

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl shadow-md order-2 md:order-1"
        >
          <img
            src={srv2}
            alt="Service 2"
            className="w-full aspect-4/3 object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 order-1 md:order-2"
        >
          <Badge>Technical Support</Badge>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Fast and Reliable Technical Assistance
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

      </div>
    </section>
  )
}