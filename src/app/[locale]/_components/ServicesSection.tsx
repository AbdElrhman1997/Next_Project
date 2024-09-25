import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">خدماتنا</h2>
        <p className="mt-4 text-gray-600">نقدم لك الأفضل في عالم الخدمات</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">الخدمة الأولى</h3>
            <p className="text-gray-600 mb-6 text-justify">
              Detailed description of the first service offered. Highlight key
              benefits and features Detailed description of the first service
              offered. Highlight key benefits and features benefits and features
              Detailed description of the first service offered.
            </p>
            <Link
              href="/services/service1"
              className="text-[#2481ce] hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">الخدمة الثانية</h3>
            <p className="text-gray-600 mb-6 text-justify">
              Detailed description of the first service offered. Highlight key
              benefits and features Detailed description of the first service
              offered. Highlight key benefits and features benefits and features
              Detailed description of the first service offered.
            </p>
            <Link
              href="/services/service1"
              className="text-[#2481ce] hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">الخدمة الثالثة</h3>
            <p className="text-gray-600 mb-6 text-justify">
              Detailed description of the first service offered. Highlight key
              benefits and features Detailed description of the first service
              offered. Highlight key benefits and features benefits and features
              Detailed description of the first service offered.
            </p>
            <Link
              href="/services/service1"
              className="text-[#2481ce] hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/services" className="filled-button">
          Show More
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
