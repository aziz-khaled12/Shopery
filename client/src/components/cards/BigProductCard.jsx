import React from "react";
import {
  CardTag,
  Button,
  IconButton2,
  StarRating,
  Countdown,
} from "../ui";
import { Eye, Heart } from "lucide-react";
import useCartStore from "../../store/cartStore";

const BigProductCard = ({ product }) => {


  const { addToCart } = useCartStore();
  return (
    <div className="w-full h-full border bg-white border-gray-200 group hover:border-primary hover:shadow-hover-primary p-4 sm:p-6">
      <div className="relative w-full">
        <div className="flex absolute top-4 left-4 gap-2 sm:top-6 sm:left-6">
          <CardTag color="red">sale {product.discount.percentage}%</CardTag>
          <CardTag color="blue">new</CardTag>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto max-w-[528px] max-h-[448px] object-cover"
        />
        <div className="flex gap-1 w-full px-4 sm:px-6 absolute bottom-4">
          <IconButton2 icon={<Heart />}></IconButton2>
          <Button grow size={{ base: "small", sm: "medium" }} onClick={() => addToCart({...product, quantity: 1})}>
            Add to cart
          </Button>
          <IconButton2 icon={<Eye />}></IconButton2>
        </div>
      </div>
      <div className="w-full items-center justify-center flex flex-col text-center">
        <div className="w-full flex flex-col items-center gap-1 pt-3">
          <h1 className="font-normal text-base sm:text-lg text-gray-600 group-hover:text-primary">
            {product.title}
          </h1>
          <div className="text-lg sm:text-2xl font-medium flex items-center gap-1">
            <p>${product.discount.isActive ? product.discount.price.toFixed(2) : product.price.toFixed(2)}</p>{" "}
            {product.discount.isActive && (
              <span className="line-through text-gray-300">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex gap-1 items-center">
            <StarRating rating={product.averageRating} />{" "}
            <span className="text-gray-500 text-xs sm:text-sm">{`(${product.ratingCount} Feedback)`}</span>
          </div>
        </div>
        <div className="py-4 sm:py-6">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            {" "}
            Hurry up! Offer ends in:{" "}
          </p>
          <Countdown targetDate={"2025-12-31T23:59:59.999Z"} />
        </div>
      </div>
    </div>
  );
};

export default BigProductCard;
