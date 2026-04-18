"use client"

import { motion } from "framer-motion"

export const FixedPriceProjects = () => {
  return (
    <section id="services" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-4xl">

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

        {/* VERTICAL STACK */}
        <div className="flex flex-col gap-6">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
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

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
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

          {/* CARD 3 (HIGHLIGHTED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl border bg-muted/20 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Simplified process
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Clear steps, predictable delivery, no confusion. We remove unnecessary
              complexity so you can focus on execution and growth instead of operations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}