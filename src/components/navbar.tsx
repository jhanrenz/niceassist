import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Brand (no logo) */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
        >
          Assistly Me
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative transition
                ${
                  isActive(item.path)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {item.name}

              {/* active underline */}
              {isActive(item.path) && (
                <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-black dark:bg-white rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="ghost"
      size="sm"
      className="rounded-full flex items-center gap-2 px-3"
    >
      {/* Icon */}
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}

      {/* Signal text */}
      <span className="text-xs text-muted-foreground hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span>

      {/* status dot */}
      <span
        className={`h-2 w-2 rounded-full ${
          theme === "dark" ? "bg-white/80" : "bg-black/70"
        }`}
      />
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      <Sun className="mr-2 h-4 w-4" /> Light mode
    </DropdownMenuItem>

    <DropdownMenuItem onClick={() => setTheme("dark")}>
      <Moon className="mr-2 h-4 w-4" /> Dark mode
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          {/* CTA */}
          <Link to="/contact">
            <Button
              className="
                hidden sm:inline-flex
                bg-black text-white
                hover:bg-gray-800
                rounded-full px-5
                shadow-sm hover:shadow-md
                transition
              "
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}