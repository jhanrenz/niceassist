export const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Assistly Me</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Streamlining your business operations so you can focus on growth,
              innovation, and what truly matters.
            </p>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Services</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="hover:text-foreground cursor-pointer transition">
                Customer Service
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Technical Support
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Sales & Leads
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Virtual Office
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Web Development
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Company</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="hover:text-foreground cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Services
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-foreground cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Contact</p>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <span className="text-foreground font-medium">Email:</span>{" "}
                jz@assistlyme.com
              </p>

              <p>
                <span className="text-foreground font-medium">USA:</span>{" "}
                Fort Worth, TX
              </p>

              <p>
                <span className="text-foreground font-medium">Philippines:</span>{" "}
                Baguio City
              </p>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t my-10 opacity-40" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} Assistly Me. All rights reserved.
          </p>

          <p>
            Developed by{" "}
            <span className="font-medium text-foreground">
              @jhanrenzzz
            </span>
          </p>

        </div>

      </div>
    </footer>
  )
}