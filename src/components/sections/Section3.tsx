"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import srv3 from "@/assets/srv3.jpg"

export const Services3 = () => {
  const [expanded, setExpanded] = useState(false)

  const fullText = `
The sales approach at Assistlyme is centered on understanding rather than pressure.
Instead of pushing for quick transactions, the team takes time to learn what each client actually needs
and aligns solutions accordingly. Conversations are structured to identify real business challenges
and offer practical answers that make sense for the customer’s situation.

This method creates stronger conversions because clients feel understood rather than sold to.
It also builds lasting relationships that extend beyond a single transaction.
The goal is not only to close deals but to create value that supports the customer’s growth over time.
  `

  const shortText = fullText.slice(0, 180) + "..."

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div className="space-y-5">
          <Badge>Sales & Leads</Badge>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Boost Your Sales Performance
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
            src={srv3}
            alt="Service 3"
            className="w-full aspect-4/3 object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

      </div>
    </section>
  )
}