"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FFFDF7] shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-[#FF6B6B] font-bold text-3xl transition-transform hover:scale-105">
          faucisse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/manifeste">Manifeste</NavLink>
          <NavLink href="/recettes">Recettes</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FF6B6B]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink href="/manifeste" onClick={() => setIsMobileMenuOpen(false)}>
              Manifeste
            </MobileNavLink>
            <MobileNavLink href="/recettes" onClick={() => setIsMobileMenuOpen(false)}>
              Recettes
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#4A4A4A] font-medium hover:text-[#FF6B6B] transition-all hover:scale-105">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-[#4A4A4A] font-medium hover:text-[#FF6B6B] text-lg py-2" onClick={onClick}>
      {children}
    </Link>
  )
}
