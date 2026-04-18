"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img1 from "@/assets/cl4.png"

export const Client4 = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5 text-center lg:text-left"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs">
              Branding Project
            </Badge>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Branding for Chatoue
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
              We developed a modern and cohesive brand identity for Chatoue,
              focusing on visual consistency, emotional appeal, and a strong digital presence.
              The goal was to position the brand as elegant, trustworthy, and memorable
              in a competitive market.
            </p>

            {/* KEY POINTS */}
            <div className="flex flex-col gap-3 text-sm md:text-base text-muted-foreground">

              <div>
                <p className="font-medium text-foreground">
                  Brand Identity Design
                </p>
                <p className="text-justify">
                  Created a refined visual system including logo direction, typography,
                  and color palette to reflect Chatoue’s personality and positioning.
                </p>
              </div>

              {showMore && (
                <>
                  <div>
                    <p className="font-medium text-foreground">
                      Consistent Visual Language
                    </p>
                    <p className="text-justify">
                      Ensured consistency across all digital and marketing materials
                      to strengthen recognition and brand recall.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Digital Presence Enhancement
                    </p>
                    <p className="text-justify">
                      Improved overall online presentation to create a more professional
                      and engaging user experience across platforms.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Brand Positioning Strategy
                    </p>
                    <p className="text-justify">
                      Defined a clear brand direction to help Chatoue stand out
                      in a competitive and saturated market.
                    </p>
                  </div>
                </>
              )}

              {/* TOGGLE BUTTON */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="group flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full
                bg-muted/40 hover:bg-muted/70 transition border border-transparent hover:border-muted-foreground/20 w-fit"
              >
                <span className="text-primary">
                  {showMore ? "See less" : "See more"}
                </span>

                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                  {showMore ? "▲" : "▼"}
                </span>
              </button>

            </div>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="Chatoue Branding"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}