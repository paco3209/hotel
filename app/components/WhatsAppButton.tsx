'use client'

import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const phoneNumber = '+5491161726055' // Replace with your actual WhatsApp number

  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full p-4 sm:p-5 shadow-lg bg-green-500"
      onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
    >
      <Phone className="h-8 w-8 sm:h-10 sm:w-10" />
      <span className="sr-only">Contactanos en WhatsApp</span>
    </Button>
  )
}
