import { FaTruck, FaShoppingBag, FaHeadset, FaUndo } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-section py-16 bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-[#2e3192] text-center mb-8">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-center text-lg mb-12 max-w-xl mx-auto">
          Trusted by our customers for over 10 years. Quality, convenience, and
          support you can count on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaTruck, title: "Fast & Free Shipping" },
            { icon: FaShoppingBag, title: "Easy to Shop" },
            { icon: FaHeadset, title: "24/7 Support" },
            { icon: FaUndo, title: "Hassle Free Returns" },
          ].map((feature, index) => (
            <div
              key={index}
              className="feature p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              <feature.icon className="w-12 h-12 text-[#2e3192] mx-auto mb-4 transition-transform duration-300 transform hover:scale-110" />
              <h3 className="font-bold text-xl text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
