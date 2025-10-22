"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND)

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  validar: z.string().optional(),
})

export async function sendEmail(formData: FormData | { [key: string]: string }) {
  const getData = (key: string) => {
    if (formData instanceof FormData) {
      return formData.get(key)
    }
    return formData[key]
  }

  const validatedFields = schema.safeParse({
    name: getData("name"),
    email: getData("email"),
    message: getData("message"),
    validar: getData("validar"),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email, message, validar } = validatedFields.data

  // Honeypot check - if validar field has any value, it's likely a bot
  if (validar && validar !== "human") {
    console.log("Bot detected - validar field filled")
    return { success: false, error: "Invalid submission." }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Hotel Saint Germain <onboarding@resend.dev>",
      to: "franciscotalenti@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    if (error) {
      console.error("Failed to send email:", error)
      return { success: false, error: "Failed to send email. Please try again." }
    }

    console.log("Email sent successfully:", data)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
