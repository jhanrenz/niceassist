"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img2 from "@/assets/img2.jpg"

export const Hero4 = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-5xl mx-auto">

          {/* IMAGE (LEFT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-sm rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img2}
                alt="Your process, our priority"
                className="w-full h-full object-cover aspect-4/3 hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* TEXT (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-3 text-center lg:text-left"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs">
              How we work
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              Your process, our priority
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Focus forward, we’ll handle the rest.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  )
}