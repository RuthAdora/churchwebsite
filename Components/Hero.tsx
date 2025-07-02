// Components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero2.png')" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-white leading-tight mb-6 drop-shadow-lg">
          Welcome to Favor & Mercy Church
        </h1>
        <p className="text-xl md:text-2xl text-white font-light mb-8 drop-shadow-md">
          A Home of Grace & Love. <br /> Come As You Are – Leave Transformed.
        </p>
        <a
          href="#about"
          className="bg-white text-black text-lg font-bold px-30 py-10 rounded-full shadow-lg hover:bg-blue-300 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
