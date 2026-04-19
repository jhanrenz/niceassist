"use client"

import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { FixedPriceProjects } from "@/components/sections/FixedPriceProjects"
import { Hero3 } from "@/components/sections/Hero3"
import { Hero4 } from "@/components/sections/Hero4"
import { Hero5 } from "@/components/sections/Hero5"
import { Testimonials1 } from "@/components/sections/Testimonilas1"
import { Hero6 } from "@/components/sections/Hero6"

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="w-full">
        <div className="container mx-auto">

          <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-32">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="secondary" size="sm" className="gap-2">
                Nice Assist Pre!
              </Button>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4 text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-3xl">
                Streamlined support for your business.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 items-center"
            >
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact us <PhoneCall className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/about">
                <Button size="lg">
                  Learn more <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="flex flex-col">

        <div className="py-10 md:py-14">
          <FixedPriceProjects />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Hero3 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Hero4 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Hero5 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Testimonials1 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Hero6 />
        </div>

      </div>
    </>
  )
}

export default Home