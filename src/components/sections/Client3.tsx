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
                alt="Barangay Management System"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 text-center lg:text-left max-w-xl"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs uppercase tracking-wide">
              Barangay Management System
            </Badge>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Streamlining Community Services Through Digital Solutions
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left">
              We developed a centralized barangay management system designed to simplify
              administrative tasks, improve record keeping, and enhance service delivery.
              The platform enables faster transactions, organized resident data, and
              efficient communication between officials and the community.
            </p>

            {/* Key points */}
            <div className="flex flex-col gap-3 text-sm md:text-base text-muted-foreground">

              <div>
                <p className="font-medium text-foreground">
                  Resident Information Management
                </p>
                <p className="text-left">
                  Maintain organized and searchable records of residents, households, and profiles.
                </p>
              </div>

              {showMore && (
                <>
                  <div>
                    <p className="font-medium text-foreground">
                      Document & Certificate Processing
                    </p>
                    <p className="text-left">
                      Generate barangay clearances, permits, and certificates quickly and accurately.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Blotter & Incident Tracking
                    </p>
                    <p className="text-left">
                      Record and monitor incidents with structured reporting and easy retrieval.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Announcements & Community Updates
                    </p>
                    <p className="text-left">
                      Share important notices and updates to keep residents informed in real time.
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

        </div>

      </div>
    </section>
  )
}