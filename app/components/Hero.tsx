import Navbar from "./Navbar";
export default function Hero({ content, navItems }: { content: any, navItems: any[] }) {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.bg_image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar */}
       <Navbar navItems={navItems} />
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <p className="text-white text-lg mb-4 tracking-widest">{content.tagline}</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">{content.heading}</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10">{content.subheading}</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {["Bing Ads", "TopSEOs", "Clutch", "Google AdWords"].map((badge) => (
            <div key={badge} className="bg-white px-4 py-2 rounded text-sm font-semibold text-gray-800">
              {badge}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={content.button1_link} className="bg-yellow-400 text-black font-bold px-8 py-3 hover:bg-yellow-300 transition">
            {content.button1_text}
          </a>
          <a href={content.button2_link} className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-black transition">
            {content.button2_text}
          </a>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <a href="#" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition shadow-lg">💬</a>
        <a href="#" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition shadow-lg">📞</a>
        <a href="#" className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition shadow-lg">✉️</a>
      </div>

    </div>
  );
}