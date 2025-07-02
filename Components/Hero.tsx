// Components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero2.png')" }}
    >
      <div className="bg-white/70 p-6 rounded-md backdrop-blur-md">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to Adora
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
          Building modern web experiences with performance and elegance in mind.
        </p>
        <a
          href="#about"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
