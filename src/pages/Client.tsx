"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import img1 from "@/assets/cl1.png"
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
            className="flex flex-col gap-5 text-center lg:text-left"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs">
              Our Client
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              Powering Growth for Nextgen Vending USA
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
              We’re proud to partner with Nextgen Vending USA, a fast-growing company
              revolutionizing the vending industry with innovative popcorn vending machines.
              As their trusted support and sales partner, we play a key role in delivering
              seamless customer experiences and driving revenue growth.
            </p>

            {/* Sub sections */}
            <div className="flex flex-col gap-4 text-sm md:text-base text-muted-foreground">

              <div>
                <p className="font-medium text-foreground">
                  Customer Support That Builds Loyalty
                </p>
                <p className="text-justify">
                  Our team handles all customer interactions—from inquiries to issue resolution—
                  ensuring fast, professional, and consistent support that strengthens brand trust.
                </p>
              </div>

              {/* HIDDEN CONTENT */}
              {showMore && (
                <>
                  <div>
                    <p className="font-medium text-foreground">
                      Sales That Drive Results
                    </p>
                    <p className="text-justify">
                      We engage leads, nurture prospects, and guide customers through the purchasing
                      process, turning interest into confirmed sales with clarity and professionalism.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      End-to-End Communication Management
                    </p>
                    <p className="text-justify">
                      From first contact to post-sale support, we manage the full customer journey
                      with attention to detail, ensuring smooth communication and no missed opportunities.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
                      Website Development & Management
                    </p>
                    <p className="text-justify">
                      We handle the complete website development and management for Nextgen Vending USA,
                      keeping it optimized, responsive, and built to support scalable growth.
                    </p>
                  </div>
                </>
              )}

              {/* SEE MORE / SEE LESS BUTTON */}
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
            className="flex justify-center lg:justify-end h-full"
          >
            <div className="w-full max-w-md lg:h-[75vh] rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="Nextgen Vending USA"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
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