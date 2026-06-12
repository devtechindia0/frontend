"use client";
import { useState } from "react";

export default function Whychoose({ content }: { content: any }) {
  const [openIndex, setOpenIndex] = useState(content.items?.length - 1);

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${content.backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="bg-black/0 -mx-6 -my-20 px-6 py-20">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {content.heading}
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Left — Accordion */}
          <div className="w-full lg:w-1/2 space-y-2">
            {content.items?.map((item: any, index: number) => (
              <div key={index} className="border border-gray-600 rounded">

                {/* Title Row */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className={`font-semibold text-sm ${openIndex === index ? "text-yellow-400" : "text-white"}`}>
                    {item.title}
                  </span>
                  <span className={`text-xl font-bold ${openIndex === index ? "text-yellow-400" : "text-white"}`}>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Description */}
                {openIndex === index && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right — Title + Desc + Image */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-yellow-400 font-bold text-xl mb-4 leading-snug">
              {content.rightSection.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {content.rightSection.desc}
            </p>
            <img
              src={content.rightSection.image}
              alt={content.rightSection.alt}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}