"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import srv6 from "@/assets/srv6.jpg"

export const Services6 = () => {
  const [expanded, setExpanded] = useState(false)

  const fullText = `
We build fast, responsive, and scalable websites tailored to your business needs.

Our web development service focuses on performance, usability, and long-term scalability. 
Every project is designed with clean architecture, modern UI principles, and user experience in mind.

We ensure that your website not only looks good but also performs efficiently across all devices. 
From landing pages to full business platforms, we create digital solutions that help you grow, convert, and scale with confidence.
  `

  const shortText = fullText.slice(0, 160) + "..."

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.img
          src={srv6}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl object-cover w-full aspect-4/3 order-2 md:order-1"
        />

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 order-1 md:order-2"
        >
          <Badge>Web Development</Badge>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Modern Scalable Web Solutions
          </h2>

          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
            {expanded ? fullText : shortText}
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "See More"}
          </Button>
        </motion.div>

      </div>
    </section>
  )
}