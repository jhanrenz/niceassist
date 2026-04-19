"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export const Hero8 = () => {
  return (
    <section className="w-full py-20 lg:py-32">

      <div className="container mx-auto px-5 sm:px-6 max-w-4xl space-y-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-3"
        >
          <Badge variant="outline" className="px-4 py-2 text-lg font-semibold uppercase tracking-wide">
            Mission & Vision
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What drives our development
          </h2>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 bg-background/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border"
        >
          <Badge variant="outline" className="w-fit">
            <span className="text-primary font-semibold">Mission</span>
          </Badge>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Building efficient and scalable digital systems
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Our mission is to design and develop modern web applications that simplify
            processes for schools, communities, businesses, and organizations.
            We focus on creating fast, responsive, and user-friendly systems that
            improve workflow efficiency and deliver real-world impact.
          </p>
        </motion.div>

        {/* spacing */}
        <div className="h-10 sm:h-14" />

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 bg-background/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border"
        >
          <Badge variant="outline" className="w-fit">
            <span className="text-primary font-semibold">Vision</span>
          </Badge>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            A future powered by smart and connected systems
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We envision a digital ecosystem where campuses, barangays, and businesses
            operate seamlessly through integrated systems. Our goal is to build scalable
            platforms that connect people, automate processes, and improve accessibility
            through technology.
          </p>
        </motion.div>

      </div>
    </section>
  )
}