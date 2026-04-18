"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

import abt4 from "@/assets/abt4.jpg"

export const Hero7 = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">

      {/* SAFE CONTAINER */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              We are driven by values
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              With Assistly Me, you gain a trusted partner committed to simplifying complexity,
              boosting productivity, and giving you the freedom to lead your business with confidence.
            </p>

            <Link to="/contact">
              <Button className="w-fit gap-2 hover:scale-105 transition">
                Let’s talk <MoveRight className="w-4 h-4" />
              </Button>
            </Link>

          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={abt4}
              alt="Hero 7"
              className="w-full h-full object-cover aspect-4/3 hover:scale-[1.03] transition-transform duration-500"
            />
          </motion.div>

        </div>

      </div>
    </section>
  )
}