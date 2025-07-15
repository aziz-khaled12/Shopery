import React, { useState } from "react";

import {
  ShoppingCart,
  Heart,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import {
  GridContainer,
  IconButton,
  IconButton2,
  SectionHeader,
  StarRating,
} from "../components/ui";
import { ImageSlider } from "../components/ui";
import Counter from "../components/ui/other/Counter";
import { products } from "../consts/ProductsConsts";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/cards";
import { useGetProduct } from "../hooks/queries/useProducts";

const ProductPage = () => {
  const [count, setCount] = useState(0);
  const { productId } = useParams();

  const { data, isPending } = useGetProduct(productId);
  const product = data;
  console.log("Product data:", product);

  const images = !isPending && [product.previewImage, ...product.images.map((img) => img)];

  return (
    !isPending && (
      <div className="w-full sm:px-page px-6">
        <section className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
          <div className="w-full lg:w-1/2">
            <ImageSlider images={images} />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {product.title}
              </h1>
              <div
                className={`text-sm rounded-sm px-2 py-1 w-fit ${
                  product.quantity > 0
                    ? "bg-primary/10 text-primary"
                    : "bg-danger/10 text-danger"
                }`}
              >
                {product.quantity > 0 ? "In Stock" : "Out of Stock"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:items-center gap-4 sm:gap-7 mb-5">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  <StarRating rating={product.averageRating} />
                </div>
                <p className="text-sm text-gray-500">
                  {product.ratingCount} Reviews
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
              <div className="gap-1 flex items-center">
                <span className="line-through text-lg sm:text-xl text-gray-300">
                  ${product.price.toFixed(2)}
                </span>
                {product?.discount?.isActive && (
                  <span className="text-xl sm:text-2xl font-medium text-hard-primary">
                    ${product.discount.price.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="text-sm rounded-full text-danger px-3 py-1 bg-danger/10 font-medium w-fit">
                {product?.discount?.isActive &&
                  `${product.discount.percentage}% Off`}
              </div>
            </div>

            <div className="w-full h-0.5 bg-gray-200"></div>

            <div className="w-full my-6">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm">
                  Brand:{" "}
                  <span className="text-hard-primary font-medium">
                    {product.brand}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Share Item: </span>
                  <IconButton2 icon={<Facebook />} />
                  <IconButton2 icon={<Twitter />} />
                  <IconButton2 icon={<Instagram />} />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                {product.description}
              </p>
            </div>

            <div className="w-full h-0.5 bg-gray-200"></div>

            <div className="flex items-center py-4 gap-3">
              <Counter count={count} setCount={setCount} />
              <IconButton end grow icon={<ShoppingCart />}>
                Add to Cart
              </IconButton>
              <IconButton2 icon={<Heart />} />
            </div>

            <div className="w-full h-0.5 bg-gray-200"></div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 mb-3">
              <div className="text-sm font-medium">Category:</div>
              <div className="text-sm text-gray-500">{product.category.name}</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-2">
              <div className="text-sm font-medium">Tags:</div>
              <div className="text-sm text-gray-500">
                {product.tags.map((tag) => tag.name).join(", ")}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full my-20">
          <SectionHeader
            title={"Related Products"}
            viewAll={false}
            alignment="center"
          />
          <GridContainer>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </GridContainer>
        </section>
      </div>
    )
  );
};

export default ProductPage;
