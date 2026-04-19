"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Users } from "lucide-react"

// images (fn1 to fn10)
import fn1 from "@/assets/fn1.png"
import fn2 from "@/assets/fn2.png"
import fn3 from "@/assets/fn3.png"
import fn4 from "@/assets/fn4.png"
import fn5 from "@/assets/fn5.png"
import fn6 from "@/assets/fn6.png"
import fn7 from "@/assets/fn7.png"
import fn8 from "@/assets/fn8.png"
import fn9 from "@/assets/fn9.png"
import fn10 from "@/assets/fn10.png"

const team = [
  {
    name: "Monkey D. Luffy",
    role: "Chief Executive Officer (CEO)",
    image: fn1,
  },
  {
    name: "Naruto Uzumaki",
    role: "Chief Technology Officer (CTO)",
    image: fn2,
  },
  {
    name: "Asta",
    role: "System Lead",
    image: fn3,
  },
  {
    name: "Roronoa Zoro",
    role: "System Lead",
    image: fn4,
  },
  {
    name: "Shikamaru Nara",
    role: "Frontend Developer",
    image: fn5,
  },
  {
    name: "Sanji Vinsmoke",
    role: "Backend Developer",
    image: fn6,
  },
  {
    name: "Itachi Uchiha",
    role: "Full Stack Developer",
    image: fn7,
  },
  {
    name: "Kakashi Hatake",
    role: "DevOps Engineer",
    image: fn8,
  },
  {
    name: "Sasuke Uchiha",
    role: "System Architect",
    image: fn9,
  },
  {
    name: "Yami Sukehiro",
    role: "Technical Lead (Marketing Systems)",
    image: fn10,
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
          <Badge variant="outline" className="gap-2 uppercase tracking-wide">
            <Users className="w-3.5 h-3.5" />
            Development Team
          </Badge>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Meet Our Developers
          </h2>

          <p className="text-muted-foreground max-w-3xl leading-relaxed text-sm md:text-base">
            A high-performance development team inspired by legendary warriors,
            focused on building scalable systems, modern web applications, and
            digital platforms for real-world impact.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {team.map((f, index) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="w-full"
            >
              <Card className="w-full h-full p-6 flex flex-col items-center text-center border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300">

                {/* IMAGE */}
                <div className="w-40 h-40 mb-5">
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