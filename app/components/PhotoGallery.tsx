import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const photos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397685/hotel/wpqsxocftpken2jnq9o0.jpg",
    alt: "Deluxe Room",
    title: "Recepcion",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397683/hotel/berz4dbc3hnk9w9teey1.jpg",
    alt: "Suite",
    title: "Comedor",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397685/hotel/yeqgdeqrzsfvkjdgarxz.jpg",
    alt: "Family Room",
    title: "Habitacion",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397684/hotel/rj0trdagqgse5jondvyh.jpg",
    alt: "Hotel Lobby",
    title: "Habitacion",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397684/hotel/btv67nzrkixsmldxo2ay.jpg",
    alt: "Swimming Pool",
    title: "Habitacion",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397684/hotel/hyqbkofxvwxp08rtvbor.jpg",
    alt: "Restaurant",
    title: "Habitacion",
  },
]

export default function PhotoGallery() {
  return (
    <section id="photos" className="py-8 sm:py-12 md:py-16 bg-muted">
      <div className="container px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Galeria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg">{photo.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
