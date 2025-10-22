'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between p-4 md:py-6">
        <Link href="/" className="text-2xl font-bold">
          Hotel Saint Germain
        </Link>
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection('photos')} className="text-foreground/60 hover:text-foreground">Galeria</button>
          <button onClick={() => scrollToSection('about')} className="text-foreground/60 hover:text-foreground">Nosotros</button>
          <button onClick={() => scrollToSection('location-contact')} className="text-foreground/60 hover:text-foreground">Contacto</button>
        </nav>
        <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden p-4 space-y-4">
          <button onClick={() => scrollToSection('photos')} className="block text-lg py-2 text-foreground/60 hover:text-foreground">Galeria</button>
          <button onClick={() => scrollToSection('about')} className="block text-lg py-2 text-foreground/60 hover:text-foreground">Nosotros</button>
          <button onClick={() => scrollToSection('location-contact')} className="block text-lg py-2 text-foreground/60 hover:text-foreground">Contacto</button>
        </nav>
      )}
    </header>
  )
}
