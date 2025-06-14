import React, { useState } from "react";
import BigCabbage from "/BigCabbage.png";
import SliderImage1 from "/SliderImage1.png";
import SliderImage2 from "/SliderImage2.png";
import SliderImage3 from "/SliderImage3.png";
import {
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Heart,
  Minus,
  Plus,
  Star,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { GridContainer, IconButton, IconButton2, SectionHeader } from "../ui";
import Apple from "/Apple.png";
import ProductCard from "../../features/products/product-card";
import { ImageSlider } from "../common";
import Counter from "../ui/other/Counter";
import { products } from "../../consts/ProductsConsts";

const ProductPage = () => {
  const [count, setCount] = useState(0);
  const images = [BigCabbage, SliderImage1, SliderImage2, SliderImage3];

  return (
    <div className="w-full sm:px-page px-6">
      <section className="flex gap-6 w-full max-w-7xl">
        <ImageSlider images={images} />

        <div className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl font-semibold">Chinese Cabbage</h1>
            <div className="text-sm rounded-sm text-primary px-2 py-1 bg-primary/10">
              In Stock
            </div>
          </div>

          <div className="flex w-full items-center gap-7 mb-5">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (item) => (
                    <Star
                      key={item}
                      className="text-warning fill-warning h-4 w-4 lg:h-4.5 lg:w-4.5"
                    />
                  )
                )}
              </div>
              <p className="text-sm text-gray-500">4 Reviews</p>
            </div>

            <div className="text-sm text-gray-700 font-medium">
              SKU: <span className="text-gray-500 font-normal">2,51,594</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <div className="gap-1 flex items-center">
              <span className="line-through text-xl text-gray-300">$48.00</span>
              <span className="line-through text-2xl font-medium text-hard-primary">
                $17.28
              </span>
            </div>
            <div className="text-sm rounded-full text-danger px-3 py-1 bg-danger/10 font-medium">
              64% Off
            </div>
          </div>

          <div className="w-full h-0.5 bg-gray-200"></div>

          <div className="w-full my-6">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                Brand:{" "}
                <span className="text-hard-primary font-medium">Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Share Item: </span>
                <IconButton2 icon={<Facebook />} />
                <IconButton2 icon={<Twitter />} />
                <IconButton2 icon={<Instagram />} />
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 max-w-xl">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
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

          <div className="flex items-center gap-2 mt-6 mb-3">
            <div className="text-sm font-medium">Category:</div>
            <div className="text-sm text-gray-500">Vegetables</div>
          </div>

          <div className="flex items-start gap-2">
            <div className="text-sm font-medium">Tags:</div>
            <div className="text-sm text-gray-500">
              Vegetables Healthy Chinese Cabbage Green Cabbage
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
            <ProductCard
              key={index}
              image={product.image}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
        </GridContainer>
      </section>
    </div>
  );
};

export default ProductPage;
