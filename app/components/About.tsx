export default function About({ content }: { content: any }) {
  return (
    <section className="py-20 px-6 bg-gray-950 text-white">
      
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          {content.heading}
        </h2>
        <p className="text-yellow-400 font-semibold text-lg mb-6">
          {content.subheading}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {content.services.map((service: any, index: number) => (
            
              <a key={index}
              href={service.link}
              className="border border-gray-700 p-8 hover:border-yellow-400 transition group"
            >
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition">
                <span className="text-2xl">⚙️</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}