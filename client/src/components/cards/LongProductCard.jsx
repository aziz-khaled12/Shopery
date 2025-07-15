import React from "react";
import { IconButton2, StarRating } from "../ui";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import useCartStore from "../../store/cartStore";

const Product = ({ product }) => {

  const { addToCart } = useCartStore();

  return (
    <div className="flex group items-center rounded-md border-2 border-gray-200 transition-all duration-200 hover:border-primary hover:shadow-hover-primary w-full overflow-hidden">
      <div className="h-24 w-24">
        <img src={product.image} alt={product.title} className="w-full h-full" />
      </div>
      <div className="px-3 py-6 relative">
        <h1 className="text-sm font-normal text-gray-500 group-hover:text-primary transition-all duration-200">
          {product.title}
        </h1>

        {/* Price and rating - visible by default, hidden on hover */}
        <div className="transition-all duration-300 group-hover:opacity-0 group-hover:invisible">
          <p className="text-base font-medium mb-1">{`$${product.price}`}</p>
          <StarRating rating={product.averageRating} />
        </div>

        {/* Icon buttons - hidden by default, visible on hover with animation */}
        <div
          className="absolute left-3 top-12 flex items-center gap-2 transition-all duration-300 
                        opacity-0 invisible translate-y-6 
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 mt-2"
        >
          <IconButton2 icon={<ShoppingCart className="w-5 h-5" onClick={(e) => {
            e.stopPropagation();
            addToCart({...product, quantity: 1});
          }}/>}></IconButton2>
          <IconButton2 icon={<Eye />}></IconButton2>
          <IconButton2 icon={<Heart />}></IconButton2>
        </div>
      </div>
    </div>
  );
};

export default Product;
