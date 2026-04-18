"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img1 from "@/assets/cl3.png"

export const Client3 = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-md rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="Client Project"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5 text-center lg:text-left"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs">
              Client Success Story
            </Badge>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Driving operational efficiency through smart digital support
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
              We partnered with this client to streamline customer operations,
              improve response handling, and enhance their digital workflows through
              structured support systems and optimized communication processes.
            </p>

            {/* Key points */}
            <div className="flex flex-col gap-3 text-sm md:text-base text-muted-foreground">

              <div>
                <p className="font-medium text-foreground">
                  Improved Customer Experience
                </p>
                <p className="text-justify">
                  Faster responses and structured support improved satisfaction and reliability.
                </p>
              </div>

              {showMore && (
                <>
                  <div>
                    <p className="font-medium text-foreground">
                      Optimized Sales Process
                    </p>
                    <p className="text-justify">
                      Better lead handling and follow-ups increased conversion efficiency.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Streamlined Operations
                    </p>
                    <p className="text-justify">
                      Simplified communication systems reduced internal workflow friction.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Digital Support Enhancement
                    </p>
                    <p className="text-justify">
                      Strengthened online systems improved overall business scalability.
                    </p>
                  </div>
                </>
              )}

              {/* PREMIUM TOGGLE BUTTON */}
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

        </div>

      </div>
    </section>
  )
}