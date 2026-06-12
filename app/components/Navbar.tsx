export default function Navbar({ navItems }: { navItems: any[] }) {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-white/20 bg-transparent">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-2 rounded">
          <span className="text-black font-bold text-xl">iS</span>
        </div>
        <div>
          <p className="text-white font-bold text-lg leading-none">Techindia</p>
          <p className="text-yellow-400 text-xs">Software | AIO AGENCY</p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item: any) => (
          <div key={item.id} className="relative group">
            
              <a href={item.link}
              className="text-white hover:text-yellow-400 transition text-base flex items-center gap-1"
            >
              {item.label}
              {item.has_dropdown && <span className="text-xs">▾</span>}
            </a>

            {/* Dropdown */}
            {item.has_dropdown && item.dropdown_items && (
              <div className="absolute top-full left-0 w-48 bg-white rounded  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {item.dropdown_items.map((drop: any, index: number) => (
                  
                    <a key={index}
                    href={drop.link}
                    className="block px-4 py-2  text-gray-800 hover:bg-yellow-400 hover:text-black text-sm transition"
                  >
                    {drop.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
        Start Your Project
      </button>

    </nav>
  );
}