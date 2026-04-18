import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Brand */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
        >
          Assistly Me
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition ${
                isActive(item.path)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}

              {isActive(item.path) && (
                <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-foreground rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Minimal Theme Toggle */}
          <div className="flex items-center rounded-full border bg-muted/40 p-1">
            <button
              onClick={() => setTheme("light")}
              aria-label="Light mode"
              className={`p-2 rounded-full transition-all ${
                theme === "light"
                  ? "bg-white text-black shadow-sm scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sun className="h-4 w-4" />
            </button>

            <button
              onClick={() => setTheme("dark")}
              aria-label="Dark mode"
              className={`p-2 rounded-full transition-all ${
                theme === "dark"
                  ? "bg-black text-white shadow-sm scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Moon className="h-4 w-4" />
            </button>
          </div>

          {/* CTA (desktop only) */}
          <Link to="/contact">
            <Button className="hidden sm:inline-flex bg-black text-white hover:bg-gray-800 rounded-full px-5 shadow-sm hover:shadow-md transition">
              Get Started
            </Button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm ${
                isActive(item.path)
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-2 bg-black text-white rounded-full">
              Get Started
            </Button>
          </Link>

          {/* Mobile Theme Toggle */}
          <div className="flex items-center justify-center rounded-full border bg-muted/40 p-1 mt-2">
            <button
              onClick={() => setTheme("light")}
              className={`p-2 rounded-full transition ${
                theme === "light"
                  ? "bg-white text-black shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              <Sun className="h-4 w-4" />
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`p-2 rounded-full transition ${
                theme === "dark"
                  ? "bg-black text-white shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              <Moon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}