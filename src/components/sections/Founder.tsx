"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Users } from "lucide-react"

// images
import founder1 from "@/assets/founder1.png"
import founder2 from "@/assets/founder2.png"
import founder3 from "@/assets/founder3.png"

const founders = [
  {
    name: "Joseph “AJ” Velador",
    role: "Founder / CEO",
    image: founder1,
  },
  {
    name: "Luis Ceron",
    role: "Founder / CFO",
    image: founder2,
  },
  {
    name: "Jezver “JZ” Alejandro",
    role: "Founder / Director of Operations",
    image: founder3,
  },
]

export const Founder = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl space-y-14">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4"
        >
          <Badge variant="outline" className="gap-2">
            <Users className="w-3.5 h-3.5" />
            Leadership
          </Badge>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Meet Our Founders
          </h2>

          <p className="text-muted-foreground max-w-6xl leading-relaxed text-sm md:text-base text-justify">
            Our founder possesses extensive expertise in business operations,
            customer experience, and technology-driven solutions. Driven by a
            passion for building efficient systems and scalable businesses, he
            established Assistlyme to help organizations streamline customer
            support, enhance sales performance, and optimize operations.
            He delivers measurable results through hands-on management and
            strategic insight, empowering partners to accelerate growth and
            achieve operational excellence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {founders.map((f, index) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="w-full"
            >
              <Card className="w-full h-full p-6 flex flex-col items-center text-center border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300">

                {/* IMAGE (ONLY CHANGE: BIGGER SIZE) */}
                <div className="w-44 h-44 mb-5">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover rounded-full border shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* TEXT */}
                <div className="w-full max-w-xs flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {f.role}
                  </p>
                </div>

              </Card>
            </motion.div>
          ))}

        </div>

        {/* SEPARATOR */}
        <Separator className="opacity-40" />

      </div>
    </section>
  )
}