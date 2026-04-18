"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export const Hero8 = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      
      {/* container with safe padding on small screens */}
      <div className="container mx-auto px-5 sm:px-6 max-w-4xl space-y-16">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-3"
        >
          <Badge variant="outline" className="px-4 py-2 text-lg font-semibold">
            Mission & Vision
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What drives us
          </h2>
{/* 
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Our mission and vision guide every decision we make at Assistly Me. They reflect our commitment to clarity, efficiency, and empowering businesses to focus on what matters most.
          </p> */}
        </motion.div>

        {/* decorative background (very subtle) */}
        <div className="relative">

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
              Driving clarity and productivity for modern businesses
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              At Assistly Me, our mission is to simplify business operations through smart systems and reliable support. We remove unnecessary complexity so teams can focus on execution, creativity, and sustainable growth.
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
              A future of effortless and intelligent operations
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We envision a world where businesses operate with clarity, speed, and confidence. Our vision is to build systems that empower people to focus on meaningful work while everything behind the scenes runs smoothly.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}