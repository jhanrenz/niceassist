"use client"

import { motion } from "framer-motion"

export const FixedPriceProjects = () => {
  return (
    <section id="services" className="w-full py-20 lg:py-32">

      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Fixed Price Projects
          </h2>

          <p className="text-muted-foreground mt-3 text-sm md:text-base max-w-xl mx-auto">
            Simplifying work, amplifying results through clear structure and predictable delivery.
          </p>
        </motion.div>

        {/* GRID (MISSION / VISION STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border bg-background shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Receive on time
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Let us manage the details, you lead the vision. We ensure every task
              is delivered on schedule so your workflow stays consistent and stress-free.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border bg-background shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Fast work turnaround
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We take care of tasks, you take care of growth. Our system is built
              for speed without sacrificing quality or precision.
            </p>
          </motion.div>

          {/* BOTTOM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border bg-background shadow-sm hover:shadow-md transition md:col-span-2"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Simplified process
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-3xl">
              Clear steps, predictable delivery, no confusion. We remove unnecessary
              complexity so you can focus on execution and growth instead of operations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}