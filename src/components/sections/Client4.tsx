"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img1 from "@/assets/cl4.jpg"

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
            className="flex flex-col gap-4 text-center lg:text-left max-w-xl"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs uppercase tracking-wide">
              Community App
            </Badge>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Essentials Price Tracker for Smarter Everyday Decisions
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left">
              We developed a community-driven application that helps users monitor and compare
              the prices of essential goods in real time. Designed to promote transparency and
              affordability, the platform empowers households to make informed purchasing decisions
              while staying updated on local market trends.
            </p>

            {/* KEY POINTS */}
            <div className="flex flex-col gap-3 text-sm md:text-base text-muted-foreground">

              <div>
                <p className="font-medium text-foreground">
                  Real-Time Price Monitoring
                </p>
                <p className="text-left">
                  Track daily price changes of essential goods across different locations and stores.
                </p>
              </div>

              {showMore && (
                <>
                  <div>
                    <p className="font-medium text-foreground">
                      Community-Driven Updates
                    </p>
                    <p className="text-left">
                      Users can contribute and share price data, helping build a more accurate and
                      transparent pricing ecosystem.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Smart Comparison Tools
                    </p>
                    <p className="text-left">
                      Easily compare prices to find the most affordable options and save on daily expenses.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Local Market Insights
                    </p>
                    <p className="text-left">
                      Gain insights into pricing trends and availability of goods within the community.
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
                alt="Essentials Price Tracker App"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}