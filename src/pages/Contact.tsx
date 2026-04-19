"use client";

import { Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <Badge className="w-fit text-base px-5 py-2 rounded-full uppercase tracking-wide">
              Contact
            </Badge>

            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Let’s build your next system
              </h2>

              <p className="text-muted-foreground max-w-md text-base leading-relaxed">
                From campus platforms to barangay systems and community apps,
                I develop solutions that simplify processes, improve efficiency,
                and deliver real impact for users.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-2">
              {[
                {
                  title: "Custom System Development",
                  desc: "Tailored solutions for schools, communities, and organizations.",
                },
                {
                  title: "Efficient & Scalable",
                  desc: "Built for performance, usability, and long-term growth.",
                },
                {
                  title: "User-Focused Design",
                  desc: "Clean, intuitive interfaces for better user experience.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 space-y-3 text-sm text-muted-foreground border-t pt-6"
            >
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                jsecre13@gmail.com
              </p>
              <p>
                <span className="font-medium text-foreground">Location:</span>{" "}
                Pangasinan, Philippines
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md flex flex-col gap-6 p-8 rounded-2xl border bg-background/70 backdrop-blur shadow-lg transition"
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold"
              >
                Send a Message
              </motion.h3>

              {[
                { label: "First Name", type: "text" },
                { label: "Last Name", type: "text" },
                { label: "Email", type: "email" },
                { label: "Message", type: "textarea" },
              ].map((field, idx) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="grid gap-2"
                >
                  <Label>{field.label}</Label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      className="h-11 rounded-lg focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button className="w-full gap-2 h-11 text-base hover:scale-[1.02] transition">
                  Send Message <MoveRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};