import React from "react";
import { CardTag, IconButton2, StarRating } from "../ui";
import { useNavigate } from "react-router-dom";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useProductModalStore } from "../../store/productModalStore";
import useCartStore from "../../store/cartStore";
import useWishlistStore from "../../store/wishlistStore";

const ProductCard = ({ product, className = "" }) => {
  const { addToCart } = useCartStore();
  const { openProductModal, setProduct } = useProductModalStore();
  const { addToWishlist, isInWishlist, removeFromWishlist } =
    useWishlistStore();

  const categoryId = product.category._id;
  const navigate = useNavigate();

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product._id);
    }
  };

  return (
    <div
      className={`${className} group border bg-white border-gray-200 transition-all duration-200 hover:z-10 hover:border-primary hover:shadow-hover-primary w-full  cursor-pointer ${className}`}
      onClick={() => navigate(`/categories/${categoryId}/${product._id}`)}
    >
      <div className="w-full h-48 sm:h-60 relative overflow-hidden ">
        {product.discount.isActive && (
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
            <CardTag color={"red"}>sale {product.discount.percentage}%</CardTag>
          </div>
        )}
        <div className="absolute top-2 right-2  sm:right-4 flex items-center gap-1 sm:gap-2 flex-col transition-all duration-200 opacity-0 invisible translate-y-6 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 mt-1 sm:mt-2 z-10">
          <IconButton2
            classes={"bg-white"}
            icon={
              isInWishlist(product._id) ? (
                <Heart className="sm:h-5 sm:w-5 h-4 w-4 fill-red-500 stroke-red-500" />
              ) : (
                <Heart className="sm:h-5 sm:w-5 h-3 w-3" />
              )
            }
            className="text-xs sm:text-base"
            onClick={handleWishlist}
          />
          <IconButton2
            classes={"bg-white"}
            icon={<Eye className="sm:h-5 sm:w-5 h-3 w-3" />}
            className="text-xs sm:text-base"
            onClick={(e) => {
              e.stopPropagation();
              setProduct(product);
              openProductModal();
            }}
          />
        </div>
        <img
          src={product.previewImage}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:pt-3 sm:pb-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-xs sm:text-sm font-normal text-gray-500 group-hover:text-primary transition-all duration-200 truncate">
            {product.name}
          </h1>
          {product.discount.isActive ? (
            <div className="font-medium flex gap-1 text-sm sm:text-base">
              ${product.discount.price.toFixed(2)}{" "}
              <span className="line-through text-gray-400 text-xs sm:text-sm">
                ${product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <div className="font-medium flex gap-1 text-sm sm:text-base">
              ${product.price.toFixed(2)}{" "}
            </div>
          )}

          <StarRating rating={product.averageRating} className="mt-1" />
        </div>
        <IconButton2
          icon={<ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />}
          className="ml-2 text-sm sm:text-base"
          onClick={(e) => {
            e.stopPropagation();
            addToCart({ ...product, quantity: 1 });
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
