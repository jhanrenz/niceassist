"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img1 from "@/assets/cl2.png"
import img2 from "@/assets/img1.jpg"

export const Client2 = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-md rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="Campus Website"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5 text-center lg:text-left max-w-xl"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs uppercase tracking-wide">
              Campus Website
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              A Modern Digital Platform for Campus Life
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left">
              We design and develop campus websites that streamline communication,
              enhance student engagement, and provide easy access to academic resources.
              Built with usability and scalability in mind, the platform supports students,
              faculty, and administrators in one unified digital experience.
            </p>


            {/* Testimonial Card */}
            <div className="mt-4 p-5 rounded-xl border bg-muted/30 shadow-sm hover:shadow-md transition">

              <p className="text-sm md:text-base italic text-muted-foreground text-left">
                “The platform made it easier for students and staff to stay connected,
                access resources, and manage daily campus activities efficiently.”
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start">

                <img
                  src={img2}
                  alt="Campus Administrator"
                  className="w-10 h-10 rounded-full object-cover border"
                />

                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">
                    Campus Administrator
                  </p>
                  <p className="text-xs text-muted-foreground">
                    University Management
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}