import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 bg-muted">
      <div className="container px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Sobre el hotel</h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 items-center">
          <div className="space-y-4">
            <p className="text-base sm:text-lg">
              La Hostería Saint Germain, ubicada en Villa Gesell, ofrece una experiencia cálida y confortable desde 1971. Situada frente al mar y a pasos de la avenida principal, es el lugar ideal para disfrutar de unas vacaciones relajantes. Este hotel familiar, atendido con dedicación por sus propios dueños, cuenta con Wi-Fi gratuito, un delicioso desayuno incluido y se encuentra a solo 10 cuadras del centro, permitiendo combinar tranquilidad con acceso a la vida urbana de la ciudad.</p>

          </div>
          
        </div>
      </div>
    </section>
  )
}
