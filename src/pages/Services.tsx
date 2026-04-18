import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { Services1 } from "@/components/sections/Section1"
import { Services2 } from "@/components/sections/Section2"
import { Services3 } from "@/components/sections/Section3"
import { Services4 } from "@/components/sections/Section4"
import { Services5 } from "@/components/sections/Section5"
import { Services6 } from "@/components/sections/Section6"

export const Services = () => {
  return (
    <>

      {/* WHAT WE OFFER */}
      <section className="w-full py-20 lg:py-32 bg-background/50">
        <div className="container mx-auto px-6 max-w-6xl space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <Badge className="text-base md:text-lg px-6 py-2 rounded-full">
              OUR SERVICES
            </Badge>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
              Professional Business Support Solutions Built for Growth
            </h2>

            <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
              We help businesses operate efficiently through customer support, technical assistance,
              sales solutions, and digital services designed for scalability and performance.
            </p>
          </motion.div>
      <Separator className="opacity-30" />


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { title: "Customer Service", desc: "Responsive and professional support that builds trust." },
              { title: "Technical Support", desc: "Reliable troubleshooting and system assistance." },
              { title: "Sales & Leads", desc: "Lead generation, appointment setting, and conversions." },
              { title: "Virtual Office", desc: "Remote administrative support for smooth operations." },
              { title: "Co-Working Space", desc: "Collaborative environment for productivity and networking." },
              { title: "Web Development", desc: "Modern, scalable websites tailored to your needs." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 rounded-xl border bg-background/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-primary/30 group-hover:bg-primary transition-all" />

                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-primary mt-1" />

                  <div className="flex flex-col gap-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* DETAILED SERVICES */}
      <div className="flex flex-col">
        <Services1 />
        <Separator className="opacity-30" />

        <Services2 />
        <Separator className="opacity-30" />

        <Services3 />
        <Separator className="opacity-30" />

        <Services4 />
        <Separator className="opacity-30" />

        <Services5 />
        <Separator className="opacity-30" />

        <Services6 />
      </div>

      <Separator className="opacity-30" />

    </>
  )
}