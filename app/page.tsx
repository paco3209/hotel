import Header from "./components/Header"
import Hero from "./components/Hero"
import PhotoGallery from "./components/PhotoGallery"
import About from "./components/About"
import LocationAndContact from "./components/LocationAndContact"
import ClientReviews from "./components/ClientReviews"
import WhatsAppButton from "./components/WhatsAppButton"
import Footer from "./components/Footer"
import { PromoModal } from "./components/PromoModal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PhotoGallery />
      <About />
      <LocationAndContact />
      <ClientReviews />
      <Footer />
      <WhatsAppButton />
      
    </main>
  )
}
