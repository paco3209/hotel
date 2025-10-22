"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendEmail } from "../actions/sendEmail"

export default function LocationAndContact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState<{
    success: boolean
    error: string | null
    errors: { [key: string]: string[] } | null
  }>({
    success: false,
    error: null,
    errors: null,
  })
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setFormState({ success: false, error: null, errors: null })

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setIsLoading(false)
    setFormState(result)

    if (result.success) {
      formRef.current?.reset()
    }
  }

  return (
    <section id="location-contact" className="py-8 sm:py-12 md:py-16 bg-muted">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Nuestra Ubicación</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.9433102233693!2d-56.98037592349915!3d-37.272771372116146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b609b27cbec85%3A0x1e741e71834f39c7!2sHoster%C3%ADa%20Saint%20Germain!5e0!3m2!1sen!2sar!4v1734233762135!5m2!1sen!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dirección</h3>
              <p className="text-base sm:text-lg">P.º 119 82, B7165 Villa Gesell, Provincia de Buenos Aires</p>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-base sm:text-lg">02255462055</p>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Contacto</CardTitle>
                <CardDescription className="text-sm sm:text-base">Envianos tu consulta.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Nombre
                    </Label>
                    <Input id="name" name="name" required className="text-base sm:text-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email
                    </Label>
                    <Input id="email" name="email" type="email" required className="text-base sm:text-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Mensaje
                    </Label>
                    <Textarea id="message" name="message" required className="text-base sm:text-lg" />
                  </div>
                  <input type="hidden" name="validar" value="human" />
                  <Button type="submit" className="w-full text-base sm:text-lg" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar"}
                  </Button>
                  {formState.success && <p className="text-green-600 text-sm">Mensaje enviado con éxito!</p>}
                  {formState.error && <p className="text-red-600 text-sm">{formState.error}</p>}
                  {formState.errors && (
                    <ul className="text-red-600 text-sm">
                      {Object.entries(formState.errors).map(([field, errors]) => (
                        <li key={field}>{errors[0]}</li>
                      ))}
                    </ul>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
