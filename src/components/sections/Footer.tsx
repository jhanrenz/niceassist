import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Nice Assist</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Streamlining your business operations so you can focus on growth,
              innovation, and what truly matters.
            </p>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Services</p>

            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link to="/services" className="hover:text-foreground transition">
                  Customer Service
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-foreground transition">
                  Technical Support
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-foreground transition">
                  Sales & Leads
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-foreground transition">
                  Virtual Office
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-foreground transition">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Company</p>

            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link to="/about" className="hover:text-foreground transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-foreground transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Contact</p>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <span className="text-foreground font-medium">Email:</span>{" "}
                jsecre13@gmail.com
              </p>
{/* 
              <p>
                <span className="text-foreground font-medium">:</span>{" "}
                Fo
              </p> */}

              <p>
                <span className="text-foreground font-medium">Philippines:</span>{" "}
                East Blue
              </p>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t my-10 opacity-40" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} Nice Assist. All rights reserved.
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
  );
};