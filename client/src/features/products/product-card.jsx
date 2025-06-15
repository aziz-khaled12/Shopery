import React from "react";
import { CardTag, IconButton2, StarRating } from "../../components/ui";
import { useNavigate } from "react-router-dom";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useProductModalStore } from "../../store/productModalStore";
import useCartStore from "../../store/cartStore";
import useWishlistStore from "../../store/wishlistStore";

const ProductCard = ({ product, className }) => {

  const { addToCart } = useCartStore();
  const { openProductModal } = useProductModalStore();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlistStore();
  const discountPrice = product.price - (product.price * product.discount) / 100;
  const navigate = useNavigate();

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  }

  return (
    <div
      className={`${className} group border bg-white border-gray-200 transition-all duration-200 hover:z-10 hover:border-primary hover:shadow-hover-primary w-full p-2 sm:p-3 cursor-pointer ${className}`}
      onClick={() => navigate("/categories/vegetables/chinese cabbage")}
    >
      <div className="w-full h-48 sm:h-60 relative overflow-hidden ">
        {product.discount && (
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
            <CardTag color={"red"}>sale {product.discount}%</CardTag>
          </div>
        )}
        <div className="absolute top-0 right-0 flex items-center gap-1 sm:gap-2 flex-col transition-all duration-200 opacity-0 invisible translate-y-6 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 mt-1 sm:mt-2 z-10">
          <IconButton2
            icon={isInWishlist(product.id) ? <Heart className="h-5 w-5 fill-red-500 stroke-red-500" /> : <Heart className="h-5 w-5" />}
            className="text-xs sm:text-base"
            onClick={handleWishlist}
          />
          <IconButton2
            icon={<Eye className="h-5 w-5" />}
            className="text-xs sm:text-base"
            onClick={(e) => {
              e.stopPropagation();
              openProductModal();
            }}
          />
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-2"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between px-1 sm:px-2 py-2 sm:py-3">
        <div className="flex-1 min-w-0">
          <h1 className="text-xs sm:text-sm font-normal text-gray-500 group-hover:text-primary transition-all duration-200 truncate">
            {product.title}
          </h1>
          <div className="font-medium flex gap-1 text-sm sm:text-base">
            ${product.price.toFixed(2)}{" "}
            {product.discount && (
              <span className="line-through text-gray-400 text-xs sm:text-sm">
                ${discountPrice.toFixed(2)}
              </span>
            )}
          </div>
          <StarRating rating={product.averageRating} className="mt-1" />
        </div>
        <IconButton2
          icon={<ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />}
          className="ml-2 text-sm sm:text-base"
          onClick={(e) => {
            e.stopPropagation();
            addToCart({...product, quantity: 1});
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
