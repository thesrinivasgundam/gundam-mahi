import Image from "next/image";

const services = [
  {
    name: "SEO",
    image: "/seo.png",
    description:
      "Improve your search engine rankings with strategic keyword optimization, technical SEO audits, and high-quality backlink building.",
  },
  {
    name: "Google Ads",
    image: "/adwords.png",
    description:
      "Drive instant targeted traffic with high-converting PPC campaigns optimized for ROI, audience segmentation, and smart bidding strategies.",
  },
  {
    name: "Social Media Ads",
    image: "/content-strategy.png",
    description:
      "Engage and convert your audience with performance-driven campaigns across Instagram, Facebook, and LinkedIn platforms.",
  },
  {
    name: "Email Marketing",
    image: "/ads.png",
    description:
      "Nurture leads and increase retention with automated email funnels, personalized campaigns, and conversion-focused copywriting.",
  },
  {
    name: "Influencer Marketing",
    image: "/influencer.png",
    description:
      "Expand brand reach through strategic collaborations with niche influencers to build trust and drive authentic engagement.",
  },
];

export default function Services() {
  return (
    <div className="space-y-12">
      <h2 className="text-6xl md:text-4xl lg:text-6xl sm:text-4xl tracking-[0.1em] font-bold text-center">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="p-6 sm:p-8 bg-white rounded-xl tracking-[0.1em] shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-scale-down"
              />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold">
              {service.name}
            </h3>

            <p className="mt-3 text-gray-600 tracking-normal text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}