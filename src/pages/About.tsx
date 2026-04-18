import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

import { Hero7 } from "@/components/sections/Hero7"
import { Hero8 } from "@/components/sections/Hero8"

// images
import abt1 from "@/assets/abt1.jpg"
import abt2 from "@/assets/abt2.jpg"
import abt3 from "@/assets/abt3.jpg"

import { Founder } from "@/components/sections/Founder"

export default function About() {
  return (
    <>
      {/* ABOUT HERO (ALSO SERVES AS PAGE HEADER) */}
      <section className="w-full py-20 lg:py-40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* BIGGER ABOUT US BADGE */}
              <Badge
                variant="outline"
                className="w-fit text-lg md:text-xl py-3 px-6 border-2"
              >
                About Us
              </Badge>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Building clarity in business operations
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our team provides comprehensive support across administrative tasks,
                process management, and customer assistance, helping you save time,
                reduce costs, and improve efficiency.
              </p>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We ensure that your processes run smoothly and reliably. By taking
                care of the details, we empower you to concentrate on strategic decisions,
                creative projects, and building stronger connections with your clients.
              </p>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={abt1}
                alt="about 1"
                className="rounded-xl aspect-square object-cover hover:scale-[1.03] transition"
              />
              <img
                src={abt2}
                alt="about 2"
                className="rounded-xl row-span-2 h-full object-cover hover:scale-[1.03] transition"
              />
              <img
                src={abt3}
                alt="about 3"
                className="rounded-xl aspect-square object-cover hover:scale-[1.03] transition"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* OTHER SECTIONS */}
      <div className="flex flex-col">
        <div className="py-10 md:py-14">
          <Hero8 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Hero7 />
        </div>

        <Separator className="opacity-30" />
        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Founder />
        </div>

      </div>
    </>
  )
}