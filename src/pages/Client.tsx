"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img1 from "@/assets/cl1.jpg"
import { Separator } from "@/components/ui/separator"
import { Client2 } from "@/components/sections/Client2"
import { Client3 } from "@/components/sections/Client3"
import { Client4 } from "@/components/sections/Client4"
import { Testimonials1 } from "@/components/sections/Testimonilas1"

export const Client = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 text-center lg:text-left max-w-xl"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs uppercase tracking-wide">
              E-commerce Case Study
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Web Development & Growth for a Modern E-commerce Brand
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left">
              We design, develop, and manage high-performing e-commerce platforms that support
              innovative products and scalable businesses. Our focus is on creating seamless digital
              experiences that convert visitors into customers and drive long-term growth.
            </p>

            <div className="flex flex-col gap-4 text-sm md:text-base text-muted-foreground">

              <div>
                <p className="font-medium text-foreground">
                  Customer Support & Experience
                </p>
                <p className="text-left">
                  We handle customer interactions—from inquiries to issue resolution—ensuring fast,
                  professional, and consistent support that builds trust and improves retention.
                </p>
              </div>

              {showMore && (
                <>
                  <div>
                    <p className="font-medium text-foreground">
                      Sales Optimization & Conversion
                    </p>
                    <p className="text-left">
                      We engage leads, nurture prospects, and guide users through the buying journey,
                      turning interest into confirmed sales with clarity and efficiency.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      End-to-End Customer Journey
                    </p>
                    <p className="text-left">
                      From first interaction to post-sale support, we manage the full customer lifecycle,
                      ensuring smooth communication and no missed opportunities.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      E-commerce Website Development
                    </p>
                    <p className="text-left">
                      We build and maintain responsive, optimized websites designed for performance,
                      usability, and scalable growth.
                    </p>
                  </div>
                </>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="group flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full
                bg-muted/40 hover:bg-muted/70 transition border border-transparent hover:border-muted-foreground/20 w-fit"
              >
                <span className="text-primary">
                  {showMore ? "See less" : "See more"}
                </span>

                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                  {showMore ? "▲" : "▼"}
                </span>
              </button>

            </div>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="E-commerce Project"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Client2 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Client3 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Client4 />
        </div>

        <Separator className="opacity-30" />

        <div className="py-10 md:py-14">
          <Testimonials1 />
        </div>

      </div>
    </section>
  )
}