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
            Fixed Price Web Development Projects
          </h2>

          <p className="text-muted-foreground mt-3 text-sm md:text-base max-w-xl mx-auto">
            Transparent scope, predictable timeline, and quality-driven delivery for your systems.
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
              On-time Delivery
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Whether it’s a campus management system, barangay platform, or e-commerce site,
              we ensure every feature is delivered on schedule so your project launches smoothly.
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
              Rapid Development
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Our web development pipeline is optimized for fast iterations without sacrificing code quality.
              Features go from planning to production quickly, helping you scale your system efficiently.
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
              Streamlined Process
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              From requirement gathering to deployment, every step is clear and structured. 
              You focus on your vision; we focus on building stable, maintainable systems that scale.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}