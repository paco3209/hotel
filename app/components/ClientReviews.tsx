import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Lorena",
    photo: "/placeholder.svg?height=100&width=100",
    review: "Excelente atención por parte de la dueña y sus hijos!!! A metros se la playa,limpieza 10 puntos desayuno buenísimo!!!! Lo recomiendo siempre!!💫 …",
    rating: 5
  },
  {
    id: 2,
    name: "Luciana",
    photo: "/placeholder.svg?height=100&width=100",
    review: "Un lugar Familiar, excelente ubicación a media cuadra de la playa, precios acorde y muy bien atendidos por sus dueños! Lo recomiendo!!",
    rating: 5
  },
  {
    id: 3,
    name: "Lucas",
    photo: "/placeholder.svg?height=100&width=100",
    review: "Super recomendable.. serca de la playa.. muy economico.. un lugar confortable.. y con una muy buena atencion de parte de los dueños y empleados.. lo recomiendo !!!",
    rating: 5
  },
  {
    id: 4,
    name: "Pablo",
    photo: "/placeholder.svg?height=100&width=100",
    review: "Sus dueños son muy cálidos y respetuosos. Con precios muy accesibles y cómodos ubicación excelente. Lo que lo hace el lugar perfecto.Voy a volver",
    rating: 5
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : star - 0.5 <= rating ? (
            <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : (
            <Star className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  )
}

export default function ClientReviews() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Los comentarios de nuestros huéspedes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="flex flex-col h-full">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full mr-4 bg-gray-300 flex items-center justify-center"
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-sm flex-grow">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
