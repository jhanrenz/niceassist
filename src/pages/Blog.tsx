"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// images
import blog1 from "@/assets/blog1.jpg"
import blog2 from "@/assets/blog2.jpg"
import blog3 from "@/assets/blog3.jpg"

import img1 from "@/assets/img1.jpg"
import img2 from "@/assets/img2.jpg"
import img3 from "@/assets/img3.jpg"
import { Article } from "@/components/sections/Article"
import { Separator } from "@/components/ui/separator"

export const Blog = () => {
  const posts = [
    {
      title: "Why Customer Support Defines Modern Business Success",
      desc:
        "Customer experience is no longer optional. Businesses that prioritize responsive and structured support systems build stronger trust, higher retention, and long-term growth. In today’s digital landscape, support is the new competitive advantage.",
      image: blog1,
      tag: "Customer Service",
      author: "Assistlyme Team",
      avatar: img1,
    },
    {
      title: "How Virtual Offices Improve Business Efficiency",
      desc:
        "Virtual office solutions allow businesses to reduce operational costs while maintaining a professional presence. From handling administrative tasks to improving flexibility, this setup is ideal for startups and remote teams.",
      image: blog2,
      tag: "Business",
      author: "Operations Desk",
      avatar: img2,
    },
    {
      title: "Building High-Converting Digital Experiences",
      desc:
        "Web development is more than design — it’s about performance, usability, and conversion. A well-built website helps businesses attract, engage, and convert users more effectively across all devices.",
      image: blog3,
      tag: "Web Development",
      author: "Tech Team",
      avatar: img3,
    },
  ]

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto flex flex-col gap-14 px-6 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h4 className="text-3xl md:text-5xl tracking-tight font-semibold">
            Latest Blogs/Articles
          </h4>

          <p className="text-muted-foreground max-w-2xl">
            Insights, updates, and strategies to help you improve operations, customer experience,
            and digital growth.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* FEATURED POST */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 flex flex-col gap-5 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={posts[0].image}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-row gap-4 items-center">
              <Badge>{posts[0].tag}</Badge>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={posts[0].avatar} />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                {posts[0].author}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {posts[0].title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {posts[0].desc}
              </p>
            </div>
          </motion.div>

          {/* SMALL POSTS */}
          {posts.slice(1).map((post, _index) => (
            <motion.div
              key={post.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 cursor-pointer group"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3">
                <Badge>{post.tag}</Badge>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  {post.author}
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.desc}
              </p>
            </motion.div>
          ))}

        </div>
        
        <Separator className="opacity-30" />
      
              <div className="py-10 md:py-14">
                <Article/>
              </div>
      </div>
    </div>
    
  )
}