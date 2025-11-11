import React, { useState, useEffect } from "react";
import logo from "@/assets/logo-black.png";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

export default function Header({ LinkComponent = RouterLink, links = null }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically scroll when reloading / directly opening #hash URLs
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);

  // Smart Link wrapper with smooth scroll + navigate if on other page
  const SmartLink = ({ to, children, className = "", ...rest }) => {
    const handleClick = (e) => {
      if (!to.includes("#")) return; // Normal link if no hash

      e.preventDefault();
      const [path, hash] = to.split("#"); // "/#tours" → ["/", "tours"]

      const scrollToSection = () => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // If already on the correct page → just scroll
      if (location.pathname === path || path === "") {
        scrollToSection();
      } else {
        // Navigate first then scroll
        navigate(path + "#" + hash);
        setTimeout(scrollToSection, 200);
      }

      setOpen(false); // Close mobile menu
    };

    return (
      <LinkComponent to={to} onClick={handleClick} className={className} {...rest}>
        {children}
      </LinkComponent>
    );
  };

  // Default Navigation Links
  const defaultLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/#tours", label: "Tours" },
    { to: "/#phototours", label: "Photography Tours" },
    { to: "/contact", label: "Contact Us" },
  ];

  const navLinks = links ?? defaultLinks;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <SmartLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 object-contain" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Planet Northeast
            </span>
          </SmartLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) =>
              item.isButton ? (
                <SmartLink key={item.to} to={item.to}>
                  <button className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                    {item.label}
                  </button>
                </SmartLink>
              ) : (
                <SmartLink
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </SmartLink>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-3 transition-all duration-200 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((item) =>
              item.isButton ? (
                <SmartLink key={item.to} to={item.to}>
                  <button className="w-full px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                    {item.label}
                  </button>
                </SmartLink>
              ) : (
                <SmartLink
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition"
                >
                  {item.label}
                </SmartLink>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
