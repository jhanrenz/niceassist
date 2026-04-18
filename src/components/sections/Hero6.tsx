import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import { Link } from "react-router-dom";
export const Hero6 = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">

        <div className="flex flex-col text-center items-center gap-6 py-14">

          {/* Badge */}
          <Badge>Let’s build together</Badge>

          {/* Heading + Text */}
          <div className="flex flex-col gap-4 max-w-3xl">

            <h3 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold">
              Let’s work together on your next web project
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Assistly Me streamlines business operations so you can focus on growth and innovation.
              We handle administrative tasks, process management, and customer support to save you time
              and boost efficiency. By managing the details, we empower you to lead with confidence and
              concentrate on what matters most.
            </p>

          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
  <Button asChild size="lg" className="gap-2 hover:scale-105 transition">
    <Link to="/contact">
      Contact Us <PhoneCall className="w-4 h-4" />
    </Link>
  </Button>
</div>

        </div>

      </div>
    </section>
  )
}