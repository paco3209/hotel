export default function Hero() {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://res.cloudinary.com/dq4ssyljd/image/upload/v1734397683/hotel/kgjfhvltbap3euhg12ct.jpg')"}}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Bienvenidos a Hotel Saint Germain</h1>
        <p className="text-lg sm:text-xl md:text-2xl">Experiencia cálida y confortable desde 1971</p>
      </div>
    </section>
  )
}
