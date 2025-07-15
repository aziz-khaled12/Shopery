import React from "react";
import { Button } from "../components/ui";
import { CircleX, Heart } from "lucide-react";
import useWishlistStore from "../store/wishlistStore";
import useCartStore from "../store/cartStore";

const Wishlist = ({ withTitle = true }) => {
  const { wishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const products = []


  return (
    <div className={`w-full  ${withTitle ? "px-6 sm:px-page" : "p-0"}`}>
      <div className="max-w-6xl mx-auto">
        {withTitle && (
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 w-full text-center">
            My Wishlist
          </h1>
        )}

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          {/* Header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-12 border-b border-gray-200 px-6 py-4">
            <div className="col-span-6 text-left">
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Product
              </span>
            </div>
            <div className="col-span-2 text-left">
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Price
              </span>
            </div>
            <div className="col-span-2 text-left">
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Status
              </span>
            </div>
            <div className="col-span-2 text-left">
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Actions
              </span>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-200">
            {products.map((item, index) => (
              <div
                key={index}
                className="px-6 hover:bg-gray-50 transition-colors"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0 p-2"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {item.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-900 mt-1">
                        ${item.price}
                      </p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-sm text-sm font-medium mt-2 ${
                          item.quntity > 0
                            ? "bg-green-100 text-primary"
                            : "bg-red-100 text-danger"
                        }`}
                      >
                        {item.quntity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="fill"
                      size="small"
                      fullWidth
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>
                    <button className="px-4 py-2 cursor-pointer rounded-md text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center">
                  <div className="col-span-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0 p-2"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-gray-900 truncate">{item.title}</h3>
                    </div>
                  </div>

                  <div className="col-span-2 font-medium">
                    <span
                      className={` ${
                        item.discount.isActive
                          ? "line-through text-gray-500"
                          : "text-gray-900"
                      }`}
                    >
                      ${item.price}{" "}
                    </span>
                    <span
                      className={`${
                        item.discount.isActive
                          ? "text-primary"
                          : "text-gray-500"
                      }`}
                    >
                      {item.discount.isActive
                        ? `$${
                            item.price -
                            (item.price * item.discount.percentage) / 100
                          }`
                        : ""}
                    </span>
                  </div>

                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-sm text-sm font-medium ${
                        item.quntity > 0
                          ? "bg-green-100 text-primary"
                          : "bg-red-100 text-danger"
                      }`}
                    >
                      {item.quntity > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="col-span-2 flex gap-4 items-center">
                    <Button
                      variant={item.quntity > 0 ? "fill" : "disabled"}
                      size="small"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>
                    <CircleX className="text-gray-600 hover:text-danger cursor-pointer h-6 w-6 transition-all duration-200"></CircleX>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {wishlist.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="text-gray-400 mb-4">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Start adding products you love to your wishlist
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
