import React from "react";
import { Box, Headset, Lock, Truck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Free Shipping",
      paragraph: "Free shipping on all your order",
      icon: <Truck size={40}/>,
    },
    {
      id: 2,
      title: "Customer Support 24/7",
      paragraph: "Instant access to Support",
      icon: <Headset size={40} />,
    },
    {
      id: 3,
      title: "100% Secure Payment",
      paragraph: "We ensure your money is safe",
      icon: <Lock size={40} />,
    },
    {
      id: 4,
      title: "Money-Back Guarantee",
      paragraph: "30 Days Money-Back Guarantee",
      icon: <Box size={40} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="text-primary">{benefit.icon}</div>
          <div className="text-center sm:text-left">
            <h1 className="text-sm lg:text-base font-semibold mb-1 sm:mb-2">
              {benefit.title}
            </h1>
            <p className="text-xs lg:text-sm text-gray-500">
              {benefit.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
