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
            <div className="w-full max-w-md lg:h-[75vh] rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="Nextgen Vending USA"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >

            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 text-xs">
              About Nextgen Vending USA
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              Smart vending solutions built for modern business
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Ready-to-deploy vending machines for popcorn, pizza, hemp oil, and specialty products.
              Designed for 24/7 operation with simple maintenance and intuitive controls.
              Built for real environments with durable hardware, clean design, and cashless-ready systems.
            </p>

            {/* Website Link */}
            <a
              href="https://nextgenvendingusa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:underline w-fit mx-auto lg:mx-0"
            >
              Visit Website →
            </a>

            {/* Testimonial Card */}
            <div className="mt-4 p-5 rounded-xl border bg-muted/30 shadow-sm hover:shadow-md transition">

              <p className="text-sm md:text-base italic text-muted-foreground">
                “Superb help with customer support and sales! Can’t ask for more!”
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start">

                <img
                  src={img2}
                  alt="Sabrina Moreno"
                  className="w-10 h-10 rounded-full object-cover border"
                />

                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">
                    Sabrina Moreno
                  </p>
                  <p className="text-xs text-muted-foreground">
                    NEXTGEN VENDING USA
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