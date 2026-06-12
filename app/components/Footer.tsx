export default function Footer({ content }: { content: any }) {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Top Bar */}
      <div className="border-b border-gray-700 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded">
              <span className="text-black text-sm">📞</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Call Anytime</p>
              <p className="text-white font-semibold text-sm">{content.topBar.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded">
              <span className="text-black text-sm">✉️</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Send Email</p>
              <p className="text-white font-semibold text-sm">{content.topBar.email}</p>
            </div>
          </div>

          {/* Button */}
          
            <a href={content.topBar.buttonLink}
            className="bg-yellow-400 text-black font-bold px-6 py-3 text-sm hover:bg-yellow-300 transition"
          >
            {content.topBar.buttonText}
          </a>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {content.columns?.map((col: any, index: number) => (
            <div key={index}>
              <h4 className="text-yellow-400 font-bold text-sm mb-4 uppercase tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links?.map((link: any, i: number) => (
                  <li key={i}>
                    
                      <a href={link.link}
                      className="text-gray-400 text-xs hover:text-yellow-400 transition leading-relaxed"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Address + Contacts */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-xs mb-2">
              <span className="font-semibold text-white">Contact Us: </span>
              {content.bottomBar.address}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="text-gray-400 text-xs">🇺🇸 {content.bottomBar.phone1}</span>
              <span className="text-gray-400 text-xs">🇮🇳 {content.bottomBar.phone2}</span>
              <span className="text-gray-400 text-xs">📞 Landline {content.bottomBar.landline}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {content.bottomBar.social?.map((s: any, i: number) => (
              
                <a key={i}
                href={s.link}
                className="bg-gray-700 hover:bg-yellow-400 hover:text-black text-white w-8 h-8 flex items-center justify-center rounded transition text-xs font-bold uppercase"
              >
                {s.platform[0].toUpperCase()}
              </a>
            ))}
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">{content.bottomBar.copyright}</p>
        </div>
      </div>

    </footer>
  );
}