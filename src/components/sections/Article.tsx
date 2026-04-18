"use client"

import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Images
import art1 from "@/assets/art1.jpg"
import art2 from "@/assets/art2.jpg"
import art3 from "@/assets/art3.jpg"
import art4 from "@/assets/art4.jpg"

export const Article = () => {
  const articles = [
    {
      title: "Streamlining Small Business Finance",
      desc: "Learn how to optimize your finances, reduce manual work, and keep your business running smoothly.",
      image: art1,
    },
    {
      title: "Remote Work Best Practices",
      desc: "Tips and strategies for building a productive and collaborative remote team.",
      image: art2,
    },
    {
      title: "Boosting Customer Retention",
      desc: "Effective approaches to retain clients, build trust, and improve overall satisfaction.",
      image: art3,
    },
    {
      title: "Digital Marketing Trends 2026",
      desc: "Stay ahead with the latest strategies and tools shaping the online marketing landscape.",
      image: art4,
    },
  ]

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto flex flex-col gap-14 px-6 max-w-6xl">

        {/* HEADER */}
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Latest Blogs/Articles
          </h4>
          <Button className="gap-4">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-md aspect-video mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl tracking-tight">{article.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground text-base">{article.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}