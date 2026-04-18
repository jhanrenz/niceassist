"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import srv4 from "@/assets/srv4.jpg"

export const Services4 = () => {
  const [expanded, setExpanded] = useState(false)

  const fullText = `
The virtual office service at Assistlyme allows businesses to operate with a professional presence without the cost of maintaining a physical space.
Clients gain access to a credible business address along with administrative support that helps manage day to day operational needs.

This setup is ideal for startups, remote teams, and growing businesses that want to appear established while maintaining flexibility.
It bridges the gap between professionalism and affordability, giving companies the tools they need to build trust with their customers
while keeping overhead low.
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
            src={srv4}
            alt="Service 4"
            className="w-full aspect-4/3 object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div className="space-y-5 order-1 md:order-2">
          <Badge>Virtual Office</Badge>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Fully Managed Remote Office Support
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