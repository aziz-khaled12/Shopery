import React from "react";
import Logo from "/LightLogo.png";
import NewsLetter from "./NewsLetter";
const Footer = () => {
  const footerLinks = {
    myAccount: [
      { label: "My Account", href: "#" },
      { label: "Order History", href: "#" },
      { label: "Shopping Cart", href: "#" },
      { label: "Wishlist", href: "#" },
    ],
    helps: [
      { label: "Contact", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Terms & Condition", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    proxy: [
      { label: "About", href: "#" },
      { label: "Shop", href: "#" },
      { label: "Product", href: "#" },
      { label: "Track Order", href: "#" },
    ],
    categories: [
      { label: "Fruit & Vegetables", href: "#" },
      { label: "Meat & Fish", href: "#" },
      { label: "Bread & Bakery", href: "#" },
      { label: "Beauty & Health", href: "#" },
    ],
  };

  const renderLinkColumn = (title, links) => (
    <div className="mb-8 lg:mb-0">
      <h3 className="font-medium mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-green-500 transition-colors text-sm font-normal block"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-full">
      <NewsLetter />

      <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <div className="w-32 h-8 rounded flex items-center justify-center">
                  <img src={Logo} alt="Logo" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 font-normal leading-relaxed">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                <span className="py-1.5 border-b border-green-500 text-white inline-block">
                  (210) 555-0114
                </span>
                <span className="text-gray-400 hidden sm:inline">or</span>
                <span className="py-1.5 border-b border-green-500 text-white inline-block">
                  Proxy@gmail.com
                </span>
              </div>
            </div>

            {/* Link Columns - Each takes 1 column */}
            <div className="lg:col-span-1">
              {renderLinkColumn("My Account", footerLinks.myAccount)}
            </div>
            <div className="lg:col-span-1">
              {renderLinkColumn("Helps", footerLinks.helps)}
            </div>
            <div className="lg:col-span-1">
              {renderLinkColumn("Proxy", footerLinks.proxy)}
            </div>
            <div className="lg:col-span-1">
              {renderLinkColumn("Categories", footerLinks.categories)}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="text-gray-400 text-sm order-2 lg:order-1">
                Ecobazar eCommerce © 2021. All Rights Reserved
              </div>
              <div className="flex flex-wrap items-center gap-2 order-1 lg:order-2">
                <PaymentIcon icon={<CircleIcon />} />
                <PaymentIcon text="VISA" />
                <PaymentIcon text="DISC" />
                <PaymentIcon text="MC" />
                <PaymentIcon text="SECURE" width="w-16" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Payment method icon component
const PaymentIcon = ({ icon, text, width = "w-10" }) => (
  <div
    className={`${width} h-6 bg-white rounded flex items-center justify-center flex-shrink-0`}
  >
    <div className="text-black text-xs font-bold">{icon || text}</div>
  </div>
);

// Circle icon component
const CircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export default Footer;
