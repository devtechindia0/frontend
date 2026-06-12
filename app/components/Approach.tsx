export default function Approach({ content }: { content: any }) {
  return (
    <section className="py-20 px-6 bg-[#FAEBD7] text-white">
      
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">
          {content.heading}
        </h2>
      </div>

       <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
  <div className="flex flex-col lg:flex-row items-center gap-10">

    {/* Left Side - FAQ */}
    <div className="w-full lg:w-1/2">

      <div className="space-y-4">
        <details className="border border-gray-200 rounded-xl p-4 bg-gray-50">
          <summary className="cursor-pointer font-semibold text-gray-800">
            What is Tailwind CSS?
          </summary>
          <p className="mt-3 text-gray-600">
            Tailwind CSS is a utility-first CSS framework.
          </p>
        </details>

        <details className="border border-gray-200 rounded-xl p-4 bg-gray-50">
          <summary className="cursor-pointer font-semibold text-gray-800">
            Why use Tailwind?
          </summary>
          <p className="mt-3 text-gray-600">
            It helps build UI faster with utility classes.
          </p>
        </details>

        <details className="border border-gray-200 rounded-xl p-4 bg-gray-50">
          <summary className="cursor-pointer font-semibold text-gray-800">
            Is Tailwind responsive?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, it provides responsive utility classes.
          </p>
        </details>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={content.image}
        alt={content.alt}
        className="w-full max-w-md rounded-2xl shadow-lg object-cover"
      />
    </div>

  </div>
</div>

    </section>
  );
}