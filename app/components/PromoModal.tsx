"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Consultar promoción por enduro</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src="https://res.cloudinary.com/dq4ssyljd/image/upload/v1739243101/enduro_daosdj.jpg"
            alt="Promoción Enduro del Invierno"
            width={500}
            height={650}
            className="rounded-md w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
