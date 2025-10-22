import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const rooms = [
  { id: 1, name: 'Deluxe Room', description: 'Spacious room with a king-size bed and city view', price: 200 },
  { id: 2, name: 'Suite', description: 'Luxurious suite with separate living area and ocean view', price: 350 },
  { id: 3, name: 'Family Room', description: 'Perfect for families, with two queen beds and a sofa bed', price: 300 },
]

export default function RoomListings() {
  return (
    <section id="rooms" className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id}>
              <CardHeader>
                <Image src="/placeholder.svg" alt={room.name} width={400} height={200} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${room.price}/night</span>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
