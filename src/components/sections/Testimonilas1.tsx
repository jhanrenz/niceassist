"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { User, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

// LOCAL IMAGES
import prf1 from "@/assets/prf1.jpg"
import prf2 from "@/assets/prf2.jpg"
import prf3 from "@/assets/prf3.jpg"
import prf4 from "@/assets/prf4.jpg"
import prf5 from "@/assets/prf5.jpg"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Campus Administrator",
    avatar: prf1,
    comment:
      "The system made it easier to manage student records and announcements. Everything is now centralized and accessible.",
    rating: 5,
  },
  {
    name: "Ramon Reyes",
    role: "Barangay Secretary",
    avatar: prf2,
    comment:
      "Processing documents and tracking residents is now much faster. It improved our daily operations significantly.",
    rating: 5,
  },
  {
    name: "Angela Cruz",
    role: "Community Member",
    avatar: prf3,
    comment:
      "The price tracker helps me compare goods easily. It’s very useful for budgeting daily expenses.",
    rating: 4,
  },
  {
    name: "Michael Lim",
    role: "Barangay Official",
    avatar: prf4,
    comment:
      "Blotter records and reports are now well-organized. It reduced manual work and errors.",
    rating: 5,
  },
  {
    name: "Mica Lee",
    role: "Student User",
    avatar: prf5,
    comment:
      "Accessing school updates and resources is much more convenient. The platform is simple and easy to use.",
    rating: 5,
  },
]

const Stars = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "text-yellow-500 fill-yellow-500"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  )
}

export const Testimonials1 = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [paused, setPaused] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api || paused) return

    const interval = setInterval(() => {
      const next =
        api.selectedScrollSnap() + 1 === api.scrollSnapList().length
          ? 0
          : api.selectedScrollSnap() + 1

      api.scrollTo(next)
      setCurrent(next)
    }, 3000)

    return () => clearInterval(interval)
  }, [api, paused])

  const goTo = (index: number) => {
    api?.scrollTo(index)
    setCurrent(index)
  }

  const prev = () => {
    if (!api) return
    const prev =
      api.selectedScrollSnap() === 0
        ? api.scrollSnapList().length - 1
        : api.selectedScrollSnap() - 1

    api.scrollTo(prev)
    setCurrent(prev)
  }

  const next = () => {
    if (!api) return
    const next =
      api.selectedScrollSnap() + 1 === api.scrollSnapList().length
        ? 0
        : api.selectedScrollSnap() + 1

    api.scrollTo(next)
    setCurrent(next)
  }

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 flex flex-col items-center gap-3"
        >
          <Badge variant="outline" className="text-xs uppercase tracking-wide">
            User Feedback
          </Badge>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
            Trusted by communities, institutions, and everyday users
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            Feedback from users who experienced improved efficiency, better access
            to services, and smarter daily decisions through our systems.
          </p>

          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground border px-3 py-1 rounded-full bg-muted/40">
            <User className="w-3.5 h-3.5" />
            Swipe, click arrows, or use dots
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <div
          className="max-w-6xl mx-auto px-2 sm:px-4 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
            bg-background border shadow-md rounded-full p-2 hover:scale-110 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
            bg-background border shadow-md rounded-full p-2 hover:scale-110 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">

              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="h-full p-6 rounded-xl border bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <Stars count={t.rating} />
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                      “{t.comment}”
                    </p>

                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={t.avatar} alt={t.name} />
                        <AvatarFallback>
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{t.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}

            </CarouselContent>
          </Carousel>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}