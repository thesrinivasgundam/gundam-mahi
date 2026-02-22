export default function Services() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        Services
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 sm:gap-8
      ">
        {["Web Dev", "API Dev", "UI/UX"].map((service) => (
          <div
            key={service}
            className="
              p-6 sm:p-8
              bg-white
              rounded-xl
              shadow-lg
              hover:scale-105
              transition duration-300
            "
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              {service}
            </h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">
              High quality scalable solutions.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}